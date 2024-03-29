"use client";

import { useEffect, useState } from "react";
import { NextPage } from "next";
import { getAllArticles } from "@/redux/features/article-feature/article.service";
import { useDispatch } from "react-redux";

const ArticlesPage: NextPage = () => {
  const dispatch = useDispatch();
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    dispatch(getAllArticles());
  }, []);

  return (
    <>
      <h2>게시글 목록</h2>

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

export default ArticlesPage;
