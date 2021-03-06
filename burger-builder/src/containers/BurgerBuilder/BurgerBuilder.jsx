import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
    purchasable: false,
    purchesing: false,
  }

  updatePurchaseState (ingredients) {
    const sum = Object.values(ingredients).reduce((sum, x) => sum + x)
    this.setState({ purchasable: sum > 0 })
  }

  purcheseHandler = () => {
    this.setState({purchesing: true})
  }

  purcheseCancelHandler = () => {
    this.setState({purchesing: false})
  }

  purcheseContinueHandler = () => {
    alert('You continue !!')
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
    this.updatePurchaseState(updateIngredients)
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
    this.updatePurchaseState(updateIngredients)
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    return (
      <Aux>
        <Modal show={ this.state.purchesing } modalClosed={ this.purcheseCancelHandler }>
          <OrderSummary 
            price={ this.state.totalPrice }
            ingredients={ this.state.ingredients }
            purcheseCancelled={ this.purcheseCancelHandler }
            purcheseContinued={ this.purcheseContinueHandler } />
        </Modal>
        <Burger ingredient={ this.state.ingredients }/>
        <BuildControls
          ingredientAdd={ this.addIngredientHandler }
          ingredientRemove={ this.removeIngredientHandler }
          disabled={ disabledInfo }
          purchasable={ this.state.purchasable }
          ordered={ this.purcheseHandler }
          price={ this.state.totalPrice } />
      </Aux>
    )
  }
}

export default BurgerBuilder