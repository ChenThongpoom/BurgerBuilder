import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

function Burger(props) {
  let transformedIngredient = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      //reduce an array with many empty element array into one single array
      return arr.concat(el); // from [[salad], [bacon, bacon], [cheese], [meat, meat]]  --> [salad, bacon, bacon, cheese, meat, meat]
    }, []);
  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>Please Start Adding Ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
