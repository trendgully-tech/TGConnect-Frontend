import {Routes,Route} from "react-router-dom"
import Header from "./components/Header"
import './App.css'
import DiscoverDesigner from "./components/DiscoverDesigners"
import FooterChat from "./components/FooterChat"
import Connection from "./components/Connection"
const App = () => {
  return (
    <div className="body-contaniner">
      <Header/>
      <Routes>
      <Route exact path="/" element={<DiscoverDesigner/>} />
      <Route exact path="/connections" element={<Connection/>} />
      </Routes>
      <FooterChat/>
    </div>
  )
}
export default App