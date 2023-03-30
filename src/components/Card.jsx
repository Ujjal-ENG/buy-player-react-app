import React from 'react';

const Card = (props) => {
    const { name, picture, price, job, age, about } = props.data;
    const handleBuyPlayer = (id) => {};
    return (
        <div hidden className="card  card-compact w-96 bg-base-100 shadow-xl">
            <div className="w-full h-2/4">
                <img src={picture} className="w-full h-full rounded-md" alt="" />
            </div>
            <div className="card-body h-2/5">
                <h2 className="card-title">{name}</h2>
                <p>{about}</p>
                <div className="flex items-center justify-between">
                    <p>
                        Price: <span className="font-bold text-red-500">{price}</span>
                    </p>
                    <p>
                        Job: <span className="font-bold text-orange-500">{job}</span>
                    </p>
                    <p>Age: {age}</p>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={() => handleBuyPlayer(props.data.id)}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
