import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArticlesAPI } from "./article.api";

export const getAllArticles: any = createAsyncThunk(
  "articles/getAllArticles",
  async (page: number) => {
    console.log("getArticles page : " + page);
    const data: any = await getAllArticlesAPI(1);

    const { message, result }: any = data;
    return data;
  }
);
