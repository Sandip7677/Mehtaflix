import style from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const Moviecard = (cur) => {
  const { id, type, title, synopsis } = cur.jawSummary;
  return (
    <>
      <div className={style.card}>
        <div className={style.card_image}>
          <Image
            src={cur.jawSummary.backgroundImage.url}
            alt={title}
            width={260}
            height={200}
          />
        </div>
        <div className={style.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <p>{`${synopsis.substring(0, 100)}...`}</p>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Moviecard;
