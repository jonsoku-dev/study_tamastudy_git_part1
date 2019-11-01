import React from "react";
import {Calendar, momentLocalizer, Views} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k=>Views[k])
console.log(allViews);

/*

*/

const Sample01 = () => (
    <div style={{ height: 500}}>
        <Calendar
            events={[
                {
                    title: "work",
                    allDay: true,
                    start: new Date(2019, 1, 20, 10, 0),
                    end: new Date(2019, 1, 20, 10, 30)
                },
                {
                    title: "leave",
                    allDay: false,
                    start: new Date(2019, 1, 21, 17, 30),
                    end: new Date(2019, 1, 21, 17, 40)
                }
            ]}
            step={60}
            view="month"//current view of the month
            //views={["month","week","work_week","day"]}
            views={[allViews[0], allViews[1],allViews[3]]}            
            min={new Date(2008, 0, 1, 8, 0)}//minimum time of the day and week views
            max={new Date(2020, 0, 17, 0, 0)}//maximum time of day and week views
            //date={new Date(2019, 1, 20)}
            localizer={localizer}
        />
    </div>
);

export default Sample01;