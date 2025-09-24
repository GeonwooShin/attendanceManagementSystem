import Image from "next/image";
import { css } from "../../styled-system/css";

export default function Home() {
  return (
    <div className={css({ fontSize: "2xl", fontWeight: "bold" })}>
      attendance Management System
    </div>
  );
}
