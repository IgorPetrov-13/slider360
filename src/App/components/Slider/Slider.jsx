import { useEffect, useState } from 'react';
import './Slider.scss';

const slides = [
  { id: 1, text: 'Слайд 1', color: 'lightcoral' },
  { id: 2, text: 'Слайд 2', color: 'lightblue' },
  { id: 3, text: 'Слайд 3', color: 'lightgreen' },
  { id: 4, text: 'Слайд 4', color: 'lightyellow' },
];

const Slider = () => {
  const autoplayTime = 2000;
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, autoplayTime);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const startAutoplay = () => {
    setIsPlaying(true);
  };

  const stopAutoplay = () => {
    setIsPlaying(false);
  };

  return (
    <>
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentIndex ? 'slide-active' : ''}`}
            style={{ backgroundColor: slide.color }}
          >
            <h2>{slide.text}</h2>
          </div>
        ))}
      </div>
      <div className="slider_buttons">
        <button onClick={prevSlide}>Prev</button>
        <button onClick={startAutoplay}>Play</button>
        <button onClick={stopAutoplay}>Stop</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </>
  );
};

export default Slider;
