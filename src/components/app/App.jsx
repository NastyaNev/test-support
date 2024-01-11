import { Route, Routes } from "react-router-dom";
import Main from "../../pages/main/Main";
import Delivery from "../../pages/delivery/Delivery";
import NotFound from "../../pages/not-found/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
