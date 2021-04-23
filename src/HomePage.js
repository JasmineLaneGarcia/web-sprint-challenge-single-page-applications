import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import PizzaForm from './PizzaForm'

const HomePage = () => {
    const history = useHistory()

    const routeToOrder = () => {
        history.push('/PizzaForm')
}

    return (
        <div>
            <button onClick={routeToOrder} id="order-pizza">
        Order now!
      </button>
        </div>
    )
}

export default HomePage
