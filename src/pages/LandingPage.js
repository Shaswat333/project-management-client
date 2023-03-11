import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const items = [
  {
    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRccPGss0Raqbzl_wX2ZsQxad9z6K6iVdqz5Y6IkGvFwqVGShbguiMhZ7c7y8u13yJIcgI&usqp=CAU',
    altText: 'Lisbon',
    key: 1,
    
    
  },
  {
    src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5gp6xVhVsm3PYvrQrtGS78UIEmvyHXyOxtg&usqp=CAU',
    width:100,
    key: 2,
    height:40
  },

  {
    src: 'https://miro.medium.com/max/974/1*T2yzTOm-DOluw-aQ8O5pPg.png',

    key: 3,
    width:30,
    height:40,
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQiIIwqwl1ccflgY-o6BtPw2r7GnfIJS1Gng&usqp=CAU',
  
    key: 3,
    width:30,
    height:40,
  },
  {
    src: 'https://www.aeroportoportosanto.pt/sites/default/files/media/ea3.png',

    key: 3,
    width:30,
    height:40,
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_SwZMf_8i4tYyONovZVptMlGhs9c1jRIN42MrqK4rDcea-5tSBTi3rQzItXbhP03s_k&usqp=CAU',
  
    key: 4,
    width:50,
    height:60,
  },
  {
    src: 'https://images.unsplash.com/photo-1613757668274-4275abb83673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzdG9yZXxlbnwwfHwwfHw%3D&w=1000&q=80',
   
    key: 5,
    width:50,
    height:60,
  },
];

function LandingPage(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={Math.random()}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <>
    <p>Welcome to Astorz you can connect to diffrent store in different places.</p>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    <div>
    <Button >
     <Link to="/singup">Get Started</Link>
    </Button>
    </div>
    
    </>
    
);
}


export default LandingPage;