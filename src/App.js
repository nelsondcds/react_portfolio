import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(true);
  
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);


  return (
    <div>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Header>
      <main>
        {(portfolioSelected ? (
          <Portfolio></Portfolio>
        ) : (
          contactSelected ? (
            <ContactForm></ContactForm>
          ) : (
            resumeSelected ? (
              <About></About>
            ) : (
              <About></About>
        ))))}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
