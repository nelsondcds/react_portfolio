import React from 'react';
import Navigation from '../Navigation';

function Header (props) {
    const {
        categories,
        currentCategory,
        setCurrentCategory,
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected,
    } = props;


    return(
        <header className="flex-row px-1">
            <h2>
                <a href="/">Nelson Carlos Da Silva</a>
            </h2>
            <Navigation
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
            ></Navigation>
        </header>
    )

}

export default Header;
