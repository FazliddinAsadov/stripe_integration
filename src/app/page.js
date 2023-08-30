"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { checkout } from "../checkout";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image
          alt="img"
          className={styles.img}
          src="/vercel.svg"
          width={100}
          height={50}
        />
        <button
          className={styles.button}
          onClick={() => {
            checkout({
              lineItems: [
                { price: "price_1NkrO3I5sEpoYiDaBqvY1xVc", quantity: 1 },
              ],
            });
          }}
        >
          Buy This image
        </button>
      </div>
    </main>
  );
}
