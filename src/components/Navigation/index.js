import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Navigation (props) {
    const {
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected,
        portfolioSelected,
        setPortfolioSelected,
        resumeSelected,
        setResumeSelected,
    } = props;


    return (
        <nav>
            <ul className="flex-row">
                <li className={`mx-2 ${aboutSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setAboutSelected(true);
                        setContactSelected(false);;
                        setPortfolioSelected(false);
                        setResumeSelected(false);
                    }}>About me</span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setAboutSelected(false);
                        setContactSelected(true);
                        setPortfolioSelected(false);
                        setResumeSelected(false);
                    }}>Contact</span>
                </li>
                <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setAboutSelected(false);
                        setContactSelected(false);
                        setPortfolioSelected(true);
                        setResumeSelected(false);
                    }}>Portfolio</span>
                </li><li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                    <span onClick={() => {
                        setAboutSelected(false);
                        setContactSelected(false);
                        setPortfolioSelected(false);
                        setResumeSelected(true);
                    }}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
