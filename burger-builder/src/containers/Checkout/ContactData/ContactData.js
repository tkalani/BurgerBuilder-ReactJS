import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Tanmay Kalani",
                city: "Jaipur",
                email: "test@test.com"
            },
            deliveryMethod: "fastest"
        }
        axios.post('/orders.json ', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            });
    }

    render() {
        let form = (<form>
            <input className="Input" type="text" name="name" placeholder="Enter your name" />
            <input className="Input" type="email" name="email" placeholder="Enter your email" />
            <input className="Input" type="text" name="email" placeholder="Enter your street" />
            <input className="Input" type="number" name="postalCode" placeholder="Enter your postal code" />
            <Button btnType="Success" clicked={this.orderHandler}>Order Now</Button>
        </form>);
        if(this.state.loading){
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter Data</h4>
                {form} 
            </div>
        );
    }
}

export default ContactData;