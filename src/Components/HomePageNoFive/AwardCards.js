import React from 'react'
import Medal from "../Img/yell.png"

function AwardCards(props) {
  return (
    <div style={{
      height: "366px",
      width: "340px",
      backgroundColor: "#282e3f",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "5px",
      marginBottom: "30px",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }}>
      <div
        style={{
          width: "290px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center"
        }}
      >
        <div
        > <img src={Medal} alt='' /> </div>
        <p> {props.AwardYear} </p>
        <p
          style={{ color: "#b1976b", fontSize: "20px", fontWeight: "bold" }}
        > {props.AwardTitle} </p>
        <p> {props.AwardContents} </p>
        {/* <a>Read More</a> */}
      </div>
    </div >
  )
}

export default AwardCards
