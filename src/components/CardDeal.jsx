import styles, { layout } from "../style";
import React from "react";
import payment from '../assets/card.png'

export default function CardDeal() {



  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo2}>
        <h2 className={styles.heading2} style={{textAlign: 'right'}}>
          Pay your pharmacist as per your choice <br className="sm:block hidden" /> 
          easily.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{textAlign: 'right'}}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <button
          type="button"
          onClick={() => window.location.href="/login"}
          className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none mt-10`}
        >
          LOGIN NOW
        </button>
      </div>

      <div className={layout.sectionImg} id="product">
        <img src={payment}/>
      </div>
    </section>
  );
}
