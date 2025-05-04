import { useEffect, useState } from "react";

// Custom hook for fetching data from a given URL
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Async function to fetch data from the provided URL
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        // Attempt to fetch data from the URL
        const response = await fetch(url);
        // Check if the response is not OK (i.e., not 200-299 status)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // Parse the JSON response
        const json = await response.json();
        // Update the data state with the fetched data
        setData(json);
        // Set loading to false after successful fetch
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [url]); // Re-run the effect when the URL changes

  // Return an object with the current loading state, error (if any), and fetched data
  return { loading, error, data };
};

export default useFetch;
