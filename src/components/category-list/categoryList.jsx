import './categoryList.styles.scss'
import CategoryItem from '../category-item/categoryItem'

const CategoryList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map(category => (
        <CategoryItem category={category} />
      ))}
    </div>
  )
}

export default CategoryList
