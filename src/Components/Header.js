import React from "react";
import { format } from "date-fns";
import "./style.css";


function Header(props) {

    const dateFormat = "MMMM Y";

    return (
      <div className="header row flex-middle">
        <div className="column col-start">
          <div className="icon" onClick={props.onClick.MonthMinusOne}>
            chevron_left
          </div>
        </div>
        <div className="column col-center">
          <span>{format(props.currentDate, dateFormat)}</span>
        </div>
        <div className="column col-end">
          <div className="icon" onClick={props.onClick.MonthPlusOne}>
            chevron_right
          </div>
        </div>
        <div className="headerButtonDiv">
          <button>Month</button>
          <button>Week</button>
          <button>Day</button>
        </div>
      </div>
    );
    }

export default Header;



 // const nextMonth = () => {
  //   setCurrentDate(addMonths(currentDate, 1));
  // };
  // const prevMonth = () => {
  //   setCurrentDate(subMonths(currentDate, 1));
  // };

  