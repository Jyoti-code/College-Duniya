// import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import StudyGoal from './components/StudyGoal';
import Programs from './components/Programs';
import Notification from './components/Notification';
import CollegeRankingTable from './components/CollegeRankingTable ';
import TopCollege from './components/TopCollege';
import CurrentRanking from './components/CurrentRanking';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Slider/>
    <StudyGoal/>
    <Programs/>
    <Notification/>
    <CollegeRankingTable/>
    <TopCollege/>
    <CurrentRanking/>
    </div>
  );
}

export default App;
