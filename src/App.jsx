import './App.css';
import {Routes, Route} from "react-router-dom";
import {ShowCreators, AddCreator} from "./pages/index"
import '@picocss/pico/css/pico.min.css';
// import { supabase } from './client';

function App() {

  return (
    <>
      <Routes>
        <Route path="/blah" element={<ShowCreators />} />
        <Route path="/" element={<AddCreator />}/>
      </Routes>
    </>
  )
}

export default App
