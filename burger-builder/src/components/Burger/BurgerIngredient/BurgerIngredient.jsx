import React, { Component } from 'react'
import './BurgerIngredient.css'
import PropTypes from 'prop-types'

class BurgerIngredient extends Component {
    render() {
      return 
        let ingredient = null

        switch (props.type) {
            case ('bread-bottom'):
                ingredient = <div className="BreadBottom" ></div>
                break
            case ('bread-top'):
                ingredient = (
                    <div className="BreadTop">
                        <div classNae="Seeds1"></div>
                        <div classNae="Seeds2"></div>
                    </div> 
                )
                break
            case ('meat'):
                ingredient = <div className="Meat" ></div>
                break
            case ('cheese'):
                ingredient = <div className="Cheese" ></div>
                break
            case ('bacon'):
                ingredient = <div className="Bacon" ></div>
                break
            case ('salad'):
                ingredient = <div className="Salad" ></div>
                break
            default: null
        }

        return ingredient   
    }
}

export default BurgerIngredient