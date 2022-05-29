import styles from "../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function LandingProduct() {
  const Product = ({ title, id, image }) => {
    return (
        <SwiperSlide>
          <div>
            <h2>Chicken</h2>
            <h5>{title}</h5>
            <img
              src={`https://dilipbackend.xyz/public/storage/recommend/food/${image}.jpg`}
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>
    );
  };

  const products = [
    [
      "miso-butter roast chicken with acorn squash panzan",
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
      <div style={{ maxWidth: "1100px", width: "90vw", margin: "auto" }}>
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
              Our Best Recepie For your Amazing Taste 😋
            </h1>
          </div>
          <div
            className={styles.productSliderSide}
            style={{ marginTop: "20px" }}
          >
            <Swiper  slidesPerView={1.5} >
              {/* mobile ko lagi simple card banauni slider hatayera */}

              <SwiperSlide>
          <div>
            <h2>Chicken</h2>
            <h5>{products[0][0]}</h5>
            <img
              src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[0][2]}.jpg`}
              alt=""
              srcset=""
            />
          </div>
        </SwiperSlide>

              <SwiperSlide>
          <div>
            <h2>Chicken</h2>
            <h5>{products[1][0]}</h5>
            <img
              src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[1][2]}.jpg`}
              alt=""
              srcset=""
            />
          </div>
          
        </SwiperSlide>

              <SwiperSlide>
          <div>
            <h2>Chicken</h2>
            <h5>{products[2][0]}</h5>
            <img
              src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[2][2]}.jpg`}
              alt=""
              srcset=""
            />
          </div>
          
        </SwiperSlide>
              <SwiperSlide>
          <div>
            <h2>Chicken</h2>
            <h5>{products[3][0]}</h5>
            <img
              src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[3][2]}.jpg`}
              alt=""
              srcset=""
            />
          </div>
          
        </SwiperSlide>
              <SwiperSlide>
          <div>
            <h2>Chicken</h2>
            <h5>{products[4][0]}</h5>
            <img
              src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[4][2]}.jpg`}
              alt=""
              srcset=""
            />
          </div>
          
        </SwiperSlide>
              <SwiperSlide>
          <div>
            <h2>Chicken</h2>
            <h5>{products[5][0]}</h5>
            <img
              src={`https://dilipbackend.xyz/public/storage/recommend/food/${products[5][2]}.jpg`}
              alt=""
              srcset=""
            />
          </div>
          
        </SwiperSlide>
       
              
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingProduct;
