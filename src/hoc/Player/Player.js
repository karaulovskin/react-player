import React, {Component} from "react";
import s from "../Player/Player.module.css";
// import track from "../Player/audio/Mathame.mp3";
import Timeline from "../../components/Timeline/Timeline";
import Controls from "../../components/Controls/Controls";

// const audio = new Audio();
// audio.src = track;

class Player extends Component {

    componentDidMount() {
        // console.log(audio);
        // audio.play();
    }

    render() {
        return (
            <div className={s.root}>
                <Timeline />
                <Controls />
            </div>
        )
    }
}

export default Player