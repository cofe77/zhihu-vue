import UserTypes from '../user'

export default interface AnswerTypes {
  id: string = ''
  author: UserTypes,
  content: string = '',
}
