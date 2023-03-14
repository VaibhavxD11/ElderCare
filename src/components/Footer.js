import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import './Footer.css'

function Footer() {
    return (
        <footer className="foot">
            <a
                href="https://www.facebook.com/"
                target="_facebook">
                <FaFacebookSquare className="facebook" />
            </a>

            <a
                href="https://twitter.com/home"
                target="_twitter">
                <FaTwitter className="twitter" />
            </a>

            <a
                href="https://instagram.com"
                target="_instagram">
                <FaInstagramSquare className="instagram" />
            </a>

            <a id="text-in-footer">
                Copyright 2023 Team SupportYou, All Rights Reserved.
            </a>
        </footer>
    )
}

export default Footer;

