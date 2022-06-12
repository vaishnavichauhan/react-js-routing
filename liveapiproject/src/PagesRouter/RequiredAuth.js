import React from "react";
import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";

export default function RequireAuth({ children }) {
    const { currentUser } = useSelector((state) => state.homedata);
  return currentUser ? children : <Navigate to="/Login" replace />;
  }