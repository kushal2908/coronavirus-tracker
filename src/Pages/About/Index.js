import React from "react";

function Index() {
  return (
    <div>
      <div className="container my-5">
        <hr />
        <div>
          <div className="row">
            <div className="col-md-7 about_links">
              <div className="mb-3">
                <h5 className="mb-0"> About </h5>
              </div>
              <p>
                <a target="_blank" href="https://github.com/kushal2908/coronavirus-tracker">
                  Covid-19 tracker
                </a>{" "}
                {""}
                This is a personal project of{" "}
                <a target="_blank" href="https://github.com/kushal2908">
                  Sarder Safa Bin Salam Kushal
                </a>
                . This is an open source project. This project only shows the data of Bangladesh. The data visualuzation is under
                development along with global data and case search. Api {""}
                <a target="_blank" href="https://coronavirus-tracker-api.herokuapp.com/">
                  link
                </a>
              </p>
            </div>
            <div className="col-md-5 about_links">
              <div className="mb-3">
                <h5 className="mb-0"> Data Source </h5>
              </div>
              <p>
                Worldwide Data repository operated by the{" "}
                <a target="_blank" href="https://github.com/CSSEGISandData/COVID-19">
                  {" "}
                  Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE).
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
