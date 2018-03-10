import React, { Component } from 'react'
import Aux from '../../hoc/auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICE = {
  salad: 0.4,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.6,
}

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...props}
  // }
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      cheese: 0,
      bacon: 0,
    },
    totalPrice: 2,
  }

  addIngredientHandler = (type) => {
    const oldAmount = this.state.ingredients[type]
    const updateAmount = oldAmount + 1
    const updateIngredients = { ...this.state.ingredients }
    updateIngredients[type] = updateAmount

    const priceAddition = INGREDIENT_PRICE[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice + priceAddition

    this.setState({
      totalPrice: newPrice,
      ingredients: updateIngredients
    })
  }

  removeIngredientHandler = (type) => {
    const oldAmount = this.state.ingredients[type]
    if (oldAmount <= 0) { return }
    const updateAmount = oldAmount - 1
    const updateIngredients = { ...this.state.ingredients }
    updateIngredients[type] = updateAmount

    const priceDeduction = INGREDIENT_PRICE[type]
    const oldPrice = this.state.totalPrice
    const newPrice = oldPrice - priceDeduction

    this.setState({
      totalPrice: newPrice,
      ingredients: updateIngredients
    })
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Burger ingredient={ this.state.ingredients }/>
        <BuildControls
          ingredientAdd={ this.addIngredientHandler }
          ingredientRemove={ this.removeIngredientHandler }
          disabled={ disabledInfo }
          price={ this.state.totalPrice } />
      </Aux>
    )
  }
}

export default BurgerBuilder