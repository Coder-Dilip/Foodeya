import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Reveal from "react-reveal/Reveal";
import styles from "../../styles/Home.module.css";
import { Search } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  maxWidth: "400px",
  maxHeight: "500px",
  overflowY: "auto",
};
const Id = () => {
  const [data, setdata] = useState([]);
  const [width, setwidth] = useState(0);
  const [localData, setlocalData] = useState("");
  const [color, setcolor] = useState("gray");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [search, setsearch] = useState("Bourbon");
  const [recommend, setrecommend] = useState("");
  const [relaunch, setrelaunch] = useState(1);
  const [message, setmessage] = useState("");

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
            // boxShadow: "0px 2px 9px 0px rgba(0,0.3,5.3,0.15)",
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

  const getRecommendation = async () => {
    let formdata = new FormData();
    formdata.append(
      "id",
      Number(JSON.parse(localStorage.getItem("food_id")).id)
    );
    formdata.append("key", "!@212x#he%^fg&*()fdd");

    let result = await fetch("https://dilipbackend.xyz/api/recommend", {
      method: "POST",
      body: formdata,
    });

    result = await result.json();
    setdata(result);
  };

  useEffect(() => {
    getRecommendation();
  }, []);

  const call = async () => {
    let formdata = new FormData();
    formdata.append("key", "!@212x#he%^fg&*()fdd");
    formdata.append("searchItem", search);
    let result = await fetch("https://dilipbackend.xyz/api/r", {
      method: "POST",
      body: formdata,
    });
    result = await result.json();
    if (result.length > 0) {
      localStorage.setItem(
        "food_id",
        JSON.stringify({
          id: result[0].id,
          title: result[0].Title,
          ingredients: result[0].Cleaned_Ingredients,
          image: result[0].Image_Name,
          instructions: result[0].Instructions,
        })
      );
      getRecommendation();
      setlocalData(JSON.parse(localStorage.getItem("food_id")));
      setmessage("");
    } else {
      setmessage("No Such Recipes :(");
    }
    // window.location.reload()
  };

  useEffect(() => {
    console.log = function () {};
    call();
    setwidth(window.innerWidth);
  }, [relaunch]);

  useEffect(() => {
    setwidth(window.innerWidth);
    setlocalData(JSON.parse(localStorage.getItem("food_id")));
  }, [relaunch]);

  return (
    <>
      <Header />

      <div
        id="search"
        style={{
          padding: "10px",
          boxShadow: "0px 2px 9px 0px rgba(0,0.3,5.3,0.15)",
          maxWidth: "400px",
          width: "90vw",
          margin: "auto",
          borderRadius: "10px",
          marginTop: "135px",
          marginBottom: "20px",
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
            call();
            setsearch(recommend);
            setrelaunch(relaunch == 1 ? 2 : 1);
            getRecommendation();
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
              setrelaunch(relaunch == 1 ? 2 : 1);
            }}
          />
        </form>
      </div>
      <p
        style={{
          margin: "auto",
          color: "orangered",
          width: "100%",
          textAlign: "center",
          marginTop: "40px",
          fontWeight: "bold",
        }}
      >
        {message}
      </p>
      <div style={{ maxWidth: "1400px", margin: "auto", marginTop: "50px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: width < 750 ? "left" : "space-evenly",
            flexWrap: "wrap",
            marginLeft: width < 750 ? "30px" : "0px",
          }}
        >
          {localData != "" ? (
            <Reveal>
              <img
                style={{
                  width: width < 760 ? "200px" : "350px",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                src={`https://dilipbackend.xyz/public/storage/recommend/food/${localData.image}.jpg`}
              />
            </Reveal>
          ) : null}
          <div>
            <p
              style={{
                fontWeight: "lighter",
                letterSpacing: "0.5rem",
                opacity: 0.6,
              }}
            >
              Delicious
            </p>
            <h2 style={{ fontWeight: "normal" }}>
              {localData != ""
                ? localData.title
                    .split(" ")
                    .map(
                      (word) =>
                        word[0].toUpperCase() + word.slice(1, word.length)
                    )
                    .join(" ")
                : null}
            </h2>
            <p style={{ fontWeight: "lighter", opacity: 0.6 }}>
              With easy Instructions and Ingredients
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                maxWidth: "350px",
                marginTop: "30px",
              }}
            >
              <div>
                <h3>
                  {localData != ""
                    ? Math.floor(Math.random() * 1000) + 200
                    : null}
                </h3>
                <p style={{ opacity: 0.6 }}>Favs</p>
              </div>
              <div>
                <h3>
                  {localData != ""
                    ? Math.floor(Math.random() * 1) +
                      4 +
                      "." +
                      Math.floor(Math.random() * 9)
                    : null}
                </h3>
                <p style={{ opacity: 0.6 }}>Rating</p>
              </div>
              <div>
                <h3>
                  {localData != "" ? Math.floor(Math.random() * 10) + 10 : null}
                </h3>
                <p style={{ opacity: 0.6 }}>Ingredients</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "180px",
              }}
            >
              <button
                style={{
                  padding: "12px 25px",
                  marginTop: "30px",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                  backgroundColor: "blueviolet",
                  color: "white",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              >
                See Details
              </button>
              <FavoriteIcon
                style={{ marginTop: "30px", cursor: "pointer", color: color }}
                onClick={(e) => {
                  e.preventDefault();
                  {
                    color == "gray" ? setcolor("red") : setcolor("gray");
                  }
                }}
              />
            </div>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    color={"orangered"}
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Ingredients
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    {localData !== "" ? localData.ingredients : null}
                  </Typography>
                  <br />
                  <br />
                  <br />
                  <Typography
                    color={"orangered"}
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Instructions
                  </Typography>
                  <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    {localData !== "" ? localData.instructions : null}
                  </Typography>
                </Box>
              </Fade>
            </Modal>
          </div>
        </div>
      </div>
      <h2 style={{ marginLeft: "7%", marginTop: "160px" }}>
        Recommended{" "}
        <span style={{ color: "orangered", textDecoration: "underline" }}>
          Recipes
        </span>
      </h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: width < 535 ? "center" : "",
          marginTop: "100px",
          marginLeft: "7%",
        }}
      >
        {data.length > 0
          ? data.slice(1, data.length - 10).map((element, index) => (
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
            ))
          : null}
      </div>
    </>
  );
};

export default Id;
