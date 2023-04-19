import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classes from "@/styles/404.module.css";
const NotFoundPage = () => {
  const location = useRouter();
  const [timeCounter, setTimeCounter] = useState(3);
  useEffect(() => {
    setTimeout(() => {
      timeCounter != 0 &&
        setTimeCounter(Number((timeCounter - 0.1).toFixed(2)));
    }, 100);
    timeCounter === 0 && location.push("/");
  }, [timeCounter]);

  return (
    <div className="notFound">
      <h1>Ой..</h1>
      <h2>Такой страницы не существует</h2>
      <p className={classes.notFoundLink}>
        <Link href="/">На главную</Link>
        через {timeCounter}
      </p>
    </div>
  );
};
export default NotFoundPage;
