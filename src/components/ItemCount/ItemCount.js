const ItemCount = ({sumarClick, restarClick, contador}) => {


    return (

        <>
            <div>
                <h1>{contador}</h1>
            </div>
            <div>
                <p></p>
            </div>
            <div>
                <button className="count_button" onClick={sumarClick}>+</button>
                <button className="count_button" onClick={restarClick}>-</button>
            </div>
            

        </>
    )
}

export default ItemCount
