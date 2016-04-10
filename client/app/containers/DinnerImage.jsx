import { composeWithTracker } from 'react-komposer'
import DinnerItemImg from '../composers/DinnerItemImg'
import DinnerImage from '../components/Reusable/DinnerImage.jsx'

export default composeWithTracker(DinnerItemImg)(DinnerImage)
