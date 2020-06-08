import React, {Component} from 'react';
import classes from './Layout.module.css';
import Player from '../Player/Player';

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <main>
                    <Player />
                </main>
            </div>
        )
    }
}

export default Layout