import  React, {Component} from 'react';
import classes from './Timeline.module.css';

class Timeline extends Component {
    render() {
        return (
            <div className={classes.Timeline}>
                <div className={classes.Timeline__Time}>
                    <div className={classes.Timeline__Passed}>
                        0:00
                    </div>
                    <div className={classes.Timeline__Duration}>
                        6:22
                    </div>
                </div>
                <div className={classes.Timeline__Progress}>
                    <div className={classes.Timeline__ProgressBg}></div>
                    <div className={classes.Timeline__ProgressBar}></div>
                </div>
            </div>
        )
    }
}

export default Timeline