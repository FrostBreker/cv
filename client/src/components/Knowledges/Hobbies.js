import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-laptop"></i>
                    <span>Informatique</span>
                </li>

                <li className="hobby">
                    <i className="fab fa-bitcoin"></i>
                    <span>Crypto-monnaies</span>
                </li>

                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span>Espace</span>
                </li>

                <li className="hobby">
                    <i className="fas fa-plane"></i>
                    <span>Aéronautique</span>
                </li>

                <li className="hobby">
                    <i class="fas fa-fighter-jet"></i>
                    <span>Armée</span>
                </li>

                <li className="hobby">
                    <i class="fas fa-running"></i>
                    <span>Sport</span>
                </li>

                <li className="hobby">
                    <i class="fas fa-money-check-alt"></i>
                    <span>Marchés financiers</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;