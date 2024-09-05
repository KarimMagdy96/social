"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "@/lib/postsSlice";
import { useEffect } from "react";

export default function Home() {
  let { counter } = useSelector((state: any) => state.counter);
  let dispatch = useDispatch<any>();
  let { allposts, isloading, iserror } = useSelector(
    (state: any) => state.posts
  );
  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  return (
    <div>
      {isloading ? (
        <h1>loading</h1>
      ) : (
        allposts?.map((post: any) => {
          return <h1>{post.body}</h1>;
        })
      )}
    </div>
  );
}
