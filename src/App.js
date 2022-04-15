import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import { getMenu } from "./data/actions/menu";
import { getSettings } from "./data/actions/settings";
import { getHome } from "./data/actions/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Hero from "./components/Hero/Hero";
// import "./styles/locomotive/locomotive-scroll.css";
// Layout
function App() {
  const dispatch = useDispatch();
  const containerRef = useRef(null);

  //Dispatch more than one action, eg. getMenu & getSettings etc
  useEffect(() => {
    dispatch(getMenu());
    dispatch(getSettings());
    dispatch(getHome());
  }, [dispatch]);

  return (
    <BrowserRouter>
            <div className="bg"></div>

    {/* <div className='cursor'></div> */}
      {/* <Header /> */}
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>

    // <LocomotiveScrollProvider
    //   options={{
    //     smooth: true,
    //   }}
    //   watch={[]}
    //   containerRef={containerRef}
    // >
    //   <main data-scroll-container ref={containerRef}>
    //     {
    //       <BrowserRouter>
    //         {/* <div className='cursor'></div> */}
    //         {/* <Header /> */}
    //         <div className="App">
    //           <Switch>
    //             <Route path="/" exact>
    //               <Home />
    //             </Route>
    //           </Switch>
    //         </div>
    //         {/* <Footer /> */}
    //       </BrowserRouter>
    //     }
    //   </main>
    // </LocomotiveScrollProvider>
  );
}

export default App;
