import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import openaiImage from '../openai.png'; // Adjust the path as needed


function Projects() {
  const imageData = [
    {
      id: 1,
      title: 'OpenAI Integrated Chatbot',
      image: openaiImage,
    },
    {
      id: 2,
      title: 'Project Title 2',
      image: openaiImage,
    },
    {
      id: 3,
      title: 'Project Title 3',
      image: openaiImage,
    },
    {
      id: 3,
      title: 'Project Title 3',
      image: openaiImage,
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      style={{ color: 'white', margin: '10% 5%', height: '40vw' }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {imageData.map((item) => (
        <SwiperSlide key={item.id} style={{ backgroundImage: `url(${item.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
          <div className='slide-content'>
            <p className='project-title'>{item.title}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Projects;
