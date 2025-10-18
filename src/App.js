import React, { Component } from "react";
import profilePic from "./messi.jpg"; // Make sure messi.jpg is in src/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Lionel Messi",
        bio: "Lionel Andrés Messi Cuccittini is an Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Messi has won a record six Ballon d'Or awards and a record six European Golden Shoes. He has spent his entire professional career with Barcelona, where he has won a club-record 34 trophies, including ten La Liga titles, seven Copa del Rey titles and four UEFA Champions League titles. He is Barcelona's all-time top scorer and has also scored over 700 senior career goals for club and country.",
        imgSrc: profilePic,
        profession: "Football player",
      },
      shows: false,
      secondsElapsed: 0,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        secondsElapsed: prevState.secondsElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, secondsElapsed } = this.state;

    const cardStyle = {
      display: "inline-block",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      background: "linear-gradient(135deg, #1e3c72, #2a5298, #6dd5ed)",
      color: "white",
      textAlign: "center",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
    };

    const imgStyle = {
      width: "200px",
      height: "200px",
      objectFit: "cover",
      borderRadius: "50%",
      marginBottom: "15px",
      transition: "transform 0.3s",
    };

    const buttonStyle = {
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      borderRadius: "8px",
      border: "none",
      background: "#ff4c4c",
      color: "white",
      marginBottom: "30px",
      transition: "background 0.3s",
    };

    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <button
          onClick={this.toggleShow}
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.background = "#ff1a1a")}
          onMouseLeave={(e) => (e.target.style.background = "#ff4c4c")}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={person.imgSrc} alt={person.fullName} style={imgStyle} />
            <h2 style={{ fontWeight: "bold", fontSize: "1.8rem" }}>{person.fullName}</h2>
            <h4 style={{ fontStyle: "italic", margin: "10px 0" }}>{person.profession}</h4>
            <p style={{ lineHeight: "1.5" }}>{person.bio}</p>
            <p style={{ marginTop: "15px", fontWeight: "bold" }}>
              Time since mounted: {secondsElapsed} second{secondsElapsed !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
