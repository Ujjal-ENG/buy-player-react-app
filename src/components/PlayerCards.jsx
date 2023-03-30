import React, { useEffect, useState } from 'react';
import Card from './Card';
import BuyPlayerList from './BuyPlayerList';

const PlayerCards = (props) => {
    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    // fetching the data from the data.json
    const fetchData = async () => {
        const fetchURL = await fetch('data.json');
        const data = await fetchURL.json();
        setPlayerData(data);
    };

    return (
        <div className="grid grid-cols-12 mt-20">
            <div className="col-span-10 gap-6 m-10 grid grid-cols-3">
                {playerData &&
                    playerData.map((pl) => {
                        return <Card data={pl} key={pl.id} />;
                    })}
            </div>
            <div className="col-span-2">
                <BuyPlayerList />
            </div>
        </div>
    );
};

export default PlayerCards;
