import styles, { layout } from "../style";
import React from "react";
import robot from '../assets/robot.png'
import { dashboardPort } from "./constants";

export default function CardDeal2() {
  return (
    <section className={layout.section}>
    
      <div className={layout.sectionImg}>
        <img src={robot}/>
      </div>


      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Get Lab reports from  <br className="sm:block hidden" /> your
          phone.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

      </div>

    </section>
  );
}
