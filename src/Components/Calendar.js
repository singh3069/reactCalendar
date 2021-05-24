import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import Header from "./Header";
import NameOfWeeks from './NameOfWeeks';
import DatesCell from "./DatesCell";

function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
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
        <DatesCell currentDate={currentDate}/>
        </div>
    );
    }

export default Calendar;



