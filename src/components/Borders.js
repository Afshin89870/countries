import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  flex-direction: column;
  gap: 20px;
  height: 350px;
  width: 250px;
  background-color: #9381ff;
  border-radius: 40px;
  box-shadow: 3px 3px 3px 0px gray;
  transition: all 0.3s;
  color: white;
  overflow: hidden;
  &:hover {
    background-color: white;
    box-shadow: 8px 6px 8px 0px #9381ff;
    color: #9381ff;
  }
`;

function Borders({ borders }) {
  const navigate = useNavigate();
  const [api, setApi] = useState([]);

  const handeler = (name) => {
    navigate(`/Cards/${name}`);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${borders}`
      );
      const deta = await res.json();

      if (Array.isArray(deta)) {
        setApi(deta);
      } else {
        setApi([]); 
        console.error("دیتای دریافت‌شده آرایه نیست:", deta);
      }
    };

    if (borders) {
      fetchApi();
    }
  }, [borders]);

  return (
    <>
      {api.map((e, index) => {
        return (
          <CardStyle onClick={() => handeler(e.name.common)} key={index}>
            <img
              style={{ height: "60%", width: "100%", objectFit: "cover" }}
              src={e.flags.png}
            />
            <h1>{e.name.common}</h1>
            <h1>{e.region}</h1>
            <h1>{e.subregion}</h1>
          </CardStyle>
        );
      })}
    </>
  );
}

export default Borders;
