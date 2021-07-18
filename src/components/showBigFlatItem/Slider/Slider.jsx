import React, {useState} from 'react';
import styles from "./Slider.module.css";
import classNames from 'classnames';
import nextArrow from '../../../assets/nextSliderArrow.svg';
import prevArrow from '../../../assets/prevSliderArrow.svg';


const Slider = (props) => {

    let [currentImg, setCurrentImg] = useState(0);

    const prevArrowOnClick = () => {
        if (currentImg > 0) setCurrentImg(--currentImg);
    }
    const nextArrowOnClick = () => {
        if (currentImg < props.imgs.length - 1) setCurrentImg(++currentImg);
    }

    const sliderPaginationOnClick = event => setCurrentImg(+event.target.id)

    const sliderPagination = props.imgs.map((el, ind) => <li onClick={sliderPaginationOnClick} className={classNames(styles.sliderPagination__li, {[styles.sliderPagination__li_active]: currentImg === ind})} key={ind} id={ind}></li>);


    return (<div className={classNames(styles.slider)}>
        <img onClick={prevArrowOnClick} className={classNames(styles.arrows, styles.arrows__prev)} src={prevArrow}
             alt=""/>

        <img className={classNames(styles.img)} src={'./flatImages/' + props.imgs[currentImg]} alt=""/>

        <img onClick={nextArrowOnClick} className={classNames(styles.arrows, styles.arrows__next)} src={nextArrow}
             alt=""/>
             <div className={classNames(styles.photoNumber)}>
                 <p>Фото: {1 + currentImg} з {props.imgs.length}</p>
             </div>
        <ul className={classNames(styles.sliderPagination)}>
            {sliderPagination}
        </ul>
    </div>);
}


export default Slider;
