import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";

export default function ProtectedRoute ({children, requireAdmin}) {

  //로그인한 사용자가 있는지 확인
  //그 사용자가 admin권한이 있는지 확인
  //requireadmin이 true인 경우에는 로그인도 되어있어야하고, admin권한도 있어야함 
  //조건에 맞지않으면 / 상위경로로 navigate! 
  //조건에 맞는경우에만 전달된 children을 보여준다. 

  const {user}= useAuthContext();

  if(!user || (requireAdmin && !user.isAdmin)) {
    return <Navigate to="/" replace />;
  }

  return children;

}