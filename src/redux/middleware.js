import { setAlert } from "./actions"
import { CREATE_POST } from "./types"

const forbidden = ['fuck', 'spam', 'php', 'jopa']

export const forbiddenWordsMiddleware = ({dispatch}) => next => action =>  {
  if (action.type === CREATE_POST) {
    const found = forbidden.filter(w => action.payload.title.includes(w))
    if (found.length) {
      return dispatch(setAlert('Вы использовали запрещенные слова в заголовке! ещё раз и бан!'))
    }
  }
  return next(action)
} 