import  React, {Component} from 'react';
import s from './Timeline.module.css';

class Timeline extends Component {
    render() {
        const { startTime, durationTime } = this.props;

        return (
            <div className={s.root}>
                <div className={s.time}>
                    <div className={s.passed}>
                        {startTime}
                    </div>
                    <div className={s.duration}>
                        {durationTime}
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