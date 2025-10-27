import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";

const SectionCardsStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  margin-top:50px;
`;

const CardStyle = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  gap: 20px;
  height: 450px;
  width: 300px;
  background-color:white;
  color:rgb(96, 96, 96);
  border-radius:20px;
  box-shadow:2px 2px 2px 0 gray;
  transition:all 0.4s;
  overflow:hidden;
  &:hover{
    box-shadow:5px 5px 15px 0px gray;
    color:#2EB5F4;
  }
`;

const H2style = styled.h2`
    color:black;
`

function CountryList() {
  const navigate = useNavigate();
  const [api, setapi] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const deta = await res.json();
        setapi((prev) => (prev = deta));
      } catch (error) {
        console.log('dont worry .....')
      }

    };

    fetchApi();
  }, []);

  const clickHandeler = (name) => {
    navigate(`/Cards/${name}`);
  };

  return (
    <>
      <SectionCardsStyle>
        {api.length > 0 &&
          api.map((e, index) => {
            return (
              <CardStyle key={index} onClick={() => clickHandeler(e.name.common)}>
                <img src={e.flags.png} style={{ width: '100%', height: '60%' }} />
                <h2><b>{e.name.common}</b></h2>
                <p style={{ fontSize: '20px' }}>{e.region}</p>
                <p style={{ fontSize: '20px' }}>{e.subregion}</p>
              </CardStyle>
            )
          })}
      </SectionCardsStyle>
    </>
  );
}

export default CountryList;
