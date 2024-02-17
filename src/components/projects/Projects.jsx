import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './projects.css'

// Sample data for the carousels
const products = [
  { name: "Product 1", image: "https://images.pexels.com/photos/2907034/pexels-photo-2907034.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Product 2", image: "https://images.pexels.com/photos/1390602/pexels-photo-1390602.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Product 3", image: "https://images.pexels.com/photos/12513869/pexels-photo-12513869.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Product 4", image: "https://images.pexels.com/photos/4244305/pexels-photo-4244305.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Product 5", image: "https://images.pexels.com/photos/1750776/pexels-photo-1750776.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Product 6", image: "https://images.pexels.com/photos/1805412/pexels-photo-1805412.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Product 7", image: "https://images.pexels.com/photos/1187954/pexels-photo-1187954.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Product 8", image: "https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&w=400" },
  // Add more products as neede
];

const categories = [
  { name: "Bagpacks", image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Handbags", image: "https://images.pexels.com/photos/1039518/pexels-photo-1039518.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Shirts", image: "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "T-Shirts", image: "https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Women Jeans", image: "https://images.pexels.com/photos/13726657/pexels-photo-13726657.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Men Jeans", image: "https://images.pexels.com/photos/14718761/pexels-photo-14718761.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Sneakers", image: "https://images.pexels.com/photos/3490360/pexels-photo-3490360.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Sports Shoes", image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { name: "Kids Clothings", image: "https://images.pexels.com/photos/10412487/pexels-photo-10412487.jpeg?auto=compress&cs=tinysrgb&w=400" },
  // Add more categories as needed
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const CarouselComponent = ({ items }) => (
  <Carousel
    responsive={responsive}
    swipeable={true}
    draggable={true}
    showDots={true}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={200}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  >
    {items.map((item, index) => (
      <div key={index} style={{ padding: 10 }}>
        <img src={item.image} alt={item.name} style={{ width: "100%", height: "auto" }} loading='lazy' />
        <p>{item.name}</p>
      </div>
    ))}
  </Carousel>
);

const Projects = () => (
  <div className="landing-page">
    <h1 style={{ textAlign: 'center' }}>Welcome to SuperCoolShop</h1>
    <h2 className='landing-title'>Featured Products</h2>
    <CarouselComponent items={products} />
    <h2 className='landing-title'>Shop by Category</h2>
    <CarouselComponent items={categories} />
  </div>
);

export default Projects;