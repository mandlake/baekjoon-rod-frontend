"use client";

import axios from "axios";
import { useState } from "react";

const SERVER = "http://localhost:8080";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPW] = useState("");

  const url = `${SERVER}/api/login`;
  const data = { id: id, pw: pw };
  const config = {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Bearer blah ~`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  const handleId = (e: any) => {
    setId(e.target.value);
  };
  const handlePw = (e: any) => {
    setPW(e.target.value);
  };

  const handleSubmit = () => {
    alert(id + "님 안녕하세요.");
    axios.post(url, data, config).then((res) => {
      console.log(res.data);
      alert(
        "아이디 : " +
          JSON.stringify(res.data["id"]) +
          " 비밀번호: " +
          JSON.stringify(res.data["pw"])
      );
    });
  };

  return (
    <>
      <h2>로그인 화면</h2>
      <p>아이디</p> <input type="text" onChange={handleId} />
      <p>비밀 번호</p> <input type="text" onChange={handlePw} />
      <br />
      <button onClick={handleSubmit}>로그인</button>
    </>
  );
};

export default Login;
