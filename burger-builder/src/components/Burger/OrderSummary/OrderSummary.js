import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[Order Summary] Update');
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingrediens:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Continue to checkout?</strong></p>
                {/* <button>Cancel</button> */}
                {/* <button>Continue</button> */}
                <Button 
                    btnType="Danger"
                    clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button 
                    btnType="Success"
                    clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
};

export default OrderSummary;