import './css/Homepage.css';
import logo from './img/kkcf.jpg'

function App() {
  return (
    <div style={{ height: '100vh' }}>
      <div id="homePageHeader" className='header'>
        <div id="logo">
          <div style={{ width: 100 }}><img width={"100%"} src={logo} /></div>
          <h3>KKCF GMI, INC <br /> Doha, State of Qatar </h3>
        </div>
        <div style={{ marginLeft: '25%', height: '100%' }} id="title"><h1>CASH REPORTING SYSTEM</h1></div>
      </div>
      <div id="subSectionDivider" style={{ height: '10%' }}></div>
      <div id="subSection" style={{ width: '100%' }}>
        <div className="sectionContainer">
          <div id="entriesSection" className="section">
            <h3 className='subHeader'>Entries: </h3>
            <button className='button'>Cash Count (Tithes/Offering)</button><br />
            <button className='button'>Transaction Entry</button><br />
            <button className='button'>Create/Edit Budget</button><br />
          </div>
        </div>
        <div className="sectionContainer">
          <div id="reportsSection" className="section">
            <h3 className='subHeader'>Reports:</h3>
            <button className='button'>Filtered Report</button><br />
            <button className='button'>Budget Report</button><br />
            <button className='button'>Open Advances</button><br />
            <button className='button'>Closed Advances</button><br />
            <button className='button'>Cash Flow Report</button><br />
            <button className='button'>Cash Balance</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
