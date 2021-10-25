import React from 'react';
import github from '../../assets/img/github.png';
import linkedin from '../../assets/img/linkedin.png';
import stackoverflow from '../../assets/img/stackoverflow.png';

function Footer () {

    return (
        <footer>
            <div className="flex-row cen">
                <div className="icon footer-icon">
                    <a href="https://github.com/nelsondcds"><img src={github} alt="github icon." /></a>
                </div>
                <div className="icon footer-icon">
                    <a href="https://www.linkedin.com/in/nelson-carlos-da-silva/"><img src={linkedin} alt="github icon." /></a>
                </div>
                <div className="icon footer-icon">
                    <a href="https://stackoverflow.com/users/15155811/cnoslen"><img src={stackoverflow} alt="github icon." /></a>
                </div>
            </div>
        </footer>
    )

}

export default Footer;
