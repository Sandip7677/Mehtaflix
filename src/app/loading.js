import style from "@/app/styles/common.module.css";

const Loading = () => {
  return (
    <>
      <section className={style.loading_section}>
        {/* from loading css */}
        <div className={style["lds-spinner"]}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Loading;
