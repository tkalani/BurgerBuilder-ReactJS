import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: false,
    }

    componentDidMount(){
        this.setState({loading: false})
        axios.get('/orders.json')
            .then(res => {
                let fetchedOrders = [];
                for(let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                // console.log(fetchedOrders);
                this.setState({loading: false, orders: fetchedOrders});
                // console.log(this.state);
            })
            .catch(error => {
                // console.log(error);
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <div>
                {/* {this.state.orders.length} */}
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />
                ))}
            </div>
        );
    }
}

export default Orders;