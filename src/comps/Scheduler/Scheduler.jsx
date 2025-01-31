import { useEffect, useRef } from "react";
import { Scheduler } from "@dhx/trial-scheduler";
import "@dhx/trial-scheduler/codebase/dhtmlxscheduler.css";

export default function SchedulerView() {
  let container = useRef();
  useEffect(() => {
    let scheduler = Scheduler.getSchedulerInstance();
    scheduler.skin = "terrace";
    scheduler.config.header = [
      "day",
      "week",
      "month",
      "date",
      "prev",
      "today",
      "next",
    ];

    scheduler.init(container.current, new Date(2024, 5, 10));
    return () => {
      scheduler.destructor();
      container.current.innerHTML = "";
    };
  }, []);

  return <div ref={container} className="w-[100%] h-[100%]"></div>;
}
