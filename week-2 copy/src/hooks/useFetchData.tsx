import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>("");
  const [error, setError] = useState(null);

  async function getData(name: string) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      ).then((res) => res.json());

      setData(response);

      console.log(response);
    } catch (err: any) {
      setError(err);
    }
  }

  return { loading, data, error, getData };
};
