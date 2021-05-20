import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import Header from "./Header";
import "../App.css";
import NameOfWeeks from './NameOfWeeks';

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    // const [selectedDate, setSelectedDate] = useState(new Date());

    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    };

    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    };

    const monthAndYearChanger = {
        MonthPlusOne: nextMonth,
        MonthMinusOne: prevMonth,
    };

    return (
        <div>
        <Header currentDate={currentDate} onClick={monthAndYearChanger} />
        <NameOfWeeks currentDate={currentDate} />
        </div>
    );
    }

export default Calendar;
