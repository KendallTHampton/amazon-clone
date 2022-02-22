import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428664220_.jpg"
          alt=""
        ></img>

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Star"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="49538049"
            title="Kenwood Chef Elite Stand Mixer for Baking - Powerful Food Mixer in Silver with K-beater, Dough Hook, Whisk and 4.6 Litre Bowl, 1000 W SILVER"
            price={239.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71v8myTM8ZL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="2948950"
            title="
Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={24.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
          />
          <Product
            id="4890234"
            title="2021 Apple 12.9-inch iPad Pro Wi-Fi + Cellular 256GB - Space Gray"
            price={1349.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/81sxRBhe2sS._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            id="38193749"
            title="Apple Watch Series 7 GPS, 45mm Starlight Aluminum Case with Starlight Sport Band - Regular"
            price={399.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/710UzBv4xkL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="9027319"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model"
            price={1398.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
