import { useEffect, useState } from "react";
import items from "./mockData";

const fetchProducts = () => {
  return Promise.resolve(items).then((res) => res);
};

export const useProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (data.length > 0) {
      return;
    }

    setLoading(true);

    fetchProducts()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
      });
  }, [data]);

  return { data, loading, error };
};
