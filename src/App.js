import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import { ButtonWrapper } from "./components/Button";
import mainBcg from "./images/mainBcg.jpeg";
import Header from "./components/Header";
class App extends Component {
  render() {
    return (
      <>
        <Header img={mainBcg} title="welcome to our coffee shop">
          <ButtonWrapper color="red" big>
            click me
          </ButtonWrapper>
        </Header>
        <Header />
      </>
    );
  }
}

export default App;
