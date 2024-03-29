"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { PG } from "../redux/common/enums/PG";
import { API } from "../redux/common/enums/API";
import AxiosConfig from "../redux/common/configs/axios-config";

const Home = () => {
  const [name, setName] = useState("");
  const url = `${API.SERVER}/name`;
  const data = { name: name };
  AxiosConfig;

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    alert(name + "님 안녕하세요.");
    axios.post(url, data, AxiosConfig()).then((res) => {
      alert(JSON.stringify(res.data) + "님의 계정이 존재합니다.");
    });
  };

  return (
    <>
      <div className="text-blue-500 flex flex-col justify-center items-center w-screen mt-10">
        <h1>Welcome To React World !!!</h1>
        <input className="bg-blue-200" type="type" onChange={handleChange} />
        <br />
        <button onClick={handleClick}>클릭</button>
        <br />
        <Link href={`${PG.USER}/login`}>로그인</Link>
        <Link href={`${PG.USER}/join`}>회원가입</Link>
        <Link href={`${PG.BOARD}/articles`}>보드</Link>
        <Link href={`${PG.DEMO}/redux-counter`}>리덕스 카운터</Link>
      </div>
    </>
  );
};

export default Home;
