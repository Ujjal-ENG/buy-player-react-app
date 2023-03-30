import React from 'react';

const BuyPlayerList = () => {
    return (
        <div className="mt-10 fixed">
            <h1 className="text-3xl font-bold underline text-center">Player List</h1>

            <div className="flex flex-wrap justify-between items-center py-3 gap-2">
                {/* player avatar */}
                <div class="avatar">
                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
                    </div>
                </div>

                <h4 className="text-xl font-bold">Kopa Samso</h4>
                <h5 className="font-extrabold text-xl text-red-500">$0005</h5>
            </div>

            <button className="btn btn-error w-full my-5">Clear Cart</button>
            <button className="btn btn-warning w-full">Review Cart</button>
        </div>
    );
};

export default BuyPlayerList;
