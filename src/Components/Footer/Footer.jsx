import './Footer.css'; // Ensure the path is correct

const Footer = () => {
    return (
        <footer className="f-wrapper">
            <div className="f-content">
                <div className="left">
                    <img src='/logo2.png' alt="Homyz Logo" className="footer-logo" />
                    <p>Our vision is to make all people <br /> the best place to live for them.</p>
                </div>
                <div className="right">
                    <div className="footer-info">
                        <h3>Information</h3>
                        <p>145 New York, FL 5467, USA</p>
                    </div>
                    <ul className="footer-links">
                        <li><a href="#">Property</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
