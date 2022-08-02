import AnswerTypes from '../answer'
import UserTypes from '../user'

export default interface QuestionTypes {
  id: string = '',
  title: string = '',
  author: UserTypes,
  answerCount: number = '',
  answers: AnswerTypes,
  tag: string = '',
  content: string = '',
  updateTime: string = ''
}
