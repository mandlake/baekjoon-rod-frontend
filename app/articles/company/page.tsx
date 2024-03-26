"use client";

import { useRouter } from "next/navigation";
import "./article.css";
import axios from "axios";

const SERVER = "http://localhost:8080";

interface ICompany {
  index: number;
  title: string;
  content: string;
  writer: string;
  registerData: string;
}

const Company = (props: ICompany) => {
  return (
    <>
      <tr key={props.index}>
        <td>{props.title}</td>
        <td>{props.content}</td>
        <td>{props.writer}</td>
        <td>{props.registerData}</td>
      </tr>
    </>
  );
};

const Companies = () => {
  const router = useRouter();

  const url = `${SERVER}/api/company`;
  const config = {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Bearer blah ~`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  // axios.get(url, config).then((res) => {
  //   const message = res.data.message;
  //   alert(message);
  //   if (message == "SUCCESS") {
  //     alert("게시글이 있습니다.");
  //   } else if (message == "FAIL") {
  //     alert("와");
  //   } else {
  //     alert("와");
  //   }
  // });

  const companies = [
    {
      index: 0,
      title: "",
      content: "",
      writer: "",
      registerData: "",
    },
  ];

  const companyMap = companies.map((v) => (
    <Company
      key={v.index}
      index={v.index}
      title={v.title}
      content={v.content}
      writer={v.writer}
      registerData={v.registerData}
    />
  ));

  return (
    <>
      <h1>글쓰기</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Writer</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{companyMap}</tbody>
      </table>
    </>
  );
};

export default Companies;
