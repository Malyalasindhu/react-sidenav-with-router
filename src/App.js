import { BrowserRouter, Routes, Route } from "react-router-dom";
import Activities from "./pages/Activities";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Files from "./pages/Files";
import Calls from "./pages/Calls";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Activities />} />
          <Route path="/calendar" exact element={<Calendar />} />
          <Route path="/chat" exact element={<Chat />} />
          <Route path="/files" exact element={<Files />} />
          <Route path="/calls" exact element={<Calls />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
