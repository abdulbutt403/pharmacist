import styles, { layout } from "../style";
import React from "react";
import robot from '../assets/robot.png'

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

        <button
          type="button"
          onClick={() => window.location.href="/login"} 
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`}
        >
          OPEN NOW
        </button>
      </div>

    </section>
  );
}
