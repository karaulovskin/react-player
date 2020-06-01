import React, {Component} from 'react';
import classes from './Controls.module.css';

class Controls extends Component {
    render() {
        return (
            <div className={classes.Controls}>
                <button
                    className={classes.BtnBack}
                >
                    Назад
                </button>
                <button
                    className={classes.BtnPlay}
                >
                    Воспроизвести
                </button>
                <button
                    className={classes.BtnNext}
                >
                    Вперед
                </button>
            </div>
        )
    }
}

export default Controls