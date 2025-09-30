import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Bottom from "./Components/Bottom";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <Navbar />
      </div>
      <div>
        <section className="relative py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
          <Bottom />
        </section>

        <Footer />
      </div>
    </div>
  );
}
export default App;
