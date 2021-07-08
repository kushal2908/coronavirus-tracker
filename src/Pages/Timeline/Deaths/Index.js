import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Index() {
  //states

  const [dates, setDates] = useState([]);
  const [values, setValues] = useState([]);

  const fetchData = () => {
    axios
      .get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/20?source=jhu&timelines=true")
      .then((res) => {
        // console.log(res.data.location.timelines.deaths.timeline);
        // let d = moment(res.data.location.timelines.deaths.timeline).format("L");
        setDates(res.data.location.timelines.deaths.timeline);
      })
      .catch((e) => console.log(e));
  };

  console.log(typeof dates);
  useEffect(() => {
    fetchData();
  }, []);

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div>
      <div className="timeline__heading mb-3">
        <h5 className="mb-0">Deaths Timeline</h5>
      </div>
      <div className="my-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart width={100} height={600} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid vertical={false} style={{ opacity: 0.05 }} />
            <Tooltip className="tooltip" />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={0.9} fill="url(#colorUv)" />
            {/* <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> */}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
