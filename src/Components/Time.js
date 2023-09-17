import React, {Component} from 'react';
import clock from "../img/clock.png";
import MonthNameDisplay from "./MonthNameDisplay";
import Moment from 'react-moment';

class Time extends Component {
    render() {
        let date = new Date();

        return (
            <div className="header_date" id="header_date">
                <p className="text_date">
                    <Moment format="DD" local></Moment><> </>
                    {MonthNameDisplay(date.getMonth())},<> </>
                    <Moment format="YYYY" local></Moment>
                </p>
                <img className="clock" src={clock} alt=""/>
                <Moment format="hh:mm" interval={1000} local></Moment>
            </div>
        )
    }
}

export default Time;
