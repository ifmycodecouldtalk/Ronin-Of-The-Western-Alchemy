import React from 'react';
import './Oscp.css';
import Helpers from './Oscp-helpers';

export class Oscp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentPage: 'introductions'
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
                        <p className='chapter-title'><b>Unit One: Fundamentals</b></p>
                        <div className='chapter-subsections'>
                            <a className='subsection' onClick={() => this.changePage('introductions')}> Introduction</a><br />
                            <a className='subsection' onClick={() => this.changePage('kali_linux')}> Kali Linux</a><br />
                            <a className='subsection' onClick={() => this.changePage('the_command_line')}> The Command Line</a><br />
                            <a className='subsection' onClick={() => this.changePage('common_tools')}> Common Tools</a><br />
                            <a className='subsection' onClick={() => this.changePage('bash_scripting')}> Bash Scripting</a><br />
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