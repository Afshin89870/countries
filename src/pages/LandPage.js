import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Card from "../components/Card";

function LandPage() {
  const [api, setApi] = useState([]);

  const handelSendDeta = (deta) => {
    setApi(deta);
  };
  return (
    <>
      <Search onSendData={handelSendDeta} />
      <Card api = {api}/>
    </>
  );
}

export default LandPage;
