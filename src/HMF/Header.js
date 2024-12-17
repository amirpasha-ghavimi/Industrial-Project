import Logohedaer from '../Items/Logo_Header.png';
import location from '../Items/location-icon.JPG';
import phone from "../Items/phone-icon.JPG";

function Header () {
    return (
        <div className="header">
            <section className="section1">
                <p>welcome to leader in industrial solution since 2005</p>
                <p>global certificate: iso 9001:2015</p>
            </section>

            <section className="section2">
                <img src={Logohedaer} className='logoheader'/>
                <div className="contact">
                    <div className="contact1">
                        <img src={location} />
                        <div>email address <br></br> info@industrial.com</div>
                    </div>
                    <div className="contact1">
                        <img src={phone} />
                        <div>call us <br></br> 18004567890</div>
                    </div>
                    <div className="contact2">
                        <p>REQUEST A QUOTE</p>
                    </div>
                    
                </div>
            </section>

            <section className="section3">
                <div className='menus'>
                    <div className='menu' style={{color: 'rgb(255, 187, 29)'}}>HOME</div>
                    <div className='menu'>ABOUTE US</div>
                    <div className='menu'>SERVICES</div>
                    <div className='menu'>PROJECTS</div>
                    <div className='menu'>NEWS</div>
                    <div className='menu'>SHOP</div>
                    <div className='menu'>CONTACT US</div>
                </div>
                <div>
                    <input placeholder='Enter Search Keywords' className='search'/>
                </div>
            </section>

            <section className='section4'>
                <div></div>
                <div>
                    <h1>Leader in power &<br></br>  automation <span style={{fontSize: "2rem", fontFamily: "sans-serif"}}>Technologies</span> </h1>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing <br></br> elit, sed do ipsum dolor sit amet, consectetur <br></br> adipiscing elit, sed do</p>
                    <div className='button'>
                        <div className='button1'>Learn more</div>
                        <div className='button2'>Our services</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header;