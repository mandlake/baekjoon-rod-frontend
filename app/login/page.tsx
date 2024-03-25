"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SERVER = "http://localhost:8080";

const Login = () => {
  const router = useRouter();
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
    axios.post(url, data, config).then((res) => {
      const message = res.data["message"];
      if (message == "FAIL") {
        alert("회원정보가 없습니다. 회원가입을 진행해주세요.");
        router.push("/join");
      } else if (message == "WRONG_PASSWORD") {
        alert("비밀번호가 틀렸습니다. 다시 입력해주세요.");
      } else {
        alert("회원가입에 성공했습니다.");
        router.push("/");
      }
    });
  };

  return (
    <>
      <h2>로그인 화면</h2>
      <p>아이디</p> <input type="text" onChange={handleId} />
      <p>비밀 번호</p> <input type="text" onChange={handlePw} />
      <br />
      <br />
      <button onClick={handleSubmit}>로그인</button>
    </>
  );
};

export default Login;
