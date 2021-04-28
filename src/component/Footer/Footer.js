import React from "react";
import FooterItem from "./FooterItem/FooterItem";
import './Footer.css';

import linkedin_icon from './media/LinkedIn.png';
import twitter_icon from './media/Twitter.png';
import facebook_icon from './media/Facebook.png';
import instagram_icon from './media/Instagram.png';
import email_icon from './media/Email.png';

class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="footer">
                <div class="social-media-bar">
                    <FooterItem destination='https://www.linkedin.com/in/billyphelps/' imgSrc={linkedin_icon}></FooterItem>
                    <FooterItem destination='https://www.twitter.com/billyphelps' imgSrc={twitter_icon}></FooterItem>
                    <FooterItem destination='https://www.facebook.com/billyphelps28' imgSrc={facebook_icon}></FooterItem>
                    <FooterItem destination='https://www.instagram.com/billy.phelps' imgSrc={instagram_icon}></FooterItem>
                    <FooterItem destination='mailto:billyphelps@hotmail.co.uk?Subject=Please%20come%20work%20for%20us!' imgSrc={email_icon}></FooterItem>
                    {/* <div class="copyright">
                        © 2021 William Phelps
                    </div> */}
                </div>

                {/* <div class="copyright">
                    © 2021 William Phelps
                </div> */}
            </div>
        ); 
    }
}

export default Footer;
