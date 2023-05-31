import herostyle from "@/app/styles/herosection.module.css";
import style from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

const Herosection = ({ title, imageurl }) => {
  return (
    <>
      <main className={herostyle.main_section}>
        <div className={style.container}>
          <div className={style.grid_two_section}>
            <div className={herostyle.hero_content}>
              <h1>{title}</h1>
              <p>
                From award winning dramas to blockbuster action movies,
                We&apos;ve got you covered browes our section of the latest and
                greatest movies, and find your new favorite today.
              </p>
              <Link href="/movie">
                <button>Explore movies</button>
              </Link>
            </div>

            <div className={herostyle.hero_image}>
              <Image
                src={imageurl}
                alt=" watching movie"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Herosection;
