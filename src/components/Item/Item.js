import React from 'react'
import './Item.css'

const Item = ({data}) => {
    return (
        <div className="container__item">
            <img src={data.avatar_url} alt="" className="item_img"/>
            <div className="container__item--Title">
                <span className="item--title">{data.login}</span>
            </div>
            <div className="container__item--info">
                <span className="item--info--year">{data.type}</span>
                {/* <span className="item--info--rated">{data.followers_url}</span>
                <span className="item--info--genre">{data.repos_url}</span> */}
            </div>
        </div>
    )
}

export default Item
