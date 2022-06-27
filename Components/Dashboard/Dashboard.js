import React, { useState, useContext, useEffect} from "react";
import getCoinData  from "../../Services/getCoinData";
import { authContext } from "../../Context";
import { CoinCard } from "../CoinCard";

const Dashboard = () => {
  const { userData } = useContext(authContext);
  const [coinsName, setCoinsName] = useState(['bitcoin', 'ethereum', 'dogecoin']); 
  const [coinsToMap, setCoinsToMap] = useState([])

  useEffect(async () => {
    let coins = []
    for (let index = 0; index < coinsName.length; index++) {
      let coinData = await getCoinData(coinsName[index])
      coins.push(coinData)
    }
    setCoinsToMap(coins);
  }, [])

  return( 
  <>
    <p>Welcome to Dashboard, {userData.firstName}!</p>
    {
      coinsToMap.map((data)=>{
        return(
          <CoinCard element={data}/>
        )
      })
    }
  </>
  )


};

export default Dashboard;
