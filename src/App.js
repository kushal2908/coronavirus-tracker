import Total from "./Pages/Total/index";
import Daily from "./Pages/Daily/Index";
import DeathTimeline from "./Pages/Timeline/Deaths/Index";
import ConfirmTimeline from "./Pages/Timeline/Confirm/Index";
import About from "./Pages/About/Index";

function App() {
  return (
    <div>
      <div className="container" style={{ maxWidth: "920px", marginTop: "30px" }}>
        <h2 className="display-4 text-center" style={{ color: "#ecf0f1" }}>
          Covid-19 Tracker
        </h2>
        <h2 className="display-5 text-center" style={{ color: "#f39c12" }}>
          Bangladesh
        </h2>
        <Daily />
        <Total />

        {/* <DeathTimeline />
        <ConfirmTimeline /> */}
        <About />
      </div>
    </div>
  );
}

export default App;
