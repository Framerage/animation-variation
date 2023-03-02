import React, { ReactNode } from "react";
import Header from "../header";
import classes from "@/styles/AppLayout.module.css";
import Footer from "../footer";
const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};
export default AppLayout;
