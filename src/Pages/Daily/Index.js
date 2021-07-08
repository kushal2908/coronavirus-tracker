import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export default function Index() {
  //States
  const [death, setDeath] = useState("");
  const [prevDeath, setPrevDeath] = useState("");
  const [recover, setRecover] = useState("");
  const [prevRecover, setPrevRecover] = useState("");
  const [confirm, setConfirm] = useState("");
  const [prevConfirm, setPrevConfirm] = useState("");

  const fetchData = () => {
    axios
      .get("https://covid19.mathdro.id/api/countries/bangladesh")
      .then((res) => {
        // setLoading(true);
        setDeath(res.data.deaths.value);
        setRecover(res.data.recovered.value);
        setConfirm(res.data.confirmed.value);
      })
      .catch((e) => console.log(e));
  };

  const fetchPrevData = () => {
    axios
      .get("https://coronavirus-tracker-api.herokuapp.com/v2/locations/20?source=jhu&timelines=true")
      .then((res) => {
        console.log(res.data.location.latest);
        setPrevDeath(res.data.location.latest.deaths);
        setPrevRecover(res.data.location.latest.recovered);
        setPrevConfirm(res.data.location.latest.confirmed);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchData();
    fetchPrevData();
  }, []);
  return (
    <div>
      <div className="container mt-4">
        <div className="stat__heading mb-3">
          <h2 className="mb-0">Today</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow" style={{ borderLeft: "10px solid #ff4757" }}>
              <div className="card-body text-center">
                <h2 style={{ color: "#ff4757" }}>{(death - prevDeath).toLocaleString("en-IN")}</h2>
                <h5>Deaths</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow" style={{ borderLeft: "10px solid #ffa502" }}>
              <div className="card-body text-center">
                <h2 style={{ color: "#ffa502" }}>{(confirm - prevConfirm).toLocaleString("en-IN")}</h2>
                <h5>Confirm</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow" style={{ borderLeft: "10px solid #2ed573" }}>
              <div className="card-body text-center">
                <h2 style={{ color: "#2ed573" }}>{(recover - prevRecover).toLocaleString("en-IN")}</h2>
                <h5> Recovered</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
