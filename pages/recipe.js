import Header from "../components/Header";
import { useEffect, useState } from "react";
import { GitHub, Instagram, Facebook, FoodBank,Twitter,Search} from "@mui/icons-material";
function recipe() {
  const [width, setwidth] = useState(0);
  useEffect(() => {
    setwidth(window.innerWidth);
  }, []);
  const [focus, setfocus] = useState(false)
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

          onClick={()=>{
              setfocus(true)
              window.location.href="/recipe#search"
          }}
        >
          Search
        </button>
      </div>
      <h1 style={{maxWidth:'400px',textAlign:'center',margin:'auto',marginTop:'100px'}}>Let's find something Delicious for you</h1>
      <p style={{maxWidth:'450px',margin:'auto',textAlign:'center',opacity:0.6,marginTop:'30px'}}>Search any recipe you want to, you can type single word such as (chicken, roast, pie, icecream, etc) if you are confused ;) </p>

      <div id="search" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px',boxShadow:"0px 2px 9px 0px rgba(0,0.3,5.3,0.25)",maxWidth:'400px',width:'90vw',margin:'auto',borderRadius:'10px',marginTop:'60px',marginBottom:'50px'}}>
          <input autoFocus={focus} type="text" placeholder="Search..." style={{outline:'none',border:'none',padding:'10px 25px'}}/>
          <Search style={{backgound:'blue',borderRadius:'50%',color:'orangered'}}/>
      </div>
    </>
  );
}

export default recipe;
