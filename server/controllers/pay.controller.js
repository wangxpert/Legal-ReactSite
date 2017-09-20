import Document from '../models/document'
import https from 'https'
import cuid from 'cuid'
import querystring from 'querystring'

const LOCATION_ID = 'CBASEAQ6ZeZCimKPEDuocy7E4BogAQ' // SandBox Location
const ACCESS_TOKEN = 'sandbox-sq0atb-O0DDvmE1XcZPMtj7SbFG7Q' // SandBox Access Token

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
      res.status(500).json({ status: 500, err: json.errors })
    } else {
      res.status(200).json({ status: 200, customer: json.customer })
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
