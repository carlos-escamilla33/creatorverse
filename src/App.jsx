import './App.css';
import {Routes, Route} from "react-router-dom";
import {ShowCreators, AddCreator, EditCreator} from "./pages/index"
import '@picocss/pico/css/pico.min.css';
import { supabase } from './client';
import { useEffect } from 'react';
import { useCreator } from './hooks/useCreators';

function App() {
  const {setCreators} = useCreator();

  useEffect(() => {
    const fetchCreators = async () => {
      const creatorsData = await supabase
        .from("creators")
        .select(10)
      setCreators(creatorsData);
    };

    fetchCreators();
  }, [setCreators]);

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
