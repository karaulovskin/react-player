import React, {useState}  from 'react';
import s from "./Paginator.module.scss";

const Paginator = ({portionSize = 10, pageCount, totalItemsCount,  ...props}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageCount);
    const pages = [];

    for (let i=1; i <= pagesCount; i++ ) {
        pages.push(i);
    }
    const portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const onPrev = () => {
        setPortionNumber(portionNumber - 1)
    }

    const onNext = () => {
        setPortionNumber(portionNumber + 1)
    }

    return (
        <div className={s.root}>
            <div className={s.pagination}>
                <button onClick={onPrev}>Prev</button>
                {/*{*/}
                {/*    portionNumber > 1 &&*/}
                {/*    <button onClick={onPrev}>Prev</button>*/}
                {/*}*/}
                {
                    pages
                        .filter( page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                        .map( page => {
                        return (
                            <span
                                key={ page }
                                className={ props.currentPage === page && s.activePage }
                                onClick={ () => { props.onChangePage(page) }}
                            >
                                {page}
                            </span>
                        )
                    })
                }
                {/*{*/}
                {/*    portionCount > portionNumber &&*/}
                {/*    <button onClick={onNext}>Next</button>*/}
                {/*}*/}
                <button onClick={onNext}>Next</button>
            </div>
        </div>
    )
}

export default Paginator;