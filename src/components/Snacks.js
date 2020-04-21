import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Menu from './Menu';
/* import {SNACKS} from '../shared/snacks'; */
/* import { withRouter} from 'react-router-dom'; */
import { connect } from 'react-redux';
import { FadeTransform,Stagger } from 'react-animation-components';


const mapStateToProps = state =>  {
  return {
    snacks: state.snacks 
  };
 
};



const Snacks = (props) => {
  
  const items = props.snacks;
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} width='100%' alt={item.altText} />
        <CarouselCaption captionText={item.selection} captionHeader={item.caption} />
      </CarouselItem>
    
    );
  });

  return (
        <div className = 'container'>
          <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(1) translateY(-50%)'
            }}>
          <div className = 'row'>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}  />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />  
            </Carousel>
            </div>
            </FadeTransform>
            <div >
            <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(1) translateY(50%)'
            }}>
              <Menu />
              </FadeTransform>
            </div>
            
        </div>
     
  );
}

export default connect(mapStateToProps)(Snacks);