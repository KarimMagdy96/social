"use client";
import { incrementByAmount } from "@/lib/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  let { counter } = useSelector((state: any) => state.counter);
  let dispatch = useDispatch();

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(incrementByAmount(10))}>add</button>
    </div>
  );
};

export default Profile;
