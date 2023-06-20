import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div className='font-bodyFont container m-auto mt-2'>
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
