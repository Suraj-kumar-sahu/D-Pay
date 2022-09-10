import Navbar from "./components/Navbar";
// import Services from "./components/Services";
import Welcome from "./components/Welcome";
import "./app.scss" ;
import "./style.scss" ;
// import Transactions from "./components/Transactions";


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Welcome/>
        {/* <Services/> */}
        {/* <Transactions/> */}
      </div>
    </div>
  );
}

export default App;
