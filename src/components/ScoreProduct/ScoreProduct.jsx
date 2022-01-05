import React from 'react';
import { FaStar} from "react-icons/fa";


const ScoreProduct = (info) => {
    return (
        <>
            <div className='score'>
                {[...Array(5).map(star => {
                    return (
                        <label>
                            <input type="radio" name="score">
                                <FaStar size={10}/>
                            </input>
                            
                        </label>
                    );
                })]

                }
            </div>
        </>
    )
}

export default ScoreProduct
