import React from 'react'
import HomePage from './HomePage'
import { Route, Switch, Link } from 'react-router-dom'
import App from './App'

const PizzaForm = (props) => {

    const { formData, submit, changeHandler } = props;
    const onSubmit = e => {
        e.preventDefault()
        submit();
    }


    return (
        <div>      
            <div>
                <Link to="/App">Home</Link>
            </div>
            <form onSubmit ={onSubmit}>
                <div>
                    <label>Name: 
                        <input type="text" name="name" value={formData.name} placeholder="Enter Name" id="name" onChange={changeHandler}>
                        </input>
                    </label>
                </div>
                <div>
                    <label>Size: 
                        <select onChange={changeHandler} name="size" value={formData.size}>
                            <option value = ''>--Select Size--</option>
                            <option value = 'small'>Small</option>
                            <option value = 'medium'>Medium</option>
                            <option value = 'large'>Large</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Cheese:
                        <input type="checkbox" onChange={changeHandler} name="cheese"></input>
                    </label>
                    <label>Pepperoni:
                        <input type="checkbox" onChange={changeHandler} name="pepperoni"></input>
                    </label>
                </div>
                <div>
                    <label>Special Instructions:
                        <input type="text" onChange={changeHandler} name="special" value={formData.special}></input>
                    </label>
                </div>
                <button onClick={submit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PizzaForm
