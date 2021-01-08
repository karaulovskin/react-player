import React, {Component} from "react";
import Timeline from "../Timeline/Timeline";
import Controls from "../Controls/Controls";

import track from "./audio/Mathame.mp3";
import s from "./Player.module.css";

const audio = new Audio();
audio.src = track;

class Player extends Component {
    state = {
        play: false,
        startTime: '0:00',
        durationTime: '0:00',
    }

    onPlay = () => {
        this.setState(({ play }) => {
            return {
                play: !play
            }
        });

        !this.state.play ? audio.play() : audio.pause();
    }

    onСalculatTime = () => {
        const duration = audio.duration;
        const currentTime  = audio.currentTime;
        const elapsedTime = duration - currentTime;
        const minuteTime = Math.floor(elapsedTime / 60);
        const secondTime = Math.floor(elapsedTime % 60);
        const stringTime = `${minuteTime} : ${secondTime}`;

        return stringTime
    }

    render() {
        const { play, startTime, durationTime } = this.state;

        return (
            <div className={s.root}>
                <div className="container">
                    <Timeline
                        startTime={startTime}
                        durationTime={durationTime}
                    />
                    <Controls
                        play={play}
                        onPlay={this.onPlay}
                    />
                </div>
            </div>
        )
    }
}

export default Player