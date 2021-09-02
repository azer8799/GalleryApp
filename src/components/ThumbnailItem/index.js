// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, clickThumbnailItem, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailList

  const thumbnailClass = isActive ? `thumbnail active` : `thumbnail`

  const displayImage = () => {
    clickThumbnailItem(id)
  }

  return (
    <li className="each-thumbnail" onClick={displayImage}>
      <button type="button">
        <img
          alt={thumbnailAltText}
          src={thumbnailUrl}
          className={thumbnailClass}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
