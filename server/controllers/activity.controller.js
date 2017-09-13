import Activity from '../models/activity'

export function getActivities(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const userId = req.user.id

  Activity.find({userId: userId }).sort('-updated').exec((err, activities) => {
    if (err) {
      return res.status(500).json({ status: 500, message: 'Server Side Error', err })
    }
    return res.status(200).json({ status: 200, activities })
  })
}

export function addActivity(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const userId = req.user.id

  const { name, history, progress, program, status } = req.body

  if (!name || !history || !progress || !program) {
    return res.status(403).json({ status: 403, message: 'Missing Parameters' })
  }

  const newActivity = new Activity({
    userId,
    name,
    program,
    history,
    progress,
    status
  })

  newActivity.save()
    .then( saved => res.status(200).json({ status: 200, activity: saved }) )
    .catch( err => res.status(500).json({ status: 500, message: 'Server Side Error',  err}) )

}

export function getActivity(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { activityId } = req.params

  if ( !activityId ) {
    return res.status(403).json({ status: 403, message: 'Missing Parameter' })
  }

  Activity.findOne({ _id: activityId }).exec((err, activity) => {
    if (err) {
      return res.status(500).json({ status: 500, message: 'Server Side Error',  err})
    }
    return res.status(200).json({ status: 200, activity })
  })
}

export function updateActivity(req, res) {
  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { activityId } = req.params

  const { name, status, program, history, progress } = req.body

  if ( !activityId ) {
    return res.status(403).json({ status: 403, message: 'Missing Parameter' })
  }

  Activity.findOne({ _id: activityId })
    .then(activity => {
      if (!activity) {
        return res.status(500).json({ status: 404, message: 'No activity is founded!' })
      }

      if (name) activity.name = name

      if (status) {
        activity.status = status
        // activity.updated = Date.now
      }

      if (program) {
        activity.program = program
        // activity.updated = Date.now
      }

      if (progress) {
        activity.progress = progress
        activity.history = history
        // activity.updated = Date.now
      }

      return activity.save()
    })

    .then(saved => res.status(200).json({ status: 200, saved }))

    .catch(err => res.status(500).json({ status: 500, message: 'Server Side Error',  err}))
}

export function deleteActivity(req, res) {

  if (!req.user)
    return res.status(401).json({ status: 401, message: 'UnAuthorized' })

  const { activityId } = req.params

  if ( !activityId ) {
    return res.status(403).json({ status: 403, message: 'Missing Parameter' })
  }

  Activity.findOne({ _id: activityId }).exec((err, activity) => {
    if (err) {
      return res.status(500).json({ status: 500, message: 'Server side Error',  err})
    }

    activity.remove(() => {
      return res.status(200).json({ status: 200, message: 'Successfully Deleted' })
    })
  })
}
