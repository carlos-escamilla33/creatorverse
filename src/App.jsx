import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ShowCreators, AddCreator, EditCreator, HeaderSection, ViewCreator } from "./pages/index";
import { supabase } from "./client";
import { useEffect } from "react";
import { useCreator } from "./hooks/useCreators";
import "@picocss/pico/css/pico.min.css";

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
      <HeaderSection />
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/add-creator" element={<AddCreator />} />
        <Route path="/edit-creator" element={<EditCreator />} />
        <Route path="/view-creator" element={<ViewCreator />} />
      </Routes>
    </>
  );
}

export default App;
