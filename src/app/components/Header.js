import style from "@/app/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/app/components/Nav";
const Header = () => {
  return (
    <>
      <header className={style.main_header}>
        <div className={style.navbar_brand}>
          <Link href="/">
            <Image src="/cinema.png" alt="cinema logo" width={30} height={30} />
          </Link>
          <p className={style.name}>MehtaFlix</p>
        </div>
        <Nav />
      </header>
    </>
  );
};

export default Header;
