import Program from '../models/program';

/**
 * Save a program
 */
export function add(req, res) {
  const program = req.body.program;
  if (!program || !program.name) {
    res.status(403).end();
  }

  const newProg = new Program(program);

  newProg.save()
    .then( prog => res.json(prog.toJSON()) )
    .catch( err => res.json({ post: saved }) );
}

/**
 * Get a single program
 */
export function get(req, res) {
  const name = req.params.name;

  Program.findOne({ name: name })
    .then( program => res.json(program.toJSON()) )
    .catch( err => res.status(500).send(err) );
}

/**
 * Delete a post
 */
export function remove(req, res) {
  const name = req.params.name;

  Program.remove({ name: name })
    .then( () => res.status(200).end() )
    .catch( err => res.status(500).send(err) );
}
