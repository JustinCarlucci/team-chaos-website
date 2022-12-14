import React from 'react';
import './carousel.css';
require('../../assets/chaosteam0.png');

const Carousel = () => {
    return (
        <div class="chaos__carousel-wrapper">
            <span id="item-1"></span>
            <span id="item-2"></span>
            <span id="item-3"></span>
            <span id="item-4"></span>
            <span id="item-5"></span>
            <span id="item-6"></span>
            <div class="chaos__carousel-item item-1">
                <a class="arrow arrow-prev" href="#item-6"></a>
                <a class="arrow arrow-next" href="#item-2"></a>
            </div>
            <div class="chaos__carousel-item item-2">
                <a class="arrow arrow-prev" href="#item-1"></a>
                <a class="arrow arrow-next" href="#item-3"></a>
            </div>
            <div class="chaos__carousel-item item-3">
                <a class="arrow arrow-prev" href="#item-2"></a>
                <a class="arrow arrow-next" href="#item-4"></a>
            </div>
            <div class="chaos__carousel-item item-4">
                <a class="arrow arrow-prev" href="#item-3"></a>
                <a class="arrow arrow-next" href="#item-5"></a>
            </div>
            <div class="chaos__carousel-item item-5">
                <a class="arrow arrow-prev" href="#item-4"></a>
                <a class="arrow arrow-next" href="#item-6"></a>
            </div>
            <div class="chaos__carousel-item item-6">
                <a class="arrow arrow-prev" href="#item-5"></a>
                <a class="arrow arrow-next" href="#item-1"></a>
            </div>
        </div>
  )
};

export default Carousel;