import styled from "styled-components";
import React, { useState, useEffect } from "react";

const SearchAuria = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const SearchBox = styled.input`
  height: 50px;
  width: 300px;
  border-radius: 20px;
  border: 1px solid #3a0ca3;
  color: #3a0ca3;
  text-align: center;
  font-size: 20px;
  transition: all 0.1s;
  &:hover {
    border: 3px solid #3a0ca3;
  }
`;
const BtnStyle = styled.button`
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: #8ecae6;
  color: #023047;
  font-size: 20px;
  transition: all 0.3s;
  &:hover {
    color: #8ecae6;
    background-color: #023047;
  }
`;

function Search({onSendData}) {
  const [ConName, setConName] = useState('')
  const[targetName, setTargetName] = useState('')

  const chengeHandeler = (event) => {
    setConName(prev => prev = event.target.value)
  }

  const clickHandeler = () => {
    setConName('')
    setTargetName(prev => prev = ConName)
  }

  useEffect(() => {
    const fetchApi = async () => {
     try {
        const res = await fetch (`https://restcountries.com/v3.1/name/${targetName}`)
        const deta = await res.json()
        onSendData(deta)
     } catch (error) {
      console.log('err')
     }
    }

    if (targetName){
      fetchApi()
    }

  }, [targetName])


  return (
    <>
      <SearchAuria>
        <SearchBox placeholder="Enter the country name"  type="search" onChange={chengeHandeler} value={ConName}></SearchBox>
        <BtnStyle onClick={clickHandeler}>search</BtnStyle>
      </SearchAuria>
    </>
  );
}

export default Search;
