import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import PizzaForm from './PizzaForm'
import HomePage from './HomePage'
import * as yup from 'yup'
import schema from './Formschema'
import MyOrder from './MyOrder'


const StyledDiv = styled.div`
  padding: 5%;
  margin: 5%;
  border-radius: 5px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
  background-color: pink;
`

const initialData = [
    {
      name: '',
      size: '',
      cheese: false,
      pepperoni: false,
      olives: false,
      tomatoes: false,
      special: '',
    }
]

const initialErrors = {
  name: 'required to place the order'
}

const initialOrder = []

const App = () => {

  const [ formData, setFormData ] = useState(initialData)
  const [ formErrors, setFormErrors ] = useState(initialErrors)
  const [ order, setOrder ] = useState(initialOrder)

  const inputChange = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) //
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormData({
      ...formData,
      [name]: value, 
    });
  };

  const submit = () => {
    const newOrder = {
      name: formData.name.trim(),
      size: formData.size,
      toppings: ["cheese", "pepperoni", "olives", "tomatoes"].filter(
        (topping) => formData[topping]
      ),
      special: formData.special.trim(),
    }
    setOrder([...order, newOrder])
    setFormData(initialData)
  }

  return (
    <StyledDiv>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to="/">Home</Link>
      <Link to="/PizzaForm">Order Now!</Link>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path ="/PizzaForm">
          <PizzaForm formData={formData} submit={submit} changeHandler={inputChange} errors={formErrors}/>
        </Route>
      </Switch>
      {order.map((item, idx) => {
        return <MyOrder key={idx} details={item}/>;
      })}
    </StyledDiv>
  );
};

export default App;
