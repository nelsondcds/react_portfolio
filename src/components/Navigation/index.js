import React, { useEffect } from 'react';

function Navigation (props) {
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

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);


    return (
        <nav>
            <ul className="flex-row">
                <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setAboutSelected(true);
                        setContactSelected(false);;
                        setPortfolioSelected(false);
                        setResumeSelected(false);
                        setCurrentCategory(categories[0]);
                    }}>About me</span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setAboutSelected(false);
                        setContactSelected(true);
                        setPortfolioSelected(false);
                        setResumeSelected(false);
                        setCurrentCategory(categories[1]);
                    }}>Contact</span>
                </li>
                <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setAboutSelected(false);
                        setContactSelected(false);
                        setPortfolioSelected(true);
                        setResumeSelected(false);
                        setCurrentCategory(categories[2]);
                    }}>Portfolio</span>
                </li><li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setAboutSelected(false);
                        setContactSelected(false);
                        setPortfolioSelected(false);
                        setResumeSelected(true);
                        setCurrentCategory(categories[3]);
                    }}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
