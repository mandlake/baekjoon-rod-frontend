"use client";

import axios from "axios";
import { useState } from "react";

const SERVER = "http://localhost:8080";

export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    const url = `${SERVER}/name`;
    const data = { name: name };
    const config = {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        Authorization: `Bearer blah ~`,
        "Access-Control-Allow-Origin": "*",
      },
    };

    alert(name + "님 안녕하세요.");
    axios.post(url, data, config).then((res) => {
      alert(JSON.stringify(res.data) + "님의 계정이 존재합니다.");
    });
  };

  return (
    <>
      <div>Welcome To React World !!!</div>
      <input type="type" onChange={handleChange} />
      <br />
      <button onClick={handleClick}>클릭</button>
    </>
  );
}
