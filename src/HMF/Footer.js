import logofooter from "../Items/Logo_footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer () {
    return (
        <div>
            <section className="footer">
                <div className="footer1">
                    <img src={logofooter} />
                    <div>We value to the Ecellence and top class engineers, but in terms of accurate service.</div>
                    <div style={{color: "rgb(63, 165, 243)"}}>Read More <i class="fa-solid fa-angles-right"></i> </div>
                    <div className="brands">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>

                <div className="footer1">
                    <h2 className="h2">Our Solution</h2>
                    <div>-Power and Enegy</div>
                    <div>-Oil and Lubricant</div>
                    <div>-Meterial Engineering</div>
                    <div>-Mechanical Engineering</div>
                    <div>-Chemical Research</div>
                    <div>-Alternate Energy</div>
                </div>

                <div className="footer1">
                    <h2 className="h2">Quick Links</h2>
                    <div>-About Us</div>
                    <div>-News</div>
                    <div>-Testimonials</div>
                    <div>-Request A Quote</div>
                    <div>_FOQ</div>
                </div>

                <div className="footer1">
                    <h2 className="h2">Get in Touch</h2>
                    <div className="contact-us">
                        <div> <i class="fa-solid fa-location-dot"></i> Lorance 542B, Tailstoi Town 5248 MD, wordwide Country</div>
                        <div> <i class="fa-solid fa-phone"></i> 01865 524 8503</div>
                        <div> <i class="fa-regular fa-envelope"></i> Info@Woodworkshop.com</div>
                        <div> <i class="fa-regular fa-clock"></i> Mon-Sat : 9am to 6pm</div>
                    </div>
                </div>
            </section>
            <div className="footer-bar">
                <div>Copyright 2024 Industrial WP Theme demo. All Rights Reserved</div>
                <div>Developed By Themechampion</div>
            </div>
        </div>
    )
}

export default Footer;