import { useState } from "react";
import { MyGlobalContext } from "./hooks/useGlobalContext";
import Landing from "./routes/landing";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <MyGlobalContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      <Landing />
    </MyGlobalContext.Provider>
  );
}

export default App;
