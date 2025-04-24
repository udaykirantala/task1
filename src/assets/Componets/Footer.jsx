import "../Componets/Footer.css"
function Footers(){
    return(
        <footer>
            <div className="footer-mail-login-details">
            <div>
                <p><i class="fa-solid fa-envelope-circle-check"></i><span>Sign in to Newsletter</span></p>
            </div>
            <div><p>...and receive $25 coupons for first shopping</p></div>
            <div className="footer-mail-login-inputbar">
                <input type="email" name="id" id="name" placeholder="Enter Your Email"/>
                <button>Subscribe</button>
            </div>
        </div><br/>
        <section className="footer-details">
            <div className="footer-img-contact-details">
                <div>
                    <p className="footer-ligther-text">Contact</p>
                    <p>Address:<span>13 Tlemcen Road,Street 32,Beb-Eahren</span></p>
                    <p>Phone:<span>+01 2222 365/(+91)01 23456789</span></p>
                    <p>Hours:<span>10:00 - 18:00,Mon-Sat</span></p>
                </div>
                <div className="footer-contact-details-follow-mme-text">
                    <p>Follow Me</p>
                    <span class="footer-social-media-icons"><i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-pinterest-p"></i><i class="fa-brands fa-youtube"></i></span>
                </div>
            </div>
            <div className="footer-address-details">
                <div className="footer-address-details-address-text">
                    <p>Address</p>
                </div>
                <div className="footer-address-details-text">
                    <p>About Us</p>
                    <p>Delivery Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>
                    <p>Support Center</p>
                </div>
            </div>
            <div className="footer-address-details">
                <div className="footer-address-details-address-text">
                    <p>My Account</p>
                </div>
                <div  className="footer-address-details-text">
                    <p>Sign In</p>
                    <p>View Cart</p>
                    <p>My Whishlist</p>
                    <p>Track My Order</p>
                    <p>Help</p>
                    <p>Order</p>
                </div>
            </div>
            <div className="footer-pyament-methods-details">
                <div>
                    <p>Secured Payed Gateways</p>
                </div>
            </div>
        </section><br/><hr/>
        </footer>
    )
}
export default Footers