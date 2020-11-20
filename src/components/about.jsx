import React from "react";
import { toast } from "react-toastify";

const About = () => {
  return (
    <div>
      <h1 className="f2 lh-copy lower-decoration">À propos</h1>
      <p className="bg-info">
        Je suis un jeune étudiant fringant et souvent en retard. Désolé! :)
      </p>
      <p className="invisible">
        {toast("Wow! Qui l'eût crû!")}
        {toast("En retard? Toi? Pas vrai!")}
        {toast("Niaises-moi pas!")}
      </p>
    </div>
  );
};

export default About;
