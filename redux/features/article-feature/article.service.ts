import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllArticlesAPI } from "./article.api";

export const getAllArticles: any = createAsyncThunk(
  "articles/getAllArticles",
  async (page: number) => {
    console.log("getArticles page : " + page);
    const { message, result }: any = await getAllArticlesAPI(page);
    console.log(message);
    console.log(result);
  }
);
