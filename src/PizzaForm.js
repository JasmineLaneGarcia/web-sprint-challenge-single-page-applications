import React from 'react'

const PizzaForm = (props) => {

    const { formData, submit, changeHandler } = props;
    const onSubmit = e => {
        e.preventDefault()
        submit();
    }


    return (
        <div>
            <form onSubmit ={onSubmit}>
                <label>Name:
                    <input type="text" name="name" value={formData.name} placeholder="Enter Name" id="name" onChange={changeHandler}>
                    </input>
                </label>
                <label>Size:
                    <select onChange={changeHandler} name="size" value={formData.size}>
                        <option value = ''>--Select Size--</option>
                        <option value = 'small'>Small</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'large'>Large</option>
                    </select>
                </label>
                <label>Cheese:
                    <input type="checkbox" onChange={changeHandler} name="cheese"></input>
                </label>
                <label>Pepperoni:
                    <input type="checkbox" onChange={changeHandler} name="pepperoni"></input>
                </label>
                <button onClick={submit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PizzaForm
