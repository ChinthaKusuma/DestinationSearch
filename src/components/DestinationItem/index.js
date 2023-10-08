// Write your code here
import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item
  return (
    <li className="one">
      <img className="img1" src={imgUrl} alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}
export default DestinationItem
