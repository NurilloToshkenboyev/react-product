import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import { Section1 } from "./components/Section1/Section1";
import { Header } from "./components/Header/header";
import { Section2 } from "./components/Section2/Section2";
import { products } from "./data/data";
import { Footer } from "./components/Footer/footer";

function App() {
  const { productList } = useSelector((state) => state.product);

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="flex">
          <div className="flex-1 flex flex-wrap">
            {products.map((item) => (
              <Section1 key={item.id} {...item} />
            ))}
          </div>
          <div className="w-1/3 border-l-2 border-gray-200 p-4 h-screen overflow-y-scroll">
            {productList.map((item) => (
              <Section2 key={item.id} {...item} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
