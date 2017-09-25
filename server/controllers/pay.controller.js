import Transaction from '../models/transaction'
import https from 'https'
import cuid from 'cuid'
import querystring from 'querystring'
import fs from 'fs'
import nodemailer from 'nodemailer'

const LOCATION_ID = 'CBASEAQ6ZeZCimKPEDuocy7E4BogAQ' // SandBox Location
const ACCESS_TOKEN = 'sandbox-sq0atb-O0DDvmE1XcZPMtj7SbFG7Q' // SandBox Access Token

const REPORTING_CLOUD_CREDENTIAL = 'Basic c25vd3NlYS5kcmVhbUBnbWFpbC5jb206U25vd3NlYTUh'

export function buy(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { nonce, amount } = req.body

  if ( !nonce || !amount ) {
    return res.status(403).json({ status: 403, message: 'Missing Parameters' })
  }

  const params = {
    'card_nonce': nonce,
    'amount_money': {
      'amount': amount,
      'currency': 'USD'
    },
    'idempotency_key': cuid()
  }

  return fetch(`https://connect.squareup.com/v2/locations/${ LOCATION_ID }/transactions`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    method: 'POST',
    body: JSON.stringify(params),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {

    if (!response.ok) {
      res.status(500).json({ status: 500, err: json })
    } else {
      res.status(200).json({ status: 200, transaction: json.transaction })
    }
  })
}

/*
  params:
    given_name,
    family_name,
    phone_number,
    email,
    reference_id
*/
export function createCustomer(params) {

  return fetch('https://connect.squareup.com/v2/customers', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    method: 'POST',
    body: JSON.stringify(params),
  })
  .then(response => response.json().then(json => ({ json, response })))
}

export function retrieveCustomer(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { customer_id } = req.body

  return fetch(`https://connect.squareup.com/v2/customers/${ customer_id }`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    method: 'GET'
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {

    if (!response.ok) {
      return res.status(500).json({ status: 500, err: json.errors })
    } else {
      return res.status(200).json({ status: 200, customer: json.customer })
    }
  })
}

export function createCustomerCard(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { customer_id, card_nonce, billing_address, cardholder_name } = req.body

  if ( !customer_id || !card_nonce ) {
    return res.status(403).json({ status: 403, message: 'Missing Parameters' })
  }

  const params = {
    card_nonce: card_nonce,
    billing_address: billing_address,
    cardholder_name: cardholder_name
  }

  return fetch(`https://connect.squareup.com/v2/customers/${ customer_id }/cards`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    method: 'POST',
    body: JSON.stringify(params),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {

    if (!response.ok) {
      res.status(500).json({ status: 500, err: json.errors })
    } else {
      res.status(200).json({ status: 200, card: json.card })
    }
  })
}

export function createOutput(template, data) {
  return fetch(`https://api.reporting.cloud/v1/document/merge?returnFormat=pdf&templateName=${ template }.docx&test=true`, {
    headers: {
        'content-type': 'application/json',
        'Authorization': REPORTING_CLOUD_CREDENTIAL
      },
    method: 'POST',
    body: JSON.stringify({ mergeData: data })
  })
  .then(response => {
    return response.json().then(json => ({ json, response }))
  })
}

export function saveTransaction(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { transactionId, template, data } = req.body

  if (!transactionId || !template || !data) {
    return res.status(403).json({ status: 403, message: 'Missing Parameters.' })
  }

  let output = cuid()
  let path = __dirname + `/../../dist/client/${ output }.pdf`

  createOutput(template, data)
  .then(({ json, response }) => {
    if (!response.ok) {
      return res.status(500).json({ status: 500, message: "Can't create output from template." })
    } else {
      const decoded = Buffer.from(json[0], 'base64')
      return new Promise((resolve, reject) =>
        fs.writeFile(path, decoded, (err) => {
          if (err) {
            reject(err)
          } else {
            const transaction = new Transaction({
              transactionId: transactionId,
              doc: output + '.pdf'
            })
            resolve(transaction.save())
          }
        })
      )
    }
  })
  .then(saved => res.status(200).json({ status: 200, transaction: saved }))
  .catch( err => {
    res.status(500).json({ status: 500, message: 'Internal Server Error !', err: err });
  });
}

export function sendOutputByEmail(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { receiver, output } = req.body

  if (!receiver || !output) {
    return res.status(403).json({ status: 403, message: 'Missing Parameters.' })
  }

  var transporter = nodemailer.createTransport({
    service: 'SendGrid',
    auth: {
      user: 'xpertcooldev',
      pass: 'xpertcooldev5'
    }
  });

  var mailOptions = {
    from: 'support@legalmaven.com',
    to: receiver,
    subject: 'LegalMaven - Purchased Form',
    html: `<html>Thanks for using Legal Maven<br/><p><a href="https://legalmaven.herokuapp.com/${output}" download>Click here to receive the form.</a></p></html>`
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      res.status(500).json({ status: 500, message: 'Internal Server Error !', err: err });
    } else {
      res.status(200).json({ status: 200, message: 'Email Sent' })
    }
  });
}
