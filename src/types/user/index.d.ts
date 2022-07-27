import EducationTypes from '../education'

export default interface UserTypes {
  id: string = ''
  username: string = ''
  avatar: string = ''
  slogan: string = ''
  profession: string = ''
  educations: EducationTypes[]
}
