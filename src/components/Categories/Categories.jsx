import React from 'react'


const Categories = React.memo(function Categories({activeCategory, items, onCategoryClick}) {


    return (
        <div className="categories">
              <ul>
                <li className = {activeCategory === null ? 'active' : ''} onClick = {() =>onCategoryClick(null) }>Все</li>
                {items &&
                    items.map((item, index) => 
                    <li className = {
                      activeCategory === index ? 'active' : ''} 
                      onClick={()=>onCategoryClick(index)} 
                      key = {`${item}_${index}`}>{item}</li>)
                }
              </ul>
            </div>
    )
})

export default Categories;
