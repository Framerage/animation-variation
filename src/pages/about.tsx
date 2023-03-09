import React from "react";
import classes from "@/styles/About.module.css";
import Link from "next/link";
const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <h1>About project</h1>
      <div className={classes.projectText}>
        Данный проект создан с целью демонстрации возможных анимаций без
        использования специальных библиотек <br />
        Все примеры были разработаны с нуля либо переведены с версии HTML,CSS,JS
        на React
      </div>
      <div className={classes.projectText}>
        <span>
          Все источники Вы можете найти на{" "}
          <Link
            className={classes.youtubeLink}
            href={"https://www.youtube.com/"}
          >
            Youtube
          </Link>{" "}
          , а некоторые по этим ссылкам &dArr;
        </span>
        <ul>
          <li>T_T</li>
        </ul>
      </div>
    </div>
  );
};
export default About;
