import React, {Component} from "react";
import s from "../Player/Player.module.css";
import track from "../Player/audio/Mathame.mp3";
import Timeline from "../../components/Timeline/Timeline";
import Controls from "../../components/Controls/Controls";

const audio = new Audio();
audio.src = track;

class Player extends Component {
    state = {
        play: false,
    }

    onPlay = () => {
        this.setState(({ play }) => {
            return {
                play: !play
            }
        });
        if (!this.state.play) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    render() {
        const { play } = this.state;

        return (
            <div className={s.root}>
                <Timeline />
                <Controls
                    play={play}
                    onPlay={this.onPlay}
                />
            </div>
        )
    }
}

export default Player