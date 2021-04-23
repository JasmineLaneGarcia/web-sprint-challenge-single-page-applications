import React from 'react'
import HomePage from './HomePage'
import { Route, Switch, Link } from 'react-router-dom'
import App from './App'

const PizzaForm = (props) => {

    const { formData, submit, changeHandler, errors } = props;
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        changeHandler(name, valueToUse);
      };


    return (
        <div>      
            <div>
                <Link to="/App">Home</Link>
            </div>
            <form onSubmit ={onSubmit}>
                <div> 
                    <div>
                        {errors.name}
                        {errors.size}
                    </div>
                    <label>Name: 
                        <input type="text" name="name" value={formData.name} placeholder="Enter Name" id="name" onChange={onChange}>
                        </input>
                    </label>
                </div>
                <div>
                    <label>Size: 
                        <select onChange={onChange} name="size" value={formData.size}>
                            <option value = ''>--Select Size--</option>
                            <option value = 'small'>Small</option>
                            <option value = 'medium'>Medium</option>
                            <option value = 'large'>Large</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Cheese:
                        <input type="checkbox" onChange={onChange} name="cheese"></input>
                    </label>
                    <label>Pepperoni:
                        <input type="checkbox" onChange={onChange} name="pepperoni"></input>
                    </label>
                    <label>Olives:
                        <input type="checkbox" onChange={onChange} name="olives"></input>
                    </label>
                    <label>Tomatoes:
                        <input type="checkbox" onChange={onChange} name="tomatoes"></input>
                    </label>
                </div>
                <div>
                    <label>Special Instructions:
                        <input type="text" placeholder="pepperoni on half" onChange={onChange} name="special" value={formData.special}></input>
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
