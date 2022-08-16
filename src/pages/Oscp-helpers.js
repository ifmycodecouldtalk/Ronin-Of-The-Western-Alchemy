const helpers ={
    renderPage(page) {
        switch(page){
            case '1.1':
                return (
                    <div className="chapter-01-content helvetica-text">
                        <h2>1.1: About the PWK Course</h2>
                        <br />
                        <h3 className="subheading"><i>PWK Course Materials</i></h3>
                            <p>The course comes with a lab guide and accompanying course videos. As this
                                is proprietary property of Offensive Security, I can only share my notes 
                                from the lab PDF. I will also try and include course exercises at the end of 
                                every chapter.
                            </p>
                        <br />   
                        <h3 className="subheading"><i>Access to the Internal VPN Lab Network</i></h3>
                            <p>When you buy the course, you will receive an email welcome with your VPN credentials
                                and the corresponding VPN connectivity pack. 
                                <br />
                                Lab time starts when your course begins and is metered as continuous access. Lab time 
                                can only be paused by case of emergency.
                                <br />
                                If your lab time is expired or about to expire, you can purchase a lab extension
                                at any time. Use the personalized purchase link in the email. If you purchase a 
                                lab extension <i>before expiration</i>, you can still use the same VPN connectivity pack;
                                otherwise, you will get a new VPN connectivity pack.
                            </p>
                        <br />
                        <h3 className="subheading"><i>The Offensive Security Student Forum</i></h3>
                            <p>The Student Forum is only accessible to Offensive Security students. Your forum credentials come
                                in the email as well. On the forums you can ask questions, share resources, offer tips. 
                                <br />
                                Once you pass the exam, you will have access to the subforum for certificate holders.
                            </p>
                        <br />
                        <h3 className="subheading"><i>Live Support</i></h3>
                            <p>You will have direct contact with Student Administrators. They are available to assist you 
                                with technical issues and clarify items in the course material and exercises.
                            </p>
                        <br />
                        <h3 className="subheading"><i>OSCP Exam Attempt</i></h3>
                            <p>Included with your purchase of the PWK course is an attempt at the OSCP certification exam. 
                                You have 120 days after the end of your lab time to take the exam. If your exam expires, you
                                can purchase another one for 120 days. If you purchase a lab extension with an unused exam
                                attempt, you will have 120 days after the last day of your lab extension.
                                <br />
                                To book the exam, use your personalized scheduling link in the email.
                            </p>
                    </div>
                )
            case '1.2':
                return (
                    <div className="chapter-01-content helvetica-text">
                        <h2>1.2: Overall Strategies for Approaching Course</h2><br />
                            <p>The following is recommended as a general approach to the course materials:</p>
                            <ul>
                                <li>Review all information in welcome and course information emails</li>
                                <li>Review the course materials</li>
                                <li>Complete all the course exercises</li>
                                <li>Attack the lab machines <i>(*Note: I will cover this when we get there)</i></li>
                            </ul>
                            <br />
                        <h3 className="subheading"><i>Welcome and Course Information Emails</i></h3>
                            <p>Be sure to read these emails because as you saw in 1.1, they contain a lot 
                                of necessary links and credentials for your course.
                            </p>
                        <br />
                        <h3 className="subheading"><i>Course Materials</i></h3>
                            <p>The course comes with a lab guide and course videos. It's advised to use both resources, 
                                opting first with whichever matches your learning style, but nonetheless using both to 
                                synthesize your learning. Treat the course as a marathon and not a sprint; don't be 
                                afraid to spend more time on difficult parts before advancing in the course.
                            </p>
                        <br />
                        <h3 className="subheading"><i>Course Exercises</i></h3>
                            <p>It is recommended that you fully complete the exercises provided at the end of each module 
                                prior to moving on to the next module. They will test your understanding and build confidence
                                moving forward. <u>Note:</u> some of these exercises are going to be difficult and will require
                                a significant amount of time. It is encouraged to be persistent, especially on tougher exercises.
                                OffSec encourages a "Try Harder" mindset.
                            </p>
                        <br />
                        <h3 className="subheading"><i>PWK Labs</i></h3>
                            <p>Once you complete the course material, you should be confident in tackling the labs with 
                                the goal of compromising the machines and escalating privileges. These are just my notes, so I 
                                cannot give you access to these labs; however, there are <b>FREE</b> resources that I recommend
                                to test your skills in compromising machines. These include &nbsp;
                                <a _target="blank" href="https://www.hackthebox.com/" className="subsection">HackTheBox</a> and
                                <a _target="blank" href="https://tryhackme.com/" className="subsection">TryHackMe</a>.
                            </p>
                    </div>
                )
            case '1.3':
                return (
                    <div className="chapter-01-content helvetica-text">
                        <h2>1.3: Obtaining Support</h2><br />
                            <p>The PWK is not a fixed-pace course. You can go at your own pace, spending additional
                                time on topics that are difficult for you. Don't be afraid of wrestling harder topics.
                                <br /><br />
                                There are times when it is appropriate, however, to contact support. Please understand
                                that support will expect that you have gone over all course materials before trying to 
                                tackle the labs and will not hesitate to refer you back to the course materials if 
                                needed. Check Offensive Security's FAQ, and if no solution is found try the Student Forums.
                                <br /><br />
                                If you still need help, you can contact Student Administrators by visiting Live Support
                                or by sending an email.
                            </p>
                    </div>
                )
            case '1.4':
                return (
                    <div className="chapter-01-content helvetica-text">
                        <h2>1.4: About Penetration Testing</h2><br />
                            <p>A <u>pentration test</u> is an ongoing cycle of research and attack against
                            a target or boundary. The attack should be <b>structured, calculated, </b>and, when 
                            possible, verified in a lab before being implemented on a live target. The
                            cycle is pictured as such:</p>
                            <div className="text-center">
                                <img src='/oscp/figure_1_4_1.png' className="figure-1-4-1" alt='pentest diagram' />
                                <p><i>Figure 1: Diagram of Pentest Methodology</i></p>
                            </div>
                            <p>As the model suggests, the more information you gather, the higher the probability
                                of a successful penetration test. Once initial target is penetrated, you would
                                typically start the cycle again. For example, you might gather information 
                                about the internal network in order to penetrate deeper.
                            </p>
                    </div>
                )
        }
    }
}

export default helpers;