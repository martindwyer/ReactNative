import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [displayTerm, setDisplayTerm] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: { searchTerm },
          location: "chicago",
        },
      });
      setResults(response.data.businesses);
      setDisplayTerm(searchTerm);
      setError("");
    } catch (err) {
      setError("Cannot connect to server at this time.");
      console.log(err.message);
    }
  };

  useEffect(() => {
    searchApi("chicago");
  }, []);

  return [searchApi, results, error, displayTerm];
};
