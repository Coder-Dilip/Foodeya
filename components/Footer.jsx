import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { GitHub, Instagram, Facebook, FoodBank,Twitter} from "@mui/icons-material";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  const [width, setwidth] = useState("");

  useEffect(() => {
    setwidth(window.innerWidth);
  }, []);
  return (
    <div
      style={{
          color:'black',
        marginTop: "100px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        color: "white",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <p style={{
          color:'black', opacity: "0.6" }}>Get in touch</p>
      <p
        className={styles.hello}
        style={{
            color:'black',
          fontSize:
            width > 768
              ? "41px"
              : width > 660
              ? "43px"
              : width > 400
              ? "30px"
              : width > 300
              ? "22px"
              : "20px",
          marginTop: "-10px",
          width: "100%",
          animation: "none",
          textAlign: "center",
          marginTop: "-2px",
        }}
      >
        Let&apos;s make Delicious
      </p>
      <p
        style={{
            color:'black',
          textAlign: "center",
          width: "93%",
          maxWidth: "500px",
          fontSize: "1.1rem",
          letterSpacing: "0.05rem",
          lineHeight: "1.8rem",
          marginTop: "-20px",
        }}
      >
        If you have the delicious recipes in your mind and you want to contribute in this site then please, feel free to{" "}
        <span
          onClick={() => (window.location.href = "/Contact")}
          className={styles.nomadicTravelers}
          style={{
              color:'black',
            color: "blue",
            borderBottomColor: "blue",
            paddingBottom: "2px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          contact and work with us :)
        </span>{" "}
   
      </p>

      <div
        style={{
            color:'black',
          display: "flex",
          alignItems: "center",
          marginTop: "5px",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <div>
          <img
            src="/foodeya.svg"
            className={styles.avatar}
            style={{
                color:'black',
              position: "relative",
              top: "5px",
              width: "40px",
              height: "38px",
            }}
            alt="dilip-profile"
          />
          <div
            style={{
                color:'black',
              width: "10px",
              height: "10px",
              backgroundColor: "#66ff00",
              borderRadius: 10,
              position: "relative",
              left: "32px",
              top: "-10px",
              border: "1px solid white",
              padding: "2px",
            }}
          ></div>
        </div>
        <p style={{
            color:'black', fontSize: "0.9rem", marginLeft: "10px" }}>
          <strong>Reply Time:</strong> within 5-6 hours
        </p>
      </div>

      <div
        style={{
            color:'black',
          width: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          className={styles.contact}
          style={{
              color:'white', marginTop: "30px", outline: "none", textAlign: "center",background:'orange' }}
          value="foodyearecipes@gmail.com"
          contentEditable={false}
          readOnly={true}
        />
      </div>
      <div
        style={{
            color:'black',
          display: "flex",
          alignItems: "center",
          width: "200px",
          justifyContent: "space-between",
          margin: "auto",
          marginTop: "10px",
        }}
      >
        <a
          href="https://github.com/Coder-Dilip"
          target="_blank"
          rel="noreferrer"
        >
          <FoodBank className={styles.links_icons_footer} />
        </a>
        <a
          href="http://www.instagram.com/dilip_stack"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram className={styles.links_icons_footer} />
        </a>
        <a
          href="https://www.facebook.com/dilip.pokhrel.18294/"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook className={styles.links_icons_footer} />
        </a>
        <a
          href="https://www.behance.net/hemsharma"
          target="_blank"
          rel="noreferrer"
        >
          <p
            className={styles.links_icons_footer}
            style={{
                color:'black',
              fontWeight: "bold",
              fontFamily: "sans-serif",
              position: "relative",
              fontSize: "1.3rem",
              opacity:0.6
            }}
          >
            <Twitter />
            <span style={{
                color:'black', position: "relative", top: "-9px", left: "-15px" }}>
              -
            </span>
          </p>
        </a>
      </div>

      <div
        style={{
            color:'black',
          display: "flex",
          alignItems: "center",
          fontSize: "0.5rem",
          opacity: "0.8",
          marginTop: "30px",
        }}
      >
        <CopyrightIcon style={{
            color:'black', fontSize: "15px", marginRight: "2px" }} />
        <p>{new Date().getFullYear()}</p>
        <p style={{
            color:'black', marginLeft: "5px", cursor: "default" }}>
          All rights reserved - Designed & Coded by Dilip Pokhrel
        </p>
      </div>
    </div>
  );
}

export default Footer;
