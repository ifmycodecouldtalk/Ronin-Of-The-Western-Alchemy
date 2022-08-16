import React from 'react';
import './Oscp.css';
import Helpers from './Oscp-helpers';

export class Oscp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: '1.1'
        };
        this.changePage = this.changePage.bind(this);
    }

    changePage(page){
        this.setState({currentPage: page});
    }

    render() {
        return(
            <div>
                <br /><br /><br />
                <div className='nav-chapters'>
                    <div className='chapter-01 white-text'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                        </svg>
                        <p className='chapter-title'><b>01: General Course Information</b></p>
                        <div className='chapter-subsections'>
                            <a className='subsection' onClick={() => this.changePage('1.1')}><b>1.1:</b> About the PWK Course</a><br />
                            <a className='subsection' onClick={() => this.changePage('1.2')}><b>1.2:</b> Overall Strategies for Approaching Course</a><br />
                            <a className='subsection' onClick={() => this.changePage('1.3')}><b>1.3:</b> Obtaining Support</a><br />
                            <a className='subsection' onClick={() => this.changePage('1.4')}><b>1.4:</b> About Penetration Testing</a><br />
                            <a className='subsection'><b>1.5:</b> Legal</a><br />
                            <a className='subsection'><b>1.6:</b> The MegaCorpone.com and <br />Sandbox.local Domains</a><br />
                            <a className='subsection'><b>1.7:</b> About the PWK VPN Labs</a><br />
                            <a className='subsection'><b>1.8:</b> Reporting</a><br />
                            <a className='subsection'><b>1.9:</b> About the OSCP Exam</a><br />
                            <a className='subsection'><b>1.10:</b> Wrapping Up</a><br />
                        </div>
                    </div>
                    <div className='chapter-02 white-text'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
                        </svg>
                        <p className='chapter-title'><b>02: Getting Comfortable with Kali Linux</b></p>
                        <div className='chapter-subsections'>
                            <p className='subsection'>2.1: Booting Up Kali Linux</p>
                            <p className='subsection'>2.2: The Kali Menu</p>
                            <p className='subsection'>2.3: Kali Documentation</p>
                            <p className='subsection'>2.4: Finding Your Way Around Kali</p>
                            <p className='subsection'>2.5: Managing Kali Linux Services</p>
                            <p className='subsection'>2.6: Searching, Installing, and Removing Tools</p>
                            <p className='subsection'>2.7: Wrapping Up</p>
                        </div>
                    </div>
                </div>
                <div className='content'>
                    {Helpers.renderPage(this.state.currentPage)}
                </div>
            </div>
        )
    }
}

export default Oscp;