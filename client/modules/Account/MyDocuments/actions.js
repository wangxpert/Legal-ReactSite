import callApi from '../../../util/apiCaller'
import Notifications from 'react-notification-system-redux'

// Export Constants
export const FETCH_DOCS_SUCCEEDED = 'FETCH_DOCS_SUCCEEDED'
export const FETCH_DOCS_FAILED = 'FETCH_DOCS_FAILED'
export const SAVE_DOC_SUCCEEDED = 'SAVE_DOC_SUCCEEDED'
export const SAVE_DOC_FAILED = 'SAVE_DOC_FAILED'

// Export Actions
export function fetchDocsSucceeded(docs) {
  return {
    type: FETCH_DOCS_SUCCEEDED,
    docs
  }
}

export function fetchDocsFailed(err) {
  return {
    type: FETCH_DOCS_FAILED,
    err
  }
}

export function fetchDocs() {
  return (dispatch) => {
    return callApi('docs')
    .then(res => {
      dispatch(fetchDocsSucceeded(res.docs))
    }).catch(err => {
      dispatch(fetchDocsFailed(err))
    })
  }
}

export function saveDocSucceeded() {
  return {
    type: SAVE_DOC_SUCCEEDED
  }
}

export function saveDocFailed(err) {
  return {
    type: SAVE_DOC_FAILED,
    err
  }
}

export function saveDoc(kind, store) {
  return (dispatch) => {
    return callApi('docs', 'post', {
      kind, store
    }).then(res => {
      dispatch(Notifications.success({
        // uid: 'once-please', // you can specify your own uid if required
        title: 'Save',
        message: 'This form is saved successfully.',
        position: 'tr',
      }))
      dispatch(saveDocSucceeded())
    }).catch(err => {
      console.log(err)
      if (err.status === 401) {
        dispatch(Notifications.error({
          // uid: 'once-please', // you can specify your own uid if required
          title: 'Save',
          message: 'Please log in to save this document.',
          position: 'tr',
        }))
      }
      dispatch(saveDocFailed(err))
    })
  }
}
