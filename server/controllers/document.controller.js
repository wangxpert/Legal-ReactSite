import Document from '../models/document'

export function getDocuments(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const userId = req.user.id

  Document.find({userId: userId }).sort('-updated').exec((err, docs) => {
    if (err) {
      return res.status(500).json({ status: 500, message: 'Server Side Error', err })
    }
    return res.status(200).json({ status: 200, docs })
  })
}

export function addDocument(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const userId = req.user.id

  const { kind, store } = req.body

  if ( !kind || !store ) {
    return res.status(403).json({ status: 403, message: 'Missing Parameters' })
  }

  const newDoc = new Document({
    kind,
    userId,
    store
  })

  newDoc.save()
    .then( saved => res.status(200).json({ status: 200, doc: saved }) )
    .catch( err => res.status(500).json({ status: 500, message: 'Server Side Error',  err}) )

}

export function getDocument(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { docId } = req.params

  if ( !docId ) {
    return res.status(403).json({ status: 403, message: 'Missing Parameter' })
  }

  Document.findOne({ _id: docId }).exec((err, doc) => {
    if (err) {
      return res.status(500).json({ status: 500, message: 'Server Side Error',  err})
    }
    return res.status(200).json({ status: 200, doc })
  })
}

export function deleteDocument(req, res) {

  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { docId } = req.params

  if ( !docId ) {
    return res.status(403).json({ status: 403, message: 'Missing Parameter' })
  }

  Document.findOne({ _id: docId }).exec((err, doc) => {
    if (err) {
      return res.status(500).json({ status: 500, message: 'Server side Error',  err})
    }

    doc.remove(() => {
      return res.status(200).json({ status: 200, message: 'Successfully Deleted' })
    })
  })
}
