import './categoryItem.styles.scss'

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category
  return (
    <div className='category-container'>
      <div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <h2>Shop Now</h2>
      </div>
    </div>
  )
}

export default CategoryItem
