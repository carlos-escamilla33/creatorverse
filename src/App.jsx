import './App.css';
import {Routes, Route} from "react-router-dom";
import {ShowCreators, AddCreator, EditCreator} from "./pages/index"
import '@picocss/pico/css/pico.min.css';
// import { supabase } from './client';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/add-creator" element={<AddCreator />}/>
        <Route path="/edit-creator" element={<EditCreator />}/>
      </Routes>
    </>
  )
}

export default App
