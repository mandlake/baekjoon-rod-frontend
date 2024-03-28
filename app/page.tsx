"use client";

import axios from "axios";
import { useState } from "react";
import { API } from "./atoms/enums/API";
import AxiosConfig from "./organisms/configs/axios-config";

const Home = () => {
  const [name, setName] = useState("");
  const url = `${API.SERVER}/name`;
  const data = { name: name };

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
      </div>
    </>
  );
};

export default Home;
