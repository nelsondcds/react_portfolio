import React, { useEffect } from 'react';
import github from '../../assets/img/github.png';

function Footer () {

    return (
        <footer>
            <div className="github">
                <a href="https://github.com/nelsondcds"><img src={github} alt="github icon." /></a>
            </div>
        </footer>
    )

}

export default Footer;
