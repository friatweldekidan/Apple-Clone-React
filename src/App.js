import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Four04 from "./Pages/Four04/Four04";
import Productpages from "./Pages/Productpages/Productpages";
import Footer from "./Components/Footer/Footer";

import IPhone from "./Pages/Iphone/Iphone";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/iphone" element={<IPhone />} />
          <Route path="/iphone/:productID" element={<Productpages />} />
          <Route path="*" element={<Four04 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React from "react";

// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
// import Main from "./Components/Main/Main";

// function App() {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// }

// export default App;
