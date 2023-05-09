import './css/Homepage.css';
import logo from  './img/kkcf.jpg'

function App() {
  return (
    <div>
      <div id="homePageHeader" className='header'>
        <div id="logo">
          <div style={{ width: 100 }}><img width={"100%"}src={logo}/></div>
          <h3>KKCF GMI, INC <br /> Doha, State of Qatar </h3>
          </div>
        <div id="title"><h1>CASH REPORTING SYSTEM</h1></div>
      </div>
      <div id="entriesSection">
        <h3>Entries</h3>
        <button>Cash Count (Tithes/Offering)</button><br/>
        <button>Transaction Entry</button><br/>
        <button>Create/Edit Budget</button><br/>
      </div>
      <div id="reportsSection">
        <h3>Reports:</h3>
        <button>Filtered Report</button><br/>
        <button>Budget Report</button><br/>
        <button>Open Advances</button><br/>
        <button>Closed Advances</button><br/>
        <button>Cash Flow Report</button><br/>
        <button>Cash Balance</button>
      </div>
    </div>
  );
}

export default App;
