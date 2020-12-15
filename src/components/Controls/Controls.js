import React, {Component} from 'react';
import s from './Controls.module.css';

class Controls extends Component {

    onPlayClick = () => {
        this.props.onPlay();
    }

    render() {
        const play = this.props.play;

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
                    onClick={this.onPlayClick}
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