import "./Footer.css";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="foot">
      <div class="footer-social-icons">
        <a id="text-in-footer">
          Copyright 2023 Team SupportYou, All Rights Reserved.
        </a>
        <a href="#">
          <i class="fab fa-facebook-f">
            <SocialIcon
              url="https://twitter.com/PiyushS85128013"
              target="_twitter"
              style={{ height: "30px", width: "30px" }}
            />
          </i>
        </a>
        <a href="#">
          <i class="fab fa-twitter">
            <SocialIcon
              url="https://www.instagram.com/piyush_m87/"
              target="_instagram"
              style={{ height: "30px", width: "30px" }}
            />
          </i>
        </a>
        <a href="#">
          <i class="fab fa-instagram">
            <SocialIcon
              url="https://www.facebook.com/"
              target="_facebook"
              style={{ height: "30px", width: "30px" }}
            />
          </i>
        </a>
        <a href="#">
          <i class="fab fa-linkedin-in">
            <SocialIcon
              url="https://github.com/piyush3441"
              target="_github"
              style={{ height: "30px", width: "30px" }}
            />
          </i>
        </a>

        <a href="#">
          <i class="fab fa-linkedin-in">
            <SocialIcon
              url="https://www.linkedin.com/in/piyush-solanki-/"
              target="_linkedin"
              style={{ height: "30px", width: "30px" }}
            />
          </i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
