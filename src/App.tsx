import { ToastContainer } from "react-toastify"
import Banner from "./components/banner/Banner"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Technologies from "./components/technologies/Technologies"

function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Technologies></Technologies>
      <Footer></Footer>
      <ToastContainer position="top-left" autoClose={3000} style={{ top: "90px" }}/>
    </>
  )
}

export default App
