import './Residencies.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import data from '../../utils/slider.json';
import { sliderSetting } from '../../utils/common';
import { useState } from 'react';

const Residencies = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    
    const goToNext = () => {
        if (swiperRef) {
            swiperRef.slideNext();
        }
    };

    const goToPrev = () => {
        if (swiperRef) {
            swiperRef.slidePrev();
        }
    };

    return (
        <section className="r-Wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>
                        Best Choices
                    </span>
                    <span className='primaryText'>
                        Popular Residencies
                    </span>
                </div>
                <Swiper {...sliderSetting} onSwiper={setSwiperRef}>
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="r-card">
                                <img src={card.image} alt="home" />
                                <div className="price-wrapper">
                                    <span>$</span>
                                    <span className=" r-price">
                                        {card.price}
                                    </span>
                                </div>
                                <div className="desc">
                                <span className='primaryText'>{card.name}</span>
                                <span className=' r-detail'>{card.detail}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="navigation-buttons">
                    <button className="nav-button" onClick={goToPrev}>&lt;</button>
                    <button className="nav-button" onClick={goToNext}>&gt;</button>
                </div>
                <div className="dots-indicator">
                    {data.map((_, index) => (
                        <span key={index} className={`dot ${index === 0 ? 'active' : ''}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Residencies;
