import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
	const transformedIngredients = Object.keys(props.ingredient)
			.map(igKey => {
				return [...Array(props.ingredient[igKey])].map((_, i) => {
					return <BurgerIngredient key={igKey + i} type={igKey} />
				})
			})

  return (
    <div className="Burger">
			<BurgerIngredient type="bread-top" />
			{ transformedIngredients }
			<BurgerIngredient type="bread-bottom" />
		</div>
  )
}

export default burger