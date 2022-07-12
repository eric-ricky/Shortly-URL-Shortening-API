import React from "react";
import Layout from "./layout";
import Boost from "./sections/boost";
import Hero from "./sections/hero";
import Statistics from "./sections/statistics";

const App = () => {
  return (
    <Layout>
      <Hero />
      <Statistics />
      <Boost />
    </Layout>
  );
};

export default App;
