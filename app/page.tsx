"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (e: any) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    alert(name + "님 안녕하세요.");
  };

  return (
    <>
      <div>Welcome To React World !!!</div>
      <input type="text" onChange={handleChange} />
      <br />
      <button onClick={handleClick}>클릭</button>
    </>
  );
}
