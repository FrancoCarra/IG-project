import { SideBar } from "./components/SideBar"
import './App.css'
import InstagramCard from "./components/Posts"
function App() {

  return (
    <>
    <section className="container">
      <SideBar/>
        <InstagramCard/>
    </section>
    </>
  )
}

export default App
