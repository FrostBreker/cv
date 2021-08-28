import React from 'react';
import NavBar from '../components/NavBar';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <NavBar />
            <div className="contactContent">
                <div className="header">

                </div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="contact.frostbrekertv@gmail.com">
                                <span className="clickInput" onClick={() => { alert("E-mail copié") }}>
                                    contact.frostbrekertv@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>

                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="06 98 72 05 30">
                                <span className="clickInput" onClick={() => { alert("Telephone copié") }}>
                                    06 98 72 05 30
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="https://github.com/FrostBreker" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github" />
                        </a>

                        <a href="https://www.instagram.com/donatien.faraut/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" />
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;