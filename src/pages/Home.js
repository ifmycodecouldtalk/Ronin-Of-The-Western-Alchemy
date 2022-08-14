import React from 'react';

export class Home extends React.Component {
    render() {
        return (
            <div className="home-body">
                <br /><br />
                <div className="home-gradient"></div>
                <p className='text-center tagline'><i>"New eras don't come about because of swords, they're 
                    created by the people who wield them"</i></p>
                <div className='ronin-logo'>
                    <img src='ronin-logo.png'
                         className='ronin-logo-image'
                         alt='my logo'
                    />
                </div>
                <h1 className='text-center title-card'>Learn the Essentials of <br /> Cybersecurity the Ronin Way</h1>
                <p className='brief text-center'>The website dedicated to teaching the essentials <br /> of cybersecurity to 
                those interested in a free Internet for all</p>
                <br /><br />
                <br /><br />
                {/* subsections */}
                <div className='oscp-logo'>
                    <img src='oscp-logo.png'
                         className='oscp-logo-image'
                         alt='oscp logo'
                    />
                    <h2 className='white-text oscp-label'>OSCP Training</h2>
                </div>
                <p className='white-text oscp-description'>Learn how to Pentest with Kali Linux with hands on experience.
                This certification focuses<br /> on an exam that requires pwning boxes in 24 hours to pass. This site will give 
                you the<br /> information and the practice to prepare for such tests</p>
                <a href="#" target="_blank" className='oscp-learnmore-link'>Explore the OSCP Lessons Now!</a>
                
                <br /><br /><br /><br />

                <div className='ceh-logo'>
                    <img src='ceh-logo.png'
                         className='ceh-logo-image'
                         alt='CEH logo'
                    />
                    <h2 className='white-text ceh-label'>CEH Study</h2>
                </div>
                <p className='white-text ceh-description'>What separates the CEH from the others is their teaching of emerging
                attack vectors, usage of modern exploitation tools, hands-on hacking challenges, focus on malware analyses, 
                and much more. This cert is highly coveted in the cybersecurity world.</p>
                <a href="#" target="_blank" className='ceh-learnmore-link'>Explore the CEH Lessons Now!</a>
                
                <br /><br />

                <div className='katana-logo'>
                    <img src='katana-logo.png'
                         className='katana-logo-image'
                         alt='katana logo'
                    />
                    <h2 className='white-text katana-label'>What the Ronins are About</h2>
                </div>
                <p className='white-text katana-description'>Our mission is to provide the knowledge of cybersecurity to those
                who cannot afford the expensive courses from established institutions. Knowledge and Security on the web
                should not cost a fortune to obtain, but should rather be earned through hard work and dedication.</p>
                <a href="#" target="_blank" className='katana-learnmore-link'>Click Here to Learn More About Our Cause!</a>
            </div>
            
        )
    }
}

export default Home;