import './index.css'

const CardItem = props => {
  const {CardItemDetails} = props
  const {title, imgUrl, description, className} = CardItemDetails
  return (
    <li className={className}>
      <div className="card">
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description}</p>
        <div className="image">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
