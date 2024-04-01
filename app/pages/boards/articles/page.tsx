"use client";

import { useEffect } from "react";
import { NextPage } from "next";
import { fetchAllArticles } from "@/redux/features/article-feature/article.service";
import { useDispatch, useSelector } from "react-redux";
import { getAllArticles } from "@/redux/features/article-feature/article.slice";

const ArticlesPage: NextPage = () => {
  const dispatch = useDispatch();
  const allArticles: [] = useSelector(getAllArticles);

  if (allArticles !== undefined) {
    console.log("allArticles is defined");
    console.log(allArticles);
  } else {
    console.log("allArticles is undefined");
  }

  useEffect(() => {
    dispatch(fetchAllArticles(1));
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center w-screen mt-10">
        <h1 className="font-semibold text-stone-600 text-[30px]">
          게시글 목록
        </h1>

        <table className="border-stone-800 border-2">
          <thead className="text-stone-700">
            <tr>
              <th>제목</th>
              <th>내용</th>
              <th>작성자</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody className="text-stone-600">
            {allArticles?.map((props: IArticle) => (
              <tr key={props.id}>
                <td>{props.title}</td>
                <td>{props.content}</td>
                <td>{props.writer}</td>
                <td>{props.registerDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ArticlesPage;
