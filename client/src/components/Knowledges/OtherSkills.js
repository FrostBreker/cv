import React from 'react';

const OtherSkills = () => {
    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                <ul>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Anglais Courrant
                    </li>

                    <li>
                        <i className="fas fa-check-square"></i>
                       Github
                    </li>

                    <li>
                        <i className="fas fa-check-square"></i>
                       Forge & Fabric
                    </li>
                </ul>
                <ul>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Photoshop
                    </li>

                    <li>
                        <i className="fas fa-check-square"></i>
                        <span>Heroku</span>
                    </li>

                    <li>
                        <i className="fas fa-check-square"></i>
                       Eclipse & Idea
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;