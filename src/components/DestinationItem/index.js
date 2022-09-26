// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destDetails} = Props
  const {id, name, imgUrl} = destDetails

  return (
    <li className="dest-cont">
      <img src={imgUrl} className="img" alt={name} />
      <h1 className="name">{name}</h1>
    </li>
  )
}

export default DestinationItem
