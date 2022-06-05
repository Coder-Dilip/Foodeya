// import Fade from "react-reveal/Fade";
import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import styles from "../../styles/Home.module.css";
import Fade from "react-reveal/Fade";
import Footer from '../../components/Footer'

function recipe() {
  const [render, setrender] = useState("");
  const [recommend, setrecommend] = useState("");
  const Datas = ({ id, title, ingredients, image, instructions }) => {
    return (
      <>
        <div
          onClick={() => {
            localStorage.setItem(
              "food_id",
              JSON.stringify({
                id: id,
                title: title,
                ingredients: ingredients,
                image: image,
                instructions: instructions,
              })
            );
            window.location.href = `/recipe/${id}`;
          }}
          className={styles.recommended_elements}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "20px",
            marginTop: "-20px",
            maxWidth: width < 760 ? "200px" : "300px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
          }}
        >
          <img
            style={{
              width: width < 760 ? "200px" : "300px",
              height: "auto",
              objectFit: "cover",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
            src={`https://dilipbackend.xyz/public/storage/recommend/food/${image}.jpg`}
          />
          <h5
            style={{
              maxWidth: width < 760 ? "200px" : "300px",
              color: "white",
              marginTop: "-70px",
              padding: "15px",
              background: "#00000078",
              display: "inline",
              height: "70px",
              fontSize: width < 750 ? "0.8rem" : "0.9rem",
            }}
          >
            {title.toUpperCase().split(" ").splice(0, 7).join(" ")}
          </h5>
          <h3 style={{ color: "orange" }}>Ingredients</h3>
          <p style={{ marginTop: "-8px" }}>
            {ingredients.split(" ").splice(0, 8).join(" ")}...
          </p>
          <button
            style={{
              padding: "8px 25px",
              background: "orange",
              color: "white",
              outline: "none",
              borderRadius: "3px",
              border: "none",
              marginBottom: "80px",
              cursor: "pointer",
            }}
          >
            Details
          </button>
        </div>
      </>
    );
  };

  const [width, setwidth] = useState(0);
  const [search, setsearch] = useState("Bourbon");
  const [localData, setlocalData] = useState([]);
  const showData = () => console.log(localData);

  useEffect(() => {
    setrender(1)
    console.log = function () {};
    setwidth(window.innerWidth);
    const call = async () => {
      let formdata = new FormData();
      let id = search;

      formdata.append("key", "!@212x#he%^fg&*()fdd");
      formdata.append("searchItem", search);
      let result = await fetch("https://dilipbackend.xyz/api/r", {
        method: "POST",
        body: formdata,
      });
      result = await result.json();
      localStorage.setItem("food_data", JSON.stringify(result));
      setlocalData(JSON.parse(localStorage.getItem("food_data")));
      showData();
      console.log(JSON.parse(localStorage.getItem("food_data")));
    };
    call();
  }, [search]);
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
<Fade up>
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
        (chicken, roast, chocolate, burger, etc) if you are confused ;){" "}
      </p>

      <div
        id="search"
        style={{
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
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            setsearch(recommend);
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            style={{ outline: "none", border: "none", padding: "10px 25px" }}
            value={recommend}
            onChange={(e) => {
              setrecommend(e.target.value);
            }}
          />
          <Search
            style={{
              backgound: "blue",
              borderRadius: "50%",
              color: "orangered",
            }}
            onClick={() => {
              setsearch(recommend);
            }}
          />
        </form>
      </div>
      </Fade>
      <div
        style={{
          margin: "auto",
          maxWidth: "1400px",
          width: "90vw",
          marginTop: "170px",
          display: "block",
        }}
      >
        <h2 style={{ marginBottom: "80px" }}>Delicious Recipes</h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: width < 535 ? "left" : "",
          }}
        >
          {render==1
            ? JSON.parse(localStorage.getItem("food_data"))
              ? JSON.parse(localStorage.getItem("food_data"))
                  .splice(
                    0,
                    JSON.parse(localStorage.getItem("food_data")).length
                  )
                  .map((element, index) => (
                    <>
                      <Datas
                        key={element.id}
                        id={element.id}
                        title={element.Title}
                        instructions={element.Instructions}
                        image={element.Image_Name}
                        ingredients={element.Cleaned_Ingredients}
                      />
                    </>
                  ))
              : null
            : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default recipe;
