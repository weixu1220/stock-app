import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { useStockContext } from '../StockContext'

// import data from '../components/Data'

export default function Stock  () {
  const {symbol} = useParams();
  const {stocks, myStocks,setMyStocks } = useStockContext()
  const [newData] = stocks.filter(item => item.symbol === symbol)
  const [stat,setStat] = useState(false)

  function follow (){
    let newStocks = [...myStocks,newData]
    setMyStocks(()=>newStocks)
    setStat(true)
  }

  function unfollow(){
      let newStocks = myStocks.filter(myStock=>myStock.name!==newData.name)
      setMyStocks(()=>newStocks)
      setStat(false)
  }
  
  useEffect(() => {
    myStocks.find((myStock)=>{
      if(newData.name===myStock.name){
        setStat(true)
        return true
      }
    })
  },[myStocks,stat])

  return (
    <div>
      <h1>Name: {newData.name}</h1>
      <p>Symbol: {newData.symbol}</p>
      <p>Price: $ {newData.price}</p>
      <p>Change: <span style={{ color: newData.change < 0 ? "red":'rgb(76, 187, 23)'}}>$ {newData.change.toFixed(4)}</span></p>
      <p>Change's Percentage: <span style={{ color: newData.change < 0 ? "red":'rgb(76, 187, 23)'}}>{newData.changesPercentage.toFixed(4)} %</span></p>
    {stat === false && <button onClick={follow}>Follow</button>}
    {stat && <button onClick={unfollow}>Unfollow</button>}
    </div>
  )
}
