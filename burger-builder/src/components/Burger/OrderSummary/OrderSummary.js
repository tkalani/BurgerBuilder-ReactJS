// import React from 'react';
// import Aux from '../../../hoc/Aux';

// const orderSummary = (props) => {
//     const ingredientSummary = Object.keys(props.ingredients)
//                                 .map(igKey => {
//                                     return (
//                                         <li key={igKey}>
//                                             <span style={{textTransform: "capitalize"}}>{igKey}</span> : {props.ingredients}
//                                         </li>
//                                     );
//                                 });
//     return (
//         <Aux>
//             <h3>Your Order</h3>
//             <p>A Delicious Burger</p>
//             <ul>
//                 {ingredientSummary}
//             </ul>
//             <p>Continue to Checkout?</p>
//         </Aux>
//     );
// };

// export default orderSummary;

import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';

class OrderSummary extends Component {

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
            </Aux>
        );
    }
};

export default OrderSummary;