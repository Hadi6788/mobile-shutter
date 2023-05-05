import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    imageUrl: 'https://example.com/image1.jpg',
    text: 'Slide 1',
  },
  {
    imageUrl: 'https://example.com/image2.jpg',
    text: 'Slide 2',
  },
  {
    imageUrl: 'https://example.com/image3.jpg',
    text: 'Slide 3',
  },
];

const sliderStyles = {
  '.slick-slide': {
    position: 'relative',
    minHeight: '400px',
  },
  '.slick-slide > *': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0,0,0,0.75)',
  },
  '.slick-slide > div': {
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

const Slide =()=>{
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    adaptiveHeight: true,
  };
    return(
        <>
         <Slider {...settings} className="slick-container" style={sliderStyles}>
      {slides.map((slide) => (
        <div key={slide.imageUrl}>
          <div
            className="slick-slide"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          >
            <h2>{slide.text}</h2>
          </div>
        </div>
      ))}
    </Slider>
        
        </>
    )
}
export default Slide