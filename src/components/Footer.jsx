import "../App.css"; // Import CSS for Footer component
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>📍 Maroc Découverte</h3>
          <p>
            Votre guide authentique pour explorer les merveilles du Maroc.
            De l’Atlas au Sahara, découvrez la magie du royaume chérifien
            à travers nos récits passionnés et nos conseils d’experts.
          </p>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaEnvelope />
          </div>
        </div>

        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li>Accueil</li>
            <li>À propos</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-destinations">
          <h4>Destinations Maroc</h4>
          <ul>
            <li>Marrakech</li>
            <li>Casablanca</li>
            <li>Fès</li>
            <li>Chefchaouen</li>
          </ul>
        </div>

        <div className="footer-experiences">
          <h4>Expériences</h4>
          <ul>
            <li>Atlas & Montagnes</li>
            <li>Sahara & Désert</li>
            <li>Côtes Atlantique</li>
            <li>Médinas & Culture</li>
          </ul>
        </div>
      </div>

      
    </footer>
  );
}