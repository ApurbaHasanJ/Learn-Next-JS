"use client";
import { useRouter } from "next/navigation";
import React from "react";

const LearnUseRouter = () => {
  const router = useRouter();
  console.log("router", router);
  return <div>
    <h3>Use Router</h3>
    <button type="button" onClick={()=>router.push("/admin/dashboard")}>Go to admin dash</button>
  </div>;
};

export default LearnUseRouter;
