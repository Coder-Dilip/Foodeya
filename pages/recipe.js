// import Fade from "react-reveal/Fade";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
// import { Search } from "@mui/icons-material";
import styles from "../styles/Home.module.css";
function recipe({ data }) {
  console.log("data",data.length)
  const [modalShow, setModalShow] = React.useState();
  const [datas, setdatas] = useState([]);

  const dati = () => {
    setdatas(data.splice(1,data.length));
    console.log(data[19])
    Datas()
  };

  const Datas=()=>{
    // console.log(datas)
    return (
      datas.map((element, index) => (
        <>
          {/* <RecommendCards
            key={index}
            id={element[0].id}
            title={element[0].Title}
            instructions={element[0].Instructions}
            image={element[0].Image_Name}
            ingredients={element[0].Cleaned_Ingredients}
          /> */}
          <p>{element[0].Title}</p>
        </>
      ))
    )
  }
  useEffect(() => {
    if (modalShow === undefined) {
      setModalShow(true);
      dati();
    }
  }, []);

  const [width, setwidth] = useState(0);

  useEffect(() => {
    setwidth(window.innerWidth);
  }, []);
  const [focus, setfocus] = useState(false);
  return (
    <>
      <Header />

      <div
        style={{
          height: width < 600 ? "50vh" : "110vh",
          width: "100vw",
          backgroundRepeat: "no-repeat",
          margin: "auto",
          background: 'url("/search.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        className={styles.backrecipe}
      >
        <h1
          style={{
            fontFamily: "sans-serif",
            fontWeight: "bolder",
            fontSize: width > 600 ? "3.8rem" : "1.4rem",
            filter: "brightness(1.2)",
          }}
        >
          Are You <span style={{ color: "orangered" }}>Hungry?</span>
        </h1>
        <button
          style={{
            padding: "20px 35px",
            borderRadius: "7px",
            cursor: "pointer",
            border: "none",
            color: "white",
            background: "orange",
            fontWeight: "bold",
            display: "block",
            borderBottomRightRadius: "50px",
          }}
          onClick={() => {
            setfocus(true);
            window.location.href = "/recipe#search";
          }}
        >
          Search
        </button>
      </div>

      <h1
        style={{
          maxWidth: "400px",
          textAlign: "center",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        Let's find something Delicious for you
      </h1>
      <p
        style={{
          maxWidth: "450px",
          margin: "auto",
          textAlign: "center",
          opacity: 0.6,
          marginTop: "30px",
        }}
      >
        Search any recipe you want to, you can type single word such as
        (chicken, roast, pie, icecream, etc) if you are confused ;){" "}
      </p>

      <div
        id="search"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          boxShadow: "0px 2px 9px 0px rgba(0,0.3,5.3,0.15)",
          maxWidth: "400px",
          width: "90vw",
          margin: "auto",
          borderRadius: "10px",
          marginTop: "60px",
          marginBottom: "50px",
        }}
      >
        <input
          autoFocus={focus}
          type="text"
          placeholder="Search..."
          style={{ outline: "none", border: "none", padding: "10px 25px" }}
        />
        {/* <Search
          style={{ backgound: "blue", borderRadius: "50%", color: "orangered" }}
        /> */}
      </div>
      <div
        style={{
          margin: "auto",
          maxWidth: "1400px",
          width: "90vw",
          marginTop: "170px",
          display:'block'
        }}
      >
        <h2>Recommended Recipes</h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Datas />
        </div>
      </div>
    </>
  );
}

export default recipe;

export async function getServerSideProps() {
  const key = process.env.API_KEY;
  let formdata = new FormData();
  formdata.append("id", 13200);
  formdata.append("key", process.env.API_KEY);
  let result = await fetch("https://dilipbackend.xyz/api/recommend", {
    method: "POST",
    body: formdata,
  });
  result = await result.json();
  return {
    props: {
      data: result,
    },
  };
}
