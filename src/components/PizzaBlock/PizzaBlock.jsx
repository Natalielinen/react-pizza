import React, { useState } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from "../Button/Button";


function PizzaBlock({id, name, imageUrl, sizes, price, types, onAddToCart, countInCart}) {
  const typeNames = ['тонкое', 'традиционное'];
  const avaiableSizes = [26, 30, 40]
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const onSelectedType = (index) => {
    setActiveType(index)
  }

  const onSelectedSize = (index) => {
    setActiveSize(index);
    
}

const handleOnAddToCArt = () => {
  const obj = {
    id, 
    name,
    imageUrl,
    price,
    size: avaiableSizes[activeSize],
    type: typeNames[activeType],
  }
  onAddToCart(obj);
}

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt={name}
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typeNames
          .map((typeName, index) => 
          <li className = {classNames({'active' : activeType === index}, {'disabled': !types.includes(index)})} onClick = {() => onSelectedType(index)} key = {`${typeName}_${index}`}>{typeName}</li>)}
        </ul>
        <ul>
        {avaiableSizes
          .map((size, index) => 
          <li 
          className = {classNames({'active' : activeSize === index}, {'disabled': !sizes.includes(size)})}
          onClick = {() => onSelectedSize(index)} key = {`${size}_${index}`}>{size}</li>)}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>

        <Button className="button--add" onClick ={handleOnAddToCArt} outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {countInCart && <i>{countInCart}</i>}
          </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  

}

export default PizzaBlock;
