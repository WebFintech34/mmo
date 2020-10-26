import React from "react"
import forex1 from "./forex1.jpg"
import forex2 from "./forex2.jpg"
import forex3 from "./forex3.jpg"
import { Link } from "react-router-dom"

const Intro = () => {

    return (

        <div className ="intro">
            <div className="column">
                <div className ="card">
                <img src={forex1} alt="scams" />
                <div className="container">
                    <h2>Avoid Scams</h2>
                    <p>There are many people out there promising you to get rich quick with trading. Although
                        forex trading is lucrative, there are risks involved and not all that glitters in gold. 
                        Many people hand over their money to supposedley expert traders, top brokers or some binary 
                        trading bot or programs that will make you an instant millionaire. Sadly many fail victim to scams 
                        and never see their money again. Mmo platfrom is here to help with the problem of scams in trading. 
                        We provide a safe and reliable platform to interact with expert traders, engage with traders, learn 
                        and be made aware of scams. Social media like Facebook is not the right place to meet a stranger and entrust 
                        them to make millions with your money. Learn more about our platform!
                    </p>
                    <Link className="button" to = "/about" >About MMO </Link>
                </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                <img src={forex2} alt="education" />
                <div className="container">
                    <h2>Get Educated</h2>
                    <p>The promise of massive wealth with trading 
                        especially the highly liquid forex trading market lures many beginners to go in blind. The right way to 
                        get into trading is to go in informed. This is why Mmo platform believes that one of the best ways to solve the
                        problem of scams is to educate individuals interested in trading. Get educated about the potential upsides, 
                        the potential downsides, the risks, the psychology, the workings of trading, and how to avoid scams. Mmo platform
                        offers the opportunity to get relevant information,guidance from real traders, engage, interact, learn from or have 
                        reliable, trusted vetted traders hold your hand and guide you. The right education vs. disjoint messages on social media 
                        are disjoint with agendas to make you too excited and hand over your money. 
                    </p>
                    <Link className="button" to = "/education" >Education</Link>
                </div>
                </div>
            </div>
            
            <div className="column">
                <div className="card">
                <img src={forex3} alt="experts" />
                <div className="container">
                    <h2>Meet Real Traders</h2>
                    <p>The best way to thrive in a new area is to learn from an expert. Sadly many people are meeting so called experts on 
                        social media people who either are not knowledgeable, are scammers or just looking to make a quick commission. Mmmo is a 
                        platform that brings in expert traders from all over the world to hold hands, guide, educate, menntor, trade on behalf of
                        beginners on a safe and trusted platform. We only want to work with traders who are willing uphold ethical standards. Avoid the scams on social media. Join our platform and get the benefits of 
                        being a member. Traders can work with beginners on our platform as they build their reputation as reliable individuals on matters
                        to do with trading. Join our platform now to enhance your trading journey.
                    </p>
                    <Link className="button" to = "/register">Join Platform</Link>
                </div>
                </div>
            </div>
    </div>

    );

};

export default Intro;
