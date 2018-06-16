import React, { Component }from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import Navbar from "./components/NavBar/NavBar.js"
import images from "./images.json";


class App extends Component {
 
  state = {
    userScore: 0,
    highScore: 0,
    images: images
  }
  
  resetClicked = () => {
    this.state.images.map(image =>  
      image.clicked = false
    )
  }

  handleScore = () => {
    const newScore =this.state.userScore +1
    this.setState({
      userScore: newScore
    })
    if (newScore >= this.state.highScore) {
      this.setState({
        highScore: newScore
      })
    }
    if (newScore === 12) {
      this.setState({ userScore: 0});
      this.resetClicked();
    }
  } 
   
  handleClick = (id) => {
    for (var i = 0; i < this.state.images.length; i++) {
      if (id === this.state.images[i].id) {
        //console.log(this.state.images[i].clicked)
        if (this.state.images[i].clicked === false) {
          this.setState({
            images: images[i].clicked = true
          })
          this.handleScore();
          //console.log(this.state.images[i].name)
          //console.log(this.state.images[i].clicked)
        }
        else  {
          this.setState({ userScore: 0 });
          this.resetClicked();
          //console.log(this.state.images[i].name)
          //console.log(this.state.images[i].clicked)
        }
      }
    }
    console.log(
      this.state.userScore
    )
    console.log(
      this.state.highScore
    )
    this.setState({
      images: images.sort( () =>  Math.random() )
    })
  }

  //render page
  render() {
    return (
      <Wrapper>
        <Title>A Memory Game Tribute to the Greatest Star Wars Movie of All Time</Title>
        <Navbar userScore={this.state.userScore} highScore={this.state.highScore}/>
        { this.state.images.map(image => (
          <ImageCard
          key={image.id}
          id={image.id}
          image={image.image}
          name={image.name}
          clicked={image.clicked}
          handleClick={this.handleClick}
          />
        ))}
        

      </Wrapper>
    )
  }
};

export default App;
