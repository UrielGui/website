import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from "react-scroll";

export default function SocialMedia() {
  return (
    <div className="social-media flex justify-center mt-7">
      <div className="button-social-media">
        <a href="https://www.facebook.com/uriel.guimaraes.14/" target="_blank">
          <div className="icon p-4">
            <i className="flex justify-center items-center">
              <FaFacebookF />
            </i>
          </div>
          <span>Facebook</span>
        </a>
      </div>
      <div className="button-social-media">
        <a href="https://www.instagram.com/urieleffe/" target="_blank">
          <div className="icon p-4">
            <i className="flex justify-center items-center">
              <FaInstagram />
            </i>
          </div>
          <span>Instagram</span>
        </a>
      </div>
      <div className="button-social-media">
        <a href="https://github.com/UrielGui/" target="_blank">
          <div className="icon p-4">
            <i className="flex justify-center items-center">
              <FaGithub />
            </i>
          </div>
          <span>GitHub</span>
        </a>
      </div>
      <div className="button-social-media">
        <Link to="contato">
          <div className="icon p-4">
            <i className="flex justify-center items-center">
              <FaEnvelope />
            </i>
          </div>
          <span>Contato</span>
        </Link>
      </div>
    </div>
  )
}