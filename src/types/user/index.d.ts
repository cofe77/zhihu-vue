import EducationTypes from '../education'
import OccupationsTypes from '../occupations'

export default interface UserTypes {
  id: string = ''
  username: string = ''
  avatar: string = ''
  slogan: string = ''
  nick: string = ''
  sex: string = ''
  address: string = ''
  userDesc: string = ''
  profession: string = ''
  educations: EducationTypes[]
  occupations: OccupationsTypes[]
}
