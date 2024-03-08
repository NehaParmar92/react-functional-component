import React from 'react'

const Item = (props) => {
    let { user_id,category,title, description, imageUrl} = props;

    return (
        <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2024/03/06/1600x900/PTI03-05-2024-000261B-0_1709701111984_1709701140104.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">{user_id}</h5>
                    <h5 className="card-title">{category}</h5>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
    )
}

export default Item
