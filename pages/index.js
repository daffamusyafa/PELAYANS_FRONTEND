import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/index.module.css"; 

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.appName}>PELAYANS</h1>
      <Image
        src="/gojek-logo.png"
        alt="Logo"
        width={200}
        height={100}
      />
      <nav>
        <Link href="/login">Login</Link> | <Link href="/register">Register</Link>
      </nav>
    </div>
  );
};

export default Home;
