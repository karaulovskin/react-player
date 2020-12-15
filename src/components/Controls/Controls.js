import React, {Component} from 'react';
import s from './Controls.module.css';
import track from "../../hoc/Player/audio/Mathame.mp3";

const audio = new Audio();
audio.src = track;

class Controls extends Component {
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

        const btnPlayClass = [s.BtnPlay];
        if (play) {
            btnPlayClass.push(s.play);
        }

        return (
            <div className={s.root}>
                <button
                    className={s.BtnBack}
                >
                    Назад
                </button>
                <button
                    className={btnPlayClass.join(' ')}
                    onClick={this.onPlay}
                >
                    Воспроизвести
                </button>
                <button
                    className={s.BtnNext}
                >
                    Вперед
                </button>
            </div>
        )
    }
}

export default Controls