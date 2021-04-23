import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import PizzaForm from './PizzaForm'
import HomePage from './HomePage'

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
      special: '',
    }
]

const App = () => {

  const [ formData, setFormData ] = useState(initialData)

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
          <PizzaForm formData={formData}/>
        </Route>
      </Switch>
    </StyledDiv>
  );
};

export default App;
