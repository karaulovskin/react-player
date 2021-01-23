import React, { Component } from 'react';
import * as axios from 'axios';
import avatar from '../../images/user.png';
import s from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageCount}`)
            .then(respons => {
                this.props.setUsers(respons.data.items);
                this.props.setTotalUsersCount(respons.data.totalCount);
            });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageCount}`)
            .then(respons => {
                this.props.setUsers(respons.data.items);
            });
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageCount);
        const pages = [];

        for (let i=1; i <= pagesCount; i++ ) {
            pages.push(i);
        }

        return (
            <div className={s.root}>
                <div className={s.list}>
                    { this.props.users.map( (user) => {
                        return (
                            <div className={s.item} key={user.id}>
                                <div>
                                    <img
                                        src={
                                            user.photos.small != null
                                                ? user.photos.small
                                                : avatar
                                        }
                                        alt=""
                                    />
                                </div>
                                <div>
                                    {user.name}
                                </div>
                                <div>
                                    {
                                        user.followed
                                            ? <button onClick={() => {
                                                this.props.unfollow(user.id)
                                            }}>unfollow</button>
                                            : <button onClick={() => {
                                                this.props.follow(user.id)
                                            }}>follow</button>
                                    }
                                </div>
                            </div>
                        )
                    }) }
                </div>

                <div className={s.pagination}>
                    { pages.map( page => {
                        return (
                            <span
                                className={this.props.currentPage === page && s.activePage}
                                onClick={ () => {
                                    this.onChangePage(page);
                                }}
                            >
                                {page}
                            </span>
                        )
                    }) }
                </div>
            </div>
        )
    }
}

export default Users;