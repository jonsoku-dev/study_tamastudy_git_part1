import React from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

/*

*/

const Sample01 = () => (
    <div style={{ height: 500}}>
        <Calendar
            events={[
                {
                    title: "work",
                    allDay: false,
                    start: new Date(2019, 1, 20, 10, 0),
                    end: new Date(2019, 1, 20, 10, 30)
                },
                {
                    title: "leave",
                    allDay: false,
                    start: new Date(2019, 1, 20, 17, 30),
                    end: new Date(2019, 1, 20, 17, 40)
                }
            ]}
            step={60}
            view="month"
            views={["month"]}
            min={new Date(2008, 0, 1, 8, 0)}
            max={new Date(2008, 0, 1, 17, 0)}
            date={new Date(2019, 1, 20)}
            localizer={localizer}
        />
    </div>
);

export default Sample01;