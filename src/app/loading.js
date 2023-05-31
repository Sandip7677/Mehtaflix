import style from "@/app/styles/common.module.css";

const Loading = () => {
  return (
    <>
      <section className={style.loading_section}>
        <div className={style.loading}></div>
      </section>
    </>
  );
};

export default Loading;
