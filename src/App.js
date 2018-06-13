import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

const App = () => (
  <Wrapper>
    <Title>Images List</Title>
    <ImageCard
      image={images[0].image}
    />
    <ImageCard
      image={images[1].image}
    />
    <ImageCard
      image={images[2].image}
    />
    <ImageCard
      image={images[3].image}
    />
    <ImageCard
      image={images[4].image}
    />
    <ImageCard
      image={images[5].image}
    />
    <ImageCard
      image={images[6].image}
    />
    <ImageCard
      image={images[7].image}
    />
    <ImageCard
      image={images[8].image}
    />
    <ImageCard
      image={images[9].image}
    />
    <ImageCard
      image={images[10].image}
    />
    <ImageCard
      image={images[11].image}
    />
    

  </Wrapper>
);

export default App;
