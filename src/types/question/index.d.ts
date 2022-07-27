import AnswerTypes from '../answer'
import UserTypes from '../user'

interface QuestionTypes {
  id: string = '',
  title: string = '',
  author: UserTypes,
  answerCount: number = '',
  answers: AnswerTypes,
  tag: string = '',
  content: string = '',
  updateTime: string = ''
}

export { QuestionTypes }
