import React from "react";
import './Home.css'
import avatar from '../../assets/avatar.png'
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import {loremIpsum} from "../../service/lorem-ipsum/LoremIpsumService";
import {urlOpener} from "../../service/url-opener/UrlOpener";
import {WebsiteConstants} from "../../WebsiteConstants";

export const Home: React.FunctionComponent<any> = (props: any) => {

    return (
        <div className="Home">
            <div className="Navbar">
                <MenuIcon className="IconButton"/>
                <div>
                    <FacebookIcon className="IconButton" onClick={() => urlOpener.openNewTab(WebsiteConstants.FACEBOOK_LINK)}/>
                    <LinkedInIcon className="IconButton" onClick={() => urlOpener.openNewTab(WebsiteConstants.LINKEDIN_LINK)}/>
                    <GitHubIcon className="IconButton" onClick={() => urlOpener.openNewTab(WebsiteConstants.GITHUB_LINK)}/>
                </div>
            </div>
            <div className="Content">
                <div className="Section Primary-light Centered" >
                    <img src={avatar} className="Avatar"/>
                    <div className="Citation">
                        <em>{loremIpsum.generateWords(6)}</em>
                    </div>
                    <div>{loremIpsum.generateParagraphs(1)}</div>
                </div>
                <div className="Section Primary-inverted Centered">
                    <span className="SectionTitle">Software Engineering</span>
                    <span>{loremIpsum.generateParagraphs(1)}</span>
                    <span>{loremIpsum.generateParagraphs(1)}</span>
                </div>
                <div className="Section Primary-light" >
                    <span className="SectionTitle">Long life learning</span>
                    <span>{loremIpsum.generateParagraphs(1)}</span>
                    <span>{loremIpsum.generateParagraphs(1)}</span>
                </div>
                <div className="Section Secondary" >
                    <span className="SectionTitle">Other interests</span>
                    <span>{loremIpsum.generateParagraphs(1)}</span>
                    <span>{loremIpsum.generateParagraphs(1)}</span>
                </div>
            </div>
        </div>
    );
}
