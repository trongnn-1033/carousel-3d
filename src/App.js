import React from 'react';
import Carousel from './components/Carousel';

function App() {
  const listData = [
    "/images/download.jpeg",
    "/images/download (1).jpeg",
    "/images/download (2).jpeg",
    "/images/download (3).jpeg",
    "/images/download (4).jpeg",
    "/images/download (5).jpeg",
    "/images/download (6).jpeg",
    "/images/download (7).jpeg",
  ]
  return (
    <div className="App">
      <Carousel
        width={500}
        height={300}
        gap={40}
        listCarousel = {listData}
      />
    </div>
  );
}

export default App;
