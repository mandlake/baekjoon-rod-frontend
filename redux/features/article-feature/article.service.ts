import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosConfig, { instance } from "@/redux/common/configs/axios-config";

export const getArticles: any = createAsyncThunk(
  "articles/getAllArticles",
  async (page: number, { rejectWithValue }) => {
    console.log("getArticles page : " + page);
    const url = `/all-articles`;
    try {
      // const { allArticles }: any = getAllArticlesAPI(page);
      // return allArticles;
      const res = await instance(url, AxiosConfig());
      const message = res.data.message;

      if (message === "SUCCESS") {
        console.log("게시글이 있습니다");
        const result = res.data.result;
        for (let i of result) {
          console.log(i);
        }
        //setArticles(result);
      } else {
        console.log("게시글이 없습니다");
      }
    } catch (error) {
      console.log("getArticles error" + error);
      return rejectWithValue(error);
    }
  }
);
