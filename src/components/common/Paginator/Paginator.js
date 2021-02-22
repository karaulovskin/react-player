import React  from 'react';
import s from "./Paginator.module.scss";

const Paginator = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageCount);
    const pages = [];

    for (let i=1; i <= pagesCount; i++ ) {
        pages.push(i);
    }

    return (
        <div className={s.root}>
            <div className={s.pagination}>
                { pages.map( page => {
                    return (
                        <span
                            key={ page }
                            className={ props.currentPage === page && s.activePage }
                            onClick={ () => { props.onChangePage(page) }}
                        >
                            {page}
                        </span>
                    )
                }) }
            </div>
        </div>
    )
}

export default Paginator;