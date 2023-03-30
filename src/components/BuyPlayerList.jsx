import React from 'react';

const BuyPlayerList = (props) => {
    const sum = props.list.map((el) => el.price).reduce((ps, cs) => ps + cs, 0);
    const clearCart = () => {
        props.updateList([]);
    };
    return (
        <div className="mt-10 fixed">
            <h1 className="text-3xl font-bold underline text-center">Player List</h1>
            <h3 className="text-xl font-bold underline text-center">Total Price:{sum}</h3>
            {props.list.map((el) => {
                return (
                    <>
                        <div key={el.id} className="flex flex-wrap justify-between items-center py-3 gap-2">
                            {/* player avatar */}

                            <div className="avatar">
                                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={el.picture} alt="" />
                                </div>
                            </div>

                            <h4 className="text-xl font-bold">{el.name}</h4>
                            <h5 className="font-extrabold text-xl text-red-500">${el.price}</h5>
                        </div>
                    </>
                );
            })}

            <button className="btn btn-error w-full my-5" onClick={clearCart}>
                Clear Cart
            </button>
            <button className="btn btn-warning w-full">Review Cart</button>
        </div>
    );
};

export default BuyPlayerList;
