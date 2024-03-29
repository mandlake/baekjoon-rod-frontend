"use client";

import { useEffect } from "react";
import { NextPage } from "next";
import { getArticles } from "@/redux/features/article-feature/article.service";
import { useDispatch } from "react-redux";

const ArticlesPage: NextPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticles());
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
        <tbody></tbody>
      </table>
    </>
  );
};

export default ArticlesPage;
