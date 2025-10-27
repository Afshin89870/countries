import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const CardAuria = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  width: 100%;
`;
const CardStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content:right;
  flex-direction: column;
  gap: 20px;
  height: 400px;
  width: 300px;
  background-color: #9381ff;
  border-radius: 40px;
  box-shadow: 3px 3px 3px 0px gray;
  transition: all 0.3s;
  color: white;
  overflow:hidden;
  &:hover {
    background-color: white;
    box-shadow: 8px 6px 8px 0px #9381ff;
    color: #9381ff;
  }
`;

function Card({ api }) {
    const navigate = useNavigate()

    const handeler = (name) => {
        navigate(`/Cards/${name}`)
    }

  return (
    <>
      <CardAuria>
        {api.length > 0 && (
          <CardStyle onClick={() => handeler(api[0].name.common)}>
            <img
              style={{ height: "60%", width: "100%", objectFit: "cover" }}
              src={api[0].flags.png}
            />
            <h1>{api[0].name.common}</h1>
            <h1>{api[0].region}</h1>
            <h1>{api[0].subregion}</h1>
          </CardStyle>
        )}
      </CardAuria>
    </>
  );
}

export default Card;
