import style from "@/app/styles/common.module.css";
import Moviecard from "../components/Moviecard";
import { resolve } from "styled-jsx/css";

const Movie = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_data = result.titles;

  return (
    <>
      <section className={style.movieSection}>
        <div className={style.contianer}>
          <h1>Series & Movies</h1>
          <div className={style.card_section}>
            {main_data.map((cur) => {
              return <Moviecard key={cur.id} {...cur} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
