import React from 'react'

const MyOrder = (props) => {
    const {details} = props


    return (
        <div>
            <h1>Name: {details.name}</h1>
            <h2>Size: {details.size}</h2>

        </div>
    )
}

export default MyOrder