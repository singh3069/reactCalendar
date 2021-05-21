import { startOfWeek, addDays, format } from "date-fns";
import "./style.css";



function NameOfWeeks(props) {
    const dateFormat = "EEE";
    const days = [];
    let startDate = startOfWeek(props.currentDate);

        for (let i = 0; i < 7; i++) {
        days.push(
        <div className="column col-center singleWeekCell" key={i}>
        {format(addDays(startDate, i), dateFormat)}
        </div>
        );
   }


    return (
        <div className="daysName row">
            {days}
        </div>
    )

}
export default NameOfWeeks


// import { useState } from "react";
// import React, {useState} from 'react'

// const [currentDate, setCurrentDate] = useState(new Date());
    // const nextMonth = () => {
    //   setCurrentDate(addMonths(currentDate, 1));
    // };
    // const prevMonth = () => {
    //   setCurrentDate(subMonths(currentDate, 1));
    // };