import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode,Autoplay } from "swiper";
import Fade from "react-reveal/Fade";

// Import Swiper styles
import "swiper/css";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function LandingProduct() {
  const route=useRouter()
  const [width, setwidth] = useState(0);

  useEffect(() => {
    setwidth(window.innerWidth);
  }, []);


  const handleClick=(id,title)=>{
    localStorage.setItem('landingID',JSON.stringify({id:id,title:title}))
    route.push(`/recipe/${id}`)
  }

  const products = [
    [
      "miso-butter roast chicken with acorn squash panzanella",
      0,
      "miso-butter-roast-chicken-acorn-squash-panzanella",
    ],
    [
      "kale and pumpkin falafels with pickled carrot slaw",
      20,
      "kale-and-pumpkin-falafels-with-pickled-carrot-slaw",
    ],
    [
      "chestnut, onion, and currant stuffing",
      13477,
      "chestnut-onion-and-currant-stuffing-14453",
    ],
    [
      "cornmeal pancakes with honey-pecan butter",
      13484,
      "cornmeal-pancakes-with-honey-pecan-butter-108554",
    ],
    [
      "grilled shrimp with tamarind sauce",
      13455,
      "grilled-shrimp-with-tamarind-sauce-103561",
    ],
    [
      "sloppy joe shirred eggs with spinach",
      24,
      "sloppy-joe-shirred-eggs-with-spinach-vivian-howard",
    ],
  ];

  return (
    <>
      <div
        style={{
          maxWidth: "1100px",
          width: "90vw",
          margin: "auto",
          marginBottom: "140px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className={styles.productSide}>
            <h4>Products</h4>
            <h1
              className={styles.productText}
              style={{ maxWidth: "320px", color: "green", opacity: 0.6 }}
            >
              Our Best Recipe For your Amazing Taste 😋
            </h1>
          </div>
            <div
              className={styles.productSliderSide}
              style={{
                marginTop: "20px",
                display: width < 512 ? "none" : "block",
              }}
            >
              <Fade right>
              <Swiper
                 autoplay= {{
                  delay: 10,
                  disableOnInteraction: false,
                  autoplay:true
                 }
                }
                slidesPerView={width < 1400 ? (width < 500 ? 1.2 : 1.5) : 2.2}
                freeMode={true}
                modules={[FreeMode,Autoplay]}
                loop={true}
                speed={3000}
               
              >
               

                <SwiperSlide>
                  <div onClick={()=>handleClick(products[0][1],products[0][0].split(" ").slice(0,3).join(" "))} className={styles.productScroll}>
                    <h2>Roast Chicken</h2>
                    <h5>{products[0][0]}</h5>
                    <img
                      src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[0][2]}.jpg`}
                      alt=""
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div onClick={()=>handleClick(products[1][1],products[1][0].split(" ").slice(0,3).join(" "))}  className={styles.productScroll}>
                    <h2>Falafels</h2>
                    <h5>{products[1][0]}</h5>
                    <img
                      src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[1][2]}.jpg`}
                      alt=""
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div onClick={()=>handleClick(products[2][1],products[2][0].split(" ").slice(0,3).join(" "))} className={styles.productScroll}>
                    <h2>Chestnut Mix</h2>
                    <h5>{products[2][0]}</h5>
                    <img
                      src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[2][2]}.jpg`}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div onClick={()=>handleClick(products[3][1],products[3][0].split(" ").slice(0,3).join(" "))} className={styles.productScroll}>
                    <h2>Cornmeal</h2>
                    <h5>{products[3][0]}</h5>
                    <img
                      src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[3][2]}.jpg`}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div onClick={()=>handleClick(products[4][1],products[4][0].split(" ").slice(0,3).join(" "))} className={styles.productScroll}>
                    <h2>Grilled Shrimp</h2>
                    <h5>{products[4][0]}</h5>
                    <img
                      src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[4][2]}.jpg`}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div onClick={()=>handleClick(products[5][1],products[5][0].split(" ").slice(0,3).join(" "))} className={styles.productScroll}>
                    <h2>sloppy joe</h2>
                    <h5>{products[5][0]}</h5>
                    <img
                      src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[5][2]}.jpg`}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              </Fade>
            </div>
          <div
            style={{
              display: width < 512 ? "block" : "none",
              marginTop: "50px",
              width: "90vw",
              boxShadow: "0px 2px 9px 0px rgba(0,0,1,0.20)",
              justifyContent: "space-between",
              alignItems: "center",
              background: "white",
              borderRadius: "17px",
            }}
          >
            <img
              style={{ width: "90vw", height: "auto", borderRadius: "10px" }}
              src={`https://cdn.dribbble.com/users/143350/screenshots/14006097/media/6d7806731a1d2cfff7b37598338f5502.png?compress=1&resize=400x300&vertical=top`}
            />
            <div style={{ padding: "20px" }}>
              <h5 style={{ color: "orangered" }}>Delicious</h5>
              <h3>Sloppy Joe</h3>
              <p>sloppy joe shirred eggs with spinach</p>
              <button
                style={{
                  background: "#febe15",
                  padding: "15px",
                  border: "none",
                  borderRadius: "5px",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                I am Hungry
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default LandingProduct;
