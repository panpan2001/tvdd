import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Input_Bmi from './Views/Input';
import NutritionConsulting from './Views/NutritionConsulting';
import BMI from './Views/BMI';
// import { createBrowserHistory } from 'History';

// const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Input_Bmi/> }/>
      <Route  path='/bmi' element={<BMI />}/>
      <Route  path='/bmi/nutrition' element={<NutritionConsulting />}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
