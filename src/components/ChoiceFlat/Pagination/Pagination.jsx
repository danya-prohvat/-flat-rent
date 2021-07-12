import React from 'react';
import styles from "./Pagination.module.css";
import classNames from 'classnames';
import prevArrow from '../../../assets/prevArrow.svg';
import nextArrow from '../../../assets/nextArrow.svg';


const Pagination = (props) => {

    const createPaginationItems = () => {

        let paginationItems = [];
        let totalPages = Math.ceil(props.totalItemCount / props.pageSize);

        if (props.activePage < 7)
            for (let i = 1; i < props.activePage; i++) paginationItems.push(createLi(i));
        else {
            paginationItems.push(createLi(1));
            paginationItems.push(createLi());
            for (let i = props.activePage - 3; i < props.activePage; i++) paginationItems.push(createLi(i));
        }

        for (let i = props.activePage; i < props.activePage + 5 && i <= totalPages; i++) paginationItems.push(createLi(i));

        if (totalPages - props.activePage > 4) {
            paginationItems[paginationItems.length - 1] = createLi();
            paginationItems.push(createLi(totalPages));
        }

        function createLi(ind) {
            return ind ? <li
                    className={classNames(styles.pagination__li, {[styles.pagination__li_active]: ind === props.activePage})}
                    id={'paginatorItem' + ind} key={ind}
                    onClick={paginationItemOnClick}>{ind}</li>
                : <li className={classNames(styles.pagination__li)}>...</li>;
        }

        return paginationItems;
    }

    const paginationItemOnClick = event => props.setActivePageCreator(+event.target.id.replace('paginatorItem', ''));

    const arrowOnClick = event => {
        if (event.target.id === 'nextArrow') props.setActivePageCreator(props.activePage + 1);
        else if (event.target.id === 'prevArrow') props.setActivePageCreator(props.activePage - 1);
    }

    return (<div className={classNames(styles.pagination)}>
        <div className={classNames(styles.pagination__container)}>
            <img className={classNames(styles.prevArrow, styles.arrow)} id='prevArrow' onClick={arrowOnClick}
                 src={prevArrow} alt=""/>

            <ul className={classNames(styles.pagination__ul)}>{createPaginationItems()}</ul>

            <img className={classNames(styles.nextArrow, styles.arrow)} id='nextArrow' onClick={arrowOnClick}
                 src={nextArrow} alt=""/>
        </div>
    </div>);
}


export default Pagination;