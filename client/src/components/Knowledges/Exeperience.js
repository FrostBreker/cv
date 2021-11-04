import React from 'react';

const Exeperience = () => {
  return (
    <div className="experience">
      <h3>Expérience</h3>
      <div className="exp-1">
        <h4>Stagiaire chez Idento</h4>
        <h5>2021</h5>
        <p>
          J'ai travaillé sur l'implantation des clés FIDO2,
          la connexion d'une session windows à partir d'un téléphone
          et sur un système de portabilités conçu en batch.
        </p>
      </div>

      <div className="exp-2">
        <h4>Diplômé chez OpenClassroom</h4>
        <p>
          Diplôme :  
          <a href="https://openclassrooms.com/fr/courses/6173491-apprenez-a-utiliser-la-ligne-de-commande-dans-un-terminal">
            Utiliser la ligne de commande dans un terminal
          </a>
          
        </p>
        <p>
          Diplôme : C#
        </p>
        <p>
          Diplôme : Java et ses IDE
        </p>
        <p>
          Diplôme : JavaScript
        </p>
      </div>
    </div>
  );
};

export default Exeperience;