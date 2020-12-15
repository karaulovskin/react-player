import  React, {Component} from 'react';
import s from './Timeline.module.css';

class Timeline extends Component {
    render() {
        return (
            <div className={s.root}>
                <div className={s.time}>
                    <div className={s.passed}>
                        0:00
                    </div>
                    <div className={s.duration}>
                        6:22
                    </div>
                </div>
                <div className={s.progress}>
                    <div className={s.progressBg}></div>
                    <div className={s.progressBar}></div>
                </div>
            </div>
        )
    }
}

export default Timeline