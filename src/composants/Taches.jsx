import './Taches.scss';
import Tache from './Tache';
import { useEffect } from 'react';
import { useState } from 'react';
import * as tacheModele from '../code/tache-modele';

export default function Taches({utilisateur, taches, setTaches, gererAjoutTaches}) {

  const [nom, setNom] = useState('');
  const [fini, setFini] = useState('');

  function gererSoumettre(event) {
    
    event.preventDefault(); //Ne pas actualiser la page
    const tache = {nom: event.target[0].value};

    // Ne rien créer si la valeur entrée est vide
    if (event.target[0].value!='') {
      gererAjoutTaches(tache);
    }
    // Vider le contenu de la barre pour écrire la prochine tâche
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
      <form onSubmit={e => gererSoumettre(e)}>
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