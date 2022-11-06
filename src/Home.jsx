import styles from "./style";
import { Billing, Business, CardDeal, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import CardDeal2 from "./components/CardDeal2";
import Contact from "./components/Contact";

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <CardDeal />
        <CardDeal2 />
        <Footer />
      </div>
    </div>
  </div>
);

export default Home;