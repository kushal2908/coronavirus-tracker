import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Index() {
  //states

  const [all, setAll] = useState([]);
  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);

  const fetchData = () => {
    axios
      .get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/20?source=jhu&timelines=true")
      .then((res) => {
        setAll(res.data.location.timelines.deaths.timeline);
        const death = Object.values(res.data.location.timelines.deaths.timeline).map((d) => setValues(d));
        // setValues(Object.values(res.data.location.timelines.deaths.timeline));

        const dates = Object.keys(res.data.location.timelines.deaths.timeline).map((d) => setDates(d));
        // setDates(Object.keys(res.data.location.timelines.deaths.timeline));
      })

      .catch((e) => console.log(e));
  };

  // values.map((d) => console.log(d));
  // dates.map((d) => console.log(d));
  // console.log(dates);

  useEffect(() => {
    fetchData();
  }, []);

  const data = [];
  return (
    <div>
      <div className="timeline__heading mb-3">
        <h5 className="mb-0">Deaths Timeline</h5>
      </div>
      <div className="my-4">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart width={100} height={800} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid vertical={false} style={{ opacity: 0.05 }} />
            <Tooltip className="tooltip" />
            <Area type="monotone" dataKey="values" stroke="#8884d8" fillOpacity={0.9} fill="url(#colorUv)" />
            {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
