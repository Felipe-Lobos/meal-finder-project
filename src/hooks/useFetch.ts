import axios from "axios";
import { useState } from "react";

export default <T extends { meals?: any[]} >() => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T>();

  const fetch = (url: string) => {
    setLoading(true);
    axios
      .get<T>(url)
      .then(({ data }) => {
        if (data.meals && data.meals.length > 0) {
          setData(data.meals[0]);
        } else {
          console.error("No meals found in the response.");
        }
      })
      .finally(()=>setLoading(false));
  };
  return { loading, data, fetch };
};
