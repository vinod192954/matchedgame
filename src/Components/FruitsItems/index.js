import './index.css'

const FruitsItems = props => {
  const {FruitItem, onClickedImageDisplay} = props
  const {id, imageUrl, thumbnailUrl, category} = FruitItem
  const onClickMatchedImage = () => {
    onClickedImageDisplay(id)
  }
  return (
    <li>
      <button type="button" className="image-btn" onClick={onClickMatchedImage}>
        <img src={thumbnailUrl} className="fruit-item" alt="thumbnail" />
      </button>
    </li>
  )
}

export default FruitsItems
