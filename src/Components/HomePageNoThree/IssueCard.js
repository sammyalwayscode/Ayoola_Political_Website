import React from 'react'
// import WorkIcon from '@material-ui/icons/Work';

function IssueCard(props) {
  return (
    <div style={{
      backgroundColor: props.backgroundColor,
      // backgroundColor: "#1b5697",
      height: "330px",
      width: "278px",
      display: "flex",
      flexDirection: "column",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "5px"
    }}>
      <div style={{
        width: "250px",
        // backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}>
        {/* <div > <props.materialIconissue
          style={{
            color: "#fcb614",
            height: "40px",
            width: "40px",
            // backgroundColor: "gray"
          }}
        /> </div> */}
        <div > {props.materialIconissue} </div>
        <h2
          style={{
            color: "white",
            fontFamily: "Open Sans",
            letterSpacing: "3px"
          }}
        >{props.IssueTitle}</h2>
        <p
          style={{
            color: "white",
            fontFamily: "Open Sans",
            lineHeight: "30px",
            marginTop: "-4px"
          }}
        >{props.IssueContent}</p>
      </div>
    </div>
  )
}

export default IssueCard
