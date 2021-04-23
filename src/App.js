import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import PizzaForm from './PizzaForm'
import HomePage from './HomePage'

const StyledDiv = styled.div`
  padding: 5%;
  margin: 5%;
  border-radius: 20px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
`

const initialData = [
    {
      name: '',
      size: '',
      cheese: false,
      pepperoni: false,
    }
]

const App = () => {

  const [ formData, setFormData ] = useState(initialData)

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route path ="/PizzaForm">
          <PizzaForm formData={formData}/>
        </Route>
      </Switch>
    </>
  );
};

export default App;
