import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(true);
  
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  const [resumeSelected, setResumeSelected] = useState(false);

  const [categories] = useState([
    { name: 'About me' },
    { name: 'Contact me' },
    { name: 'Portfolio' },
    { name: 'Resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);



  return (
    <div>
      <Header
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
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
              <Resume></Resume>
            ) : (
              <About></About>
        ))))}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
