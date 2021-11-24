import './ItemCount.css';

const ItemCount = ({sumarClick, restarClick, contador}) => {


    return (

        <>
            <div className="container__ItemCount">
                <div className="container__ItemCount--Tittle">
                    <h4 className="ItemCount--Title">Elemento #1</h4>
                </div>
                <div className="container__ItemCount--Contador">
                    <p className="ItemCount--Contador">{contador}</p>
                </div>
                <div className="container__ItemCount--Buttons">
                    <button id="addButton" className="count_button" onClick={sumarClick}>+</button>
                    <button id="removeButton" className="count_button" onClick={restarClick}>-</button>
                </div>
            </div>

            

        </>
    )
}

export default ItemCount
