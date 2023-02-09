import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Single = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState([false]);
  const [loading, setLoading] = useState(true);

  const fetchSectors = async (id) => {
    try {
      setLoading(false);
      const response = await axios.get(
        `http://localhost:4000/api/sectors/find/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("eze-token")}`,
          },
        }
      );
      setData(response.data.data);
    } catch (err) {
      setLoading(true);
      setError(true);
    }
  };

  console.log(data);

  useEffect(() => {
    fetchSectors();
  }, []);

  return <div>single</div>;
};

export default Single;
