"use client";
import { useEffect, useState } from "react";
import "./article.css";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
const SERVER = "http://localhost:8080";

interface IArticle {
  id: number;
  title: string;
  content: string;
  writer: string;
  registerDate: string;
}

const Articles = () => {
  const router = useRouter();
  const [articles, setArticles] = useState<IArticle[]>([]);

  const url = `${SERVER}/api/articles`;
  const config = {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      Authorization: `Bearer blah ~`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  const fetchData = async () => {
    try {
      const res = await axios.get(url, config);
      const message = res.data.message;

      if (message === "SUCCESS") {
        console.log("게시글이 있습니다");

        const result = res.data.result;
        for (let i of result) {
          console.log(i);
        }
        setArticles(result);
      } else {
        console.log("게시글이 없습니다");
      }
    } catch (error) {
      console.error("게시글을 불러오는 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>HTML Table</h2>

      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>등록일</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((v) => (
            <tr key={v.id}>
              <td>{v.title}</td>
              <td>{v.content}</td>
              <td>{v.writer}</td>
              <td>{v.registerDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Articles;
