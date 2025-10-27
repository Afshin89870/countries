import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Borders from "../components/Borders";

const ConStyle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  flex: 50;
  overflow: hidden;
  gap: 20px;
`;
const Frime = styled.div`
  height: 300px;
  width: 500px;
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid black;
  box-shadow: 1px 0px 1px 0px gray;
  transition: all 0.4s;
  &:hover {
    box-shadow: 6px 0px 6px 0px gray;
  }
`;

const InfoStyle = styled.div`
  display: flex;
  align-items: start;
  padding: 5px;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  height: 250px;
  width: 70%;
`;

const BorderStyle = styled.div`
  display: flex;
  flex: 50;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  height:300px;
  gap:20px;
`;

const BodyStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
};

const ImageStyle = {
  height: "100%",
  width: "100%",
  objectFit: "cover",
};

function Cards() {
  const { name } = useParams();
  const [api, setApi] = useState([]);
  const [borders, setBorders] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const deta = await res.json();
      setApi((prev) => (prev = deta));
      setBorders(deta[0].borders ? deta[0].borders.join(",") : "No borders");
    };

    fetchApi();
  }, [name]);

  return (
    <section style={BodyStyle}>
      {api.length > 0 && (
        <ConStyle>
          <Frime>
            <img src={api[0].flags.png} style={ImageStyle} />
          </Frime>
          <InfoStyle>
            <h1>
              {" "}
              Official name:{" "}
              {api[0].name.official.split(" ").slice(0, 6).join(" ")}
            </h1>
            <h2>common name : {api[0].name.common}</h2>
            <p style={{ fontSize: "25px" }}>capital : {api[0].capital}</p>
            <p style={{ fontSize: "25px" }}>region : {api[0].region}</p>
            <p style={{ fontSize: "25px" }}>subregion : {api[0].subregion}</p>
            <p style={{ fontSize: "25px" }}>
              languages: {Object.values(api[0].languages).join(", ")}
            </p>
            <p style={{ fontSize: "25px" }}>area : {api[0].area}km</p>
            <p style={{ fontSize: "25px" }}>population: {api[0].population}</p>
            <p style={{ fontSize: "25px" }}>
              timezone: {api[0].timezones.join(", ")}
            </p>
          </InfoStyle>
        </ConStyle>
      )}
      <BorderStyle>
        <Borders borders={borders} />
      </BorderStyle>
    </section>
  );
}

export default Cards;
