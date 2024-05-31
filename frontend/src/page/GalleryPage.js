import React, { useEffect, useRef } from 'react';
import './GalleryPage.css';
import $ from 'jquery';
import 'slick-carousel';

const GalleryPage = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const initializeSlider = () => {
      if (sliderRef.current) {
        $(sliderRef.current).slick({
          arrows: true,
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          draggable: false
        });

        $(sliderRef.current)
          .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $('.slick-list').addClass('do-transition');
          })
          .on('afterChange', function(){
            $('.slick-list').removeClass('do-transition');
          });
      }
    };

    requestAnimationFrame(initializeSlider);
  }, []);

  return (
    <div>
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
        width="0" height="0" viewBox="0 0 1366 768" xmlSpace="preserve">
        <defs>
          <filter id="blur0">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
          </filter>
          <filter id="blur1">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5 0" />
          </filter>
          <filter id="blur2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12 0" />
          </filter>
          <filter id="blur3">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20 0" />
          </filter>
          <filter id="blur4">
            <feGaussianBlur in="SourceGraphic" stdDeviation="35 1" />
          </filter>
          <filter id="blur5">
            <feGaussianBlur in="SourceGraphic" stdDeviation="50 1" />
          </filter>
        </defs>
      </svg>

      <div className="slider" ref={sliderRef}>
        <div>
          <img src="https://images.unsplash.com/photo-1446770145316-10a05382c470?dpr=1&auto=format&fit=crop&w=900&h=450&q=80&cs=tinysrgb&crop=" alt="" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1455717974081-0436a066bb96?dpr=1&auto=format&fit=crop&w=900&h=450&q=80&cs=tinysrgb&crop=" alt="" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1477420086945-b99c643e8a3d?dpr=1&auto=format&fit=crop&w=900&h=450&q=80&cs=tinysrgb&crop=" alt="" />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
