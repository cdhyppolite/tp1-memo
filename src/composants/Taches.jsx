import './Taches.scss';
import Tache from './Tache';
import { useEffect } from 'react';
import * as tacheModele from '../code/tache-modele';

export default function Taches({utilisateur, taches, setTaches}) {

  // Lire les tâches (de l'utilisateur connecté) dans Firestore
  useEffect(
    () => tacheModele.lireTout(utilisateur.uid).then(
      lestaches => setTaches(lestaches)
    )
    , [utilisateur, setTaches]
  );

  return (
    <section className="Taches">
      <form onSubmit={e => alert('À compléter')}>
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