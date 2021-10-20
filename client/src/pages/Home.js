import React from 'react';

import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <div className="homeContent">
                <div className="content">
                    <h1>Donatien FARAUT</h1>
                    <h2>Dévelopeur</h2>
                    <div className="pdf">
                        <a href="./media/CV.pdf" target="_blank">Le CV version PDF</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;