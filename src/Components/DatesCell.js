import React, { useState } from "react";
import "./style.css";


import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  isSameMonth,
  isSameDay,
  addDays,
  toDate
} from "date-fns";

function DatesCell(props) {
        const [selectedDate, setSelectedDate] = useState(new Date());

        const monthStart = startOfMonth(props.currentDate);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        const onDateClick = (day) => {
        setSelectedDate(day);
    };
        while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            days.push(
            <div
                className={`column cell  ${
                !isSameMonth(day, monthStart) ? "disabled" : isSameDay(day, selectedDate)  ? "selected" : ""
                }`}
                key={day}
                onClick={() => onDateClick(toDate(cloneDay))}
            >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
            </div>
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
            {days}
            </div>
        );
        days = [];
        }

        return (<div className="boody">
            {rows}
            </div>
        );
}

export default DatesCell
