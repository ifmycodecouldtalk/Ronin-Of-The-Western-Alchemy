const helpers ={
    renderPage(page) {
        switch(page){
            case 'introductions':
                return (
                    <div className="introductions-page helvetica-text page">
                        <h1>Introductions</h1><br />
                            <p>Hello! My name is Chris Martinez. I built this site to help people learn skills
                                that would be needed to take the OSCP. This site is completely free and is done 
                                purely out of my passion for web building and cybersecurity. The reason I chose
                                the OSCP is because the purpose of the exam is to train hackers to achieve 
                                professional skills; hence, to become a great cybersecurity expert, it goes without
                                saying that the skills listed on this site will be important to know.
                            </p>
                        <br />
                        <h4><b>What Is the OSCP?</b></h4><br />
                            <p>OSCP stands for Offensive Security Certified Professional. Offensive Security 
                                provides a course on their site that covers the necessary skills to tackle their exam, 
                                which consists of compromising boxes and escalating privileges. The course itself is
                                $1499, which is a huge investment for those who wish to learn hacking, but the 
                                OSCP certificate is highly valued in the CybSec world.
                            </p>
                        <br />
                        <h4><b>How Can I Test My Skills?</b></h4><br />
                            <p>When you feel confident after reading these pages, you can try out your hacking skills 
                                by going to sites like HackTheBox (<i>which I recommend</i>) or TryHackMe. Try these out with 
                                as little help as possible. Once you feel comfortable tackling boxes, try finding some
                                Capture the Flag (CTF) games and grind those out until you feel skillful enough to try 
                                the OSCP exam itself.
                            </p>
                    </div>
                )
            case 'kali_linux':
                return (
                    <div className="kali_linux-page helvetica-text page">
                        <h1>Kali Linux</h1><br />
                        <p>Kali Linux is a Debian-based operating system developed and maintained by Offensive Security.
                            It comes loaded with tools used for the average penetration test. These tools include: 
                            <i> Metasploit, Nmap, Wireshark, and Aircrack-ng</i> to name a few. 
                        </p>
                        <br />
                        <h4><b>Booting Up Kali Linux</b></h4><br />
                            <p>Begin by downloading the official Kali Linux image and virtual machine software of your choosing.
                                As a security professional, you should get in the habit of verifying every file you download to 
                                prohibit unnecessary risk.
                            </p>
                            <p>The default credentials for Kali is the word 'kali' for both username and password.
                                Once you are logged in, type <code>passwd</code> to change the password. Be careful
                                not to log in as 'root', as root user is unrestricted and a stray command could damage
                                the machine. If you need elevated privileges for a command, prepend it with the word 
                                <code>sudo</code>. For example: <code>sudo apt-get install [package]</code>
                            </p>
                        <br />
                        <h4><b>The Kali Menu</b></h4><br />
                            <p>Navigate the menu to view your applications, which are sorted out by their primary
                                roles. Take some time to familiarize yourself with the menu.
                            </p>
                            <div className="text-center">
                                <img src='/oscp/kali-menu.jpg' className="IMG_kali-menu" alt='kali menu' />
                                <p><i>The Kali Menu</i></p>
                            </div>
                        <br />
                        <h4><b>Kali Documentation</b></h4><br />
                            <p>Below are some resources to learn more about Kali Linux:</p>
                            <ul>
                                <li><a href="http://docs.kali.org" target="_blank">The Kali Linux Official Documentation</a></li>
                                <li><a href="https://forums.kali.org" target="_blank">The Kali Linux Support Forums</a></li>
                                <li><a href="https://tools.kali.org" target="_blank">The Kali Linux Tools Site</a></li>
                                <li><a href="https://bugs.kali.org" target="_blank">The Kali Linux Bug Tracker</a></li>
                                <li><a href="https://kali.training" target="_blank">The Kali Linux Training</a></li>
                            </ul>
                        <br />
                        <h4><b>Finding Your Way Around Kali</b></h4><br />
                            <p><b><u>Important Directories</u></b></p>
                            <p>Below are the important Linux directories every user should know:</p>
                            <ul>
                                <li><b>/bin</b> - basic programs like <code>ls cd cat</code></li>
                                <li><b>/sbin</b> - system programs like <code>fdisk mkfs sysctl</code></li>
                                <li><b>/etc</b> - configuration files</li>
                                <li><b>/tmp</b> - temporary files (typically deleted on boot)</li>
                                <li><b>/usr/bin</b> - applications like nmap, apt, ncat</li>
                                <li><b>/usr/share</b> - application support and data files</li>
                            </ul>
                            <p><u><b>Man</b></u></p>
                            <p>Most commands in Linux distros come with bits of formal documentation. If you're ever curious 
                                about a command, type <code>man [command]</code> to open up the documentation page for the 
                                command.
                            </p>
                            <p><b><u>Commands You Should Know</u></b></p>
                            <p>If you are new to Linux, you should take some time to familiarize yourself with the 
                                following commands:<br /> <code>ls, cd, mkdir, man, touch, rm</code>
                            </p>
                            <p><b><u>Finding Files in Kali Linux</u></b></p>
                            <p>The three most common commands for finding files are <i>find, locate, and which</i></p>
                            <ul>
                                <li><code>which</code>: searches through directories defined in $PATH for a given file name.
                                If a match is found, <b>which</b> will return the full path.</li>
                                <li><code>locate</code>: the quickest of the three, locate uses a local database to find file
                                location</li>
                                <li><code>find</code>: most flexible and complex of the three. The code below performs 
                                a recursive search in the root directory for any file that starts with 'sbd'</li>
                                <p><code>find / -name sbd*</code></p>
                            </ul>
                        <br />
                        <h4><b>Managing Kali Linux Services</b></h4><br />
                    </div>
                )
            case 'the_command_line':
                return (
                    <div className="introductions-page helvetica-text">
                        <h2>The Command Line</h2>
                    </div>
                )
            case 'common_tools':
                return (
                    <div className="introductions-page helvetica-text">
                        <h2>Common Tools</h2>
                    </div>
                )
            case 'bash_scripting':
                return (
                    <div className="introductions-page helvetica-text">
                        <h2>Bash Scripting</h2>
                    </div>
                )
        }
    }
}

export default helpers;