import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let trnasformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (trnasformedIngredients.length === 0) {
        trnasformedIngredients = <p>Please start adding ingredients!</p>
    }

    console.log(trnasformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {trnasformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;