import './Taches.scss';
import Tache from './Tache';
import { useEffect } from 'react';
import { useState } from 'react';
import * as tacheModele from '../code/tache-modele';

export default function Taches({utilisateur, taches, setTaches, gererAjoutTaches}) {

  const [nom, setNom] = useState('');
  const [fini, setFini] = useState('');

  function gererSoumettre(idUtilisateur, event) {
    event.preventDefault(); //Ne pas actualiser la page
    const tache = {nom: event.target[0].value};
    
    // Ne rien créer si la valeur entrée est vide
    if (event.target[0].value!='') {
      tacheModele.creerTache(idUtilisateur, tache).then(
        doc => {setTaches([{id: doc.id, ...doc.data()}, ...taches]);})
        ;
    }
    // Vider le contenu de la barre écrit la prochine tâche
    event.target[0].value = '';
  }

  // Lire les tâches (de l'utilisateur connecté) dans Firestore
  useEffect(
    () => tacheModele.lireTout(utilisateur.uid).then(
      lestaches => setTaches(lestaches)
    )
    , [utilisateur, setTaches]
  );

  return (
    <section className="Taches">

      {/* Tâche à ajouter */}
      <form onSubmit={e => gererSoumettre(utilisateur.uid, e)}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off"
        />
      </form>

      {/* Les Tâches */}
      <div className="liste-taches">
      {
        taches.map(
          tache =>  <Tache key={tache.id} {...tache} />
        )
      }
      </div>
    </section>
  );
}