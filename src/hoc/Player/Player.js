import React, {Component} from 'react';
import classes from '../Player/Player.module.css';

class Player extends Component {
    render() {
        return (
            <div className={classes.Player}>
                <audio
                    src="audio/Mathame.mp3"
                    controls
                    autoPlay
                />
            </div>
        )
    }
}

export default Player