
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  return (
    <>
   <Navbar title="TextUtils" about="About us"/>  
   <div className="container my-3">
    <TextForm heading="Enter Text Here" />
    {/* <About/> */}
   </div>
    </>
  );
}

export default App;
