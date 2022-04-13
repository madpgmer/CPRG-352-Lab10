
import './App.css';
import Education from './Education';
import Header from './Header';
import TechnologySummary from './TechnologySummary';
import WorkExperience from './WorkExperience';


function App() {
  return (
    <>
    <div className="App">
        <Header/>  
    <main className="container">
      <div className="row mt-3"> 
        <div className="col-md">
          <WorkExperience/>
        </div>
        <div className="col-md">
          <Education/>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md mb-5">
          <TechnologySummary/>  
        </div>       
      </div>      
    </main>
    </div>
    </>
  );
}

export default App;
