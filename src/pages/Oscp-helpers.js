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
                break;
            case '1.2':
                return (
                    <div className="chapter-01-content helvetica-text">
                        <h2>1.2: Overall Strategies for Approaching Course</h2>
                    </div>
                )
                break;
        }
    }
}

export default helpers;