import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ShowCreators, AddCreator, EditCreator } from "./pages/index";
import "@picocss/pico/css/pico.min.css";
import { supabase } from "./client";
import { useEffect } from "react";
import { useCreator } from "./hooks/useCreators";

function App() {
  const { setCreators } = useCreator();

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const {data} = await supabase.from("creators").select();
        console.log(data);
        setCreators(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCreators();
  }, [setCreators]);

  return (
    <>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/edit-creator" element={<EditCreator />} />

      </Routes>
    </>
  );
}

export default App;
