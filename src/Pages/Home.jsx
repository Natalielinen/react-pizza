import React, {useEffect} from "react";
import { Categories, SortPopup, PizzaBlock, PizzaLoader } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filtersActionCreator";
import {fetchPizzas} from "../redux/actions/pizzasActionCreators";
import {addPizzaToCart} from "../redux/actions/cartActionCreators";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "name" },
];

function Home() {
  const dispatch = useDispatch();
  const pizzas = useSelector(({ pizzas }) => pizzas.pizzas);
  const cartItem = useSelector(({ cart }) => cart.cartItems);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({ filters }) => filters);
  

  useEffect(()=>{
    dispatch(fetchPizzas(category, sortBy)) 
  },[dispatch, category, sortBy])
  console.log(category, sortBy)

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectedSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  const onAddToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_TO_CART',
      payload: obj
  });

  }


  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory = {category} onCategoryClick={onSelectCategory} items={categoryNames} />
        <SortPopup
          activeSortType = {sortBy}
          popupItems={sortItems}
          onSortTypeClick ={onSelectedSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          !isLoaded ? Array(10).fill(0).map((_, index) => <PizzaLoader key = {index}/>)
          : pizzas.map((pizza) => 
          <PizzaBlock 
          onAddToCart = {onAddToCart}  
          countInCart = {cartItem[pizza.id] && cartItem[pizza.id].length}
          key={pizza.id}
          {...pizza} />)
        }
      </div>
    </div>
  );
}

export default Home;
