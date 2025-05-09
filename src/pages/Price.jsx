import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Price = () => {
  const [coin, setCoin] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const params = useParams();
  const symbol = params.symbol;
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  async function getCoin() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      setCoin(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getCoin();
  }, []);

  function loaded() {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  }

  return coin && coin.rate ? loaded() : <h3>Loading...</h3>;
};

export default Price;
