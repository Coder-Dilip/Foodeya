// import Fade from "react-reveal/Fade";
import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import styles from "../styles/Home.module.css";
function recipe() {



  const [datas, setdatas] = useState([]);

  const Datas=({id,title,ingredients,image,instructions})=>{
    return (
      <>
      <div style={{display:'flex',flexDirection:'column',margin:'20px',marginTop:'-20px'}}>
      <img style={{width:'300px',height:'auto',objectFit:'cover'}} src={`https://dilipbackend.xyz/public/storage/recommend/food/${image}.jpg`}/>
      <h4 style={{maxWidth:'300px',color:'white',fontFamily:'sans-serif',fontWeight:'800',marginTop:'-60px',padding:'15px'}}>{title.toUpperCase()}</h4>
      </div>
      </>
    )
  }
 
 

  const [width, setwidth] = useState(0);

  useEffect(() => {
    setwidth(window.innerWidth);
  const call=async()=>{
    let formdata = new FormData();
      formdata.append("id", 13200);
      formdata.append("key", "!@212x#he%^fg&*()fdd");
      let result = await fetch("https://dilipbackend.xyz/api/recommend", {
        method: "POST",
        body: formdata,
      });
      result = await result.json();
      setdatas(result)
  }
  call()
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
        <Search
          style={{ backgound: "blue", borderRadius: "50%", color: "orangered" }}
        />
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
        <h2 style={{marginBottom:'50px'}}>Recommended Recipes</h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {datas.length>0?datas.slice(1,datas.length).map((element,index)=>(
            <>
            <Datas 
            key={element[0].id}
            id={element[0].id}
            title={element[0].Title}
            instructions={element[0].Instructions}
            image={element[0].Image_Name}
            ingredients={element[0].Cleaned_Ingredients}
            />
            </>
          )):null}
        </div>
      </div>
    </>
  );
}

export default recipe;


