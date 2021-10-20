import React from 'react';
import Exeperience from '../components/Knowledges/Exeperience';
import Hobbies from '../components/Knowledges/Hobbies';
import Languages from '../components/Knowledges/Languages';
import OtherSkills from '../components/Knowledges/OtherSkills';
import NavBar from '../components/NavBar';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <NavBar />
            <div className="knowledgesContent">
                <Languages />
                <Exeperience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;