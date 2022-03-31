import './Taches.scss';
import Tache from './Tache';
import { useEffect } from 'react';
import { useState } from 'react';
import * as tacheModele from '../code/tache-modele';

export default function Taches({utilisateur, taches, setTaches, gererAjoutTaches}) {

  const [nom, setNom] = useState('');
  const [fini, setFini] = useState('');

  function gererSoumettre() {
    // Ajout dans firestore
    // alert(value);
    // gererAjoutTaches( nom, fini);
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
      <form onSubmit={gererSoumettre}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          name="texteTache"
          autoComplete="off"
        />
      </form>

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