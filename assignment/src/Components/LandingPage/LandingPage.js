import React from "react";
import "./LandingPage.css";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import icon1 from "../Images/logos_google-icon.png";
import icon2 from "../Images/skill-icons_webflow.png";
import icon3 from "../Images/logos_twitter.png";
import icon4 from "../Images/logos_slack-icon.png";
import icon5 from "../Images/skill-icons_instagram.png";
import icon6 from "../Images/grommet-icons_wordpress.png";
import slide1 from "../Images/slide0.png";
import slide2 from "../Images/slide1.png";
import slide3 from "../Images/slide2.png";
import slide4 from "../Images/slide3.png";
import slide5 from "../Images/slide4.png";
import slide6 from "../Images/slide5.png";



export default function LandingPage (){
    return (
        <div>

            {/*------Section 1-------*/}

            <div id="hero" className="hero">
                <div className="frame4">
                    <div className="frame3">
                        <div>
                            <h1>Transform with <br/> SaaS Solution<img src={image1} height={60} alt=""/></h1>
                        </div>
                    </div>
                    <div>
                        <p className="p1">Vitae dictum mollis vel aliquam tortor aliquam sed nunc. Congue eros velit augue nisl. <br/>Vitae convallis blandit vulputate enim sollicitudin tristique velit orci.</p>
                    </div>
                    <div>
                        <input type="button" className="button2" value="Check out Tools" />
                    </div>
                </div>
            </div>


            {/*------Section 2-------*/}

            <div id="grid" className="grid">
                <div className="frame8">
                    <div className="frame7">
                        <div className="bx1">
                            <h1>Automated <br/> Reports <img src={image2} width = {200} alt=""/></h1>
                            <p>Fermentum ut cras gravida et malesuada curabitur netus ac. Id mauris nibh turpis sed laoreet rhoncus gravida.</p>
                        </div>
                        <div className="bx2">
                            <h1>User Journey <img src={image3} height={300} alt=""/></h1>
                            <p>Duis amet est ante erat aliquet <br/>tellus sed vel in. Nibh dictum <br/>suspendisse purus tincidunt fringilla <br/>velit.</p>
                        </div>
                        <div className="bx3">
                            <img src={image4} height={300} alt=""/>
                            <h1>Funnel <br/> Optimization</h1>
                            <p>Fermentum ut cras gravida et malesuada curabitur netus ac. Id mauris nibh turpis sed laoreet rhoncus gravida.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/*------Section 3-------*/}

            <div className="slider">
                <div class="slide-track">
                    <div className="slide">
                        <img src={slide1} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={slide2} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={slide3} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={slide4} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={slide5} alt=""/>
                    </div>
                    <div className="slide">
                        <img src={slide6} alt=""/>
                    </div>
            
                    <div>
                        <img src={slide1} alt=""/>
                    </div>
                    <div>
                        <img src={slide2} alt=""/>
                    </div>
                    <div>
                        <img src={slide3} alt=""/>
                    </div>
                    <div>
                        <img src={slide4} alt=""/>
                    </div>
                    <div>
                        <img src={slide5} alt=""/>
                    </div>
                    <div>
                        <img src={slide6} alt=""/>
                    </div>
                </div>
            </div>


            {/*------Section 4-------*/}

            <div id="grid2" className="grid2">
                <div className="frame2">
                    <h1>Integrated with <br/> the tools you love</h1><input type="button" className="button3" value="Check out Tools" />
                </div>
                <div className="frame1">
                    <div className="google">
                        <img src={icon1} width={30} alt=""/>
                        <h1>Google</h1>
                        <p>Dictum pharetra arcu vel mi <br/>gravida etiam ut tortor nam.<br/> Volutpat mauris euismod a<br/> massa.</p>
                    </div>
                    <div className="group1">
                        <div className="webflow">
                            <img src={icon2} width={30} alt=""/>
                            <h1>Webflow<p>In in ut urna placerat. Pellentesque mauris euismod a </p></h1>
                        </div>
                        <div className="twitter">
                            <img src={icon3} width={30} alt=""/>
                            <h1>Twitter<p>Dictum pharetra arcu vel mi gravida etiam ut tortor nam.  </p></h1>
                        </div>
                    </div>
                    <div className="group2">
                        <div className="slack">
                            <img src={icon4} width={30} alt=""/>
                            <h1>Slack<p>Dictum pharetra arcu vel mi gravida etiam ut tortor nam.</p></h1>
                        </div>
                        <div className="instagram">
                            <img src={icon5} width={30} alt=""/>
                            <h1>Instagram<p>Dictum pharetra arcu vel mi gravida etiam ut tortor nam.</p></h1>
                        </div>
                    </div>
                    <div className="wordpress">
                        <img src={icon6} width={30} alt=""/>
                        <h1>Wordpress</h1>
                        <p>Dictum pharetra arcu vel mi <br/>gravida etiam ut tortor nam.<br/> Volutpat mauris euismod a<br/> massa.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}