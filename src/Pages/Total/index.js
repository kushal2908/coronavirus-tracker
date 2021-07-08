import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export default function Index() {
  //States
  const [death, setDeath] = useState("");
  const [recover, setRecover] = useState("");
  const [confirm, setConfirm] = useState("");
  const [date, setdate] = useState("");

  const fetchData = () => {
    axios
      .get("https://covid19.mathdro.id/api/countries/bangladesh")
      .then((res) => {
        // setLoading(true);
        setDeath(res.data.deaths.value);
        setRecover(res.data.recovered.value);
        setConfirm(res.data.confirmed.value);
        let d = moment(res.data.lastUpdate).format("LLL");
        setdate(d);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="stat__heading mb-3">
          <h2 className="mb-0 ">Total</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow" style={{ borderBottom: "10px solid #ff4757" }}>
              <div className="card-body text-center">
                <h2 style={{ color: "#ff4757" }}>{death.toLocaleString("en-IN")}</h2>
                <h5>Deaths</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow" style={{ borderBottom: "10px solid #ffa502" }}>
              <div className="card-body text-center">
                <h2 style={{ color: "#ffa502" }}>{confirm.toLocaleString("en-IN")}</h2>
                <h5>Confirm</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow" style={{ borderBottom: "10px solid #2ed573" }}>
              <div className="card-body text-center">
                <h2 style={{ color: "#2ed573" }}>{recover.toLocaleString("en-IN")}</h2>
                <h5> Recovered</h5>
              </div>
            </div>
          </div>
          <p>Last Update: {date}</p>
        </div>
      </div>
    </div>
  );
}
