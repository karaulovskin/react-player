import React, {Component} from 'react';
import classes from './Layout.module.css';
import Player from '../Player/Player';
import Controls from "../../components/Controls/Controls";

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <main>
                    <Controls>
                    </Controls>
                </main>
            </div>
        )
    }
}

export default Layout