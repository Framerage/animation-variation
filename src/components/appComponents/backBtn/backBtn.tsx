import { useRouter } from "next/router";
import React from "react";

const BackBtn = () => {
  const router = useRouter();
  const returnPage = () => router.back();
  return (
    <button onClick={returnPage} className="backBtn">
      {"<-"}
    </button>
  );
};
export default BackBtn;
