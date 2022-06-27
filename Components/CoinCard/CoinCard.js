import React from 'react'

const CoinCard = (props) => {
    const { element } = props;

    return (
        <div>
            <img src={element.image.small}/>
            <div>{element.name}</div>
            <div>{element.symbol}</div>
            <div>{element.market_data.current_price.usd}</div>
            <div>{element.market_data.market_cap.usd}</div>
        </div>
    )
}

export default CoinCard