import Document from '../models/document';

export function getDocuments(req, res) {
  if (!req.user)
    return res.status(401).end();

  const userId = req.user.id;

  Document.find({userId: userId }).sort('-updated').exec((err, docs) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ docs });
  });
}

export function addDocument(req, res) {
  if (!req.user)
    res.status(401).end();

  const userId = req.user.id;

  const { kind, store } = req.body;

  if ( !kind || !store ) {
    res.status(403).end()
  }

  const newDoc = new Document({
    kind,
    userId,
    store
  });

  newDoc.save()
    .then( saved => res.json({ doc: saved }) )
    .catch( err =>res.status(500).json(err) );

}

export function getDocument(req, res) {
  if (!req.user)
    return res.status(401).end();

  const { docId } = req.params;

  if ( !docId ) {
    res.status(403).end();
  }

  Document.findOne({ _id: docId }).exec((err, doc) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ doc });
  });
}

export function deleteDocument(req, res) {

  if (!req.user)
    res.status(401).end();

  const { docId } = req.params;

  if ( !docId ) {
    res.status(403).end();
  }

  Document.findOne({ _id: docId }).exec((err, doc) => {
    if (err) {
      res.status(500).send(err);
    }

    doc.remove(() => {
      res.status(200).end();
    });
  });
}
