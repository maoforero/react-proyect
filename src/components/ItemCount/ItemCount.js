import React from 'react'

const ItemCount = ({title}) => {
    
    let contador = 0;
    
    return (
        <>
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <button className="count_button">+</button>
                <button className="count_button">-</button>
            </div>
            

        </>
    )
}

export default ItemCount
