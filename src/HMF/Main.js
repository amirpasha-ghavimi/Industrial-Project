import sample1 from "../Items/sample1.jpg";
import sample2 from "../Items/sample2.jpg";
import sample3 from "../Items/sample3.jpg";
import icon1 from "../Items/icon1.png";
import icon2 from "../Items/icon2.png";
import icon3 from "../Items/icon3.png";
import icon4 from "../Items/icon4.jpg";
import icon5 from "../Items/icon5.jpg";
import icon6 from "../Items/icon6.jpg";
import icon7 from "../Items/icon7.jpg";
import icon8 from "../Items/icon8.jpg";
import icon9 from "../Items/icon9.jpg";

function Main () {
    return (
        <div className="main">
            <section className="section5">
                <div className="section51">_____WHAT WE DO_____</div>
                <h2>We Offer Diffrent Services</h2>
                <div className="section52">dius aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br></br> expectur sint occaecat cupidatat sunt in culpa qui officia deserunt mollit anim td est</div>
                <div className="samples">
                    <div className="sample">
                        <img src={sample1} />
                        <div>
                            <h3>Agricultural Processing</h3>
                            <p>Neque porro quisquam est, qui dolorem ipsum quira dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi.</p>
                            <p> <span style={{borderBottom: "solid rgb(255, 140, 0) 2px"}}>READ</span> MORE</p>
                        </div>
                    </div>
                    <div className="sample">
                        <img src={sample2} />
                        <div>
                            <h3>ALternate Energy</h3>
                            <p>Neque porro quisquam est, qui dolorem ipsum quira dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi.</p>
                            <p> <span style={{borderBottom: "solid rgb(255, 140, 0) 2px"}}>READ</span> MORE</p>
                        </div>
                    </div>
                    <div className="sample">
                        <img src={sample3} />
                        <div>
                            <h3>Chemical Research</h3>
                            <p>Neque porro quisquam est, qui dolorem ipsum quira dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi.</p>
                            <p> <span style={{borderBottom: "solid rgb(255, 140, 0) 2px"}}>READ</span> MORE</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section6">
                <div>_____OUR CORE FEATURES____</div>
                <h2>A high level Quality Control in compliance with National <br></br> and in international regulation and standards</h2>
                <p>dius aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. expectur sint occaecat cupidatat sunt in culpa qui officia deserunt mollit anim td est laborum. consect petur adipiscing elit. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div className="missions">
                    <div className="mission">
                        <img src={icon3} />
                        <h3>VISION</h3>
                    </div>
                    <div className="mission">
                        <img src={icon2} />
                        <h3>VALUES</h3>
                    </div>
                    <div className="mission">
                        <img src={icon1} />
                        <h3>MISSION</h3>
                    </div>   
                </div>
            </section>

            <section className="section7">
                    <div className="section71">Looking an adequate solution foe your company</div>
                    <div className="section72">CONTACT US</div>
            </section>

            <section className="section8">
                <div className="section81">
                    <div>_____WE WORK GLOBALLY</div>
                    <h2>Our Clients</h2>
                    <p>Neque porro quisquam est, qui dolorem ipsum quira dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi.</p>
                    <div className="icons">
                        <img src={icon4} />
                        <img src={icon5} />
                        <img src={icon6} />
                        <img src={icon7} />
                        <img src={icon8} />
                        <img src={icon9} />
                    </div>
                </div>
                <div  className="section82">
                    <div>_____Contact us</div>
                    <h2>Get In Touch</h2>
                    <form>
                        <input type="text" placeholder="Your Name:" required />
                        <input type="text" placeholder="Email:" required />
                        <select required>
                            <option disabled selected>Select One</option>
                            <option value="option2">option1</option>
                            <option value="option3">option2</option>
                            <option value="option4">option3</option>
                        </select>
                        <input type="tel" placeholder="Your Phone Number:" required />
                        <input type="submit" className="submit" value="SUBMIT NOW" />
                    </form>
                </div>
            </section>

            <section className="section9">
                    <div className="section91">If you Need Any Industrial Solution ... We Are Available For You</div>
                    <div className="section92">CONTACT US</div>
            </section>
        </div>
    )
}

export default Main;