import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '20682815b5msh99f1898023c2545p18e83djsnc8a6af3253af',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;



// const options = {
    //     method: 'GET',
    //     url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    //     headers: {
    //       'X-RapidAPI-Key': 'b5b3a8e1fmshe9e8f6b5e9b9a3ep1e5b5cjsn7b6f0b7a9e41',
    //       'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    //     }
    //   };
      