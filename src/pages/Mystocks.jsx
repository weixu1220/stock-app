import { useStockContext } from '../StockContext'
import { useNavigate } from "react-router-dom";

function MyStocks() {
    const {myStocks} = useStockContext()
    const navigate = useNavigate()
  function getData(item){
    navigate(`/stocks/${item.symbol}`)
  }
    return (
        <div className="mystocks">
            <h1>MyStocks</h1>
      <table cellPadding={25} align="center">
        <thead>
        <tr>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
        </thead>
        
      <tbody>
      {myStocks.map((item, idx) => {
        return (
          <tr key={idx} onClick={()=>getData(item)}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td  style={{ color: item.change < 0 ? "red":'rgb(76, 187, 23)' }}>{item.change.toFixed(4)}</td>
          </tr>
        );
      })}
      </tbody>
      
      </table>
        </div>
    );
}

export default MyStocks;