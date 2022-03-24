import React, { lazy, Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
const FirstComponent = lazy(() =>
  import(/*webpackChunkName: "firstComponent"*/ "./components/FirstComponent")
);
const SecondComponent = lazy(() =>
  import(/*webpackChunkName: "secondComponent"*/ "./components/SecondComponent")
);

const App = ({}) => {
  return (
    <>
      <div>
        <p>
          <Link to="/">Go First</Link>
        </p>
        <p>
          <Link to="/Second">Go Second</Link>
        </p>
      </div>

      <Suspense fallback={<div>Loading...!</div>}>
        <Routes>
          <Route exact path="/" element={<FirstComponent />} />
          <Route exact path="/Second" element={<SecondComponent />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
