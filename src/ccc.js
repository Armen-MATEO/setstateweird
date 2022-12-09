import React from "react";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "John",
      lastName: "Lennon",
      personalInfo: {
        age: 40,
        address: "Liverpool"
      }
    };
  }
  render() {
    return (
      <h1>
        <h2>{this.personalInfo.age}</h2>

        <button
          onClick={() => {
            this.setState((prevState) => {
              return prevState.personalInfo.age + 1;
            });
          }}
        >
          lkjlk
        </button>
      </h1>
    );
  }
}

export default Welcome;
