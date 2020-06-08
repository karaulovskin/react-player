import React, {Component} from "react";
import classes from "../Player/Player.module.css";
import audio from "../Player/audio/Mathame.mp3";
import Timeline from "../../components/Timeline/Timeline";
import Controls from "../../components/Controls/Controls";

class Player extends Component {
    render() {
        return (
            <div className={classes.Player}>
                <audio
                    src={audio}
                    controls
                />
                <Timeline />
                <Controls />
            </div>
        )
    }
}

export default Player