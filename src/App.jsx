import './App.css';
import {Routes, Route} from "react-router-dom";
import ShowCreators from './pages/ShowCreators';
import '@picocss/pico/css/pico.min.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
      </Routes>
    </>
  )
}

export default App
