import { async } from "@firebase/util";
import { getDocs, collection, addDoc, Timestamp, getDoc } from "firebase/firestore";
import { bdFirestore, nomAppli } from "./init";

// Obtenir tout les tâches d'un utilisateur
export async function lireTout(idUtilisateur) {
    return getDocs(
        collection(bdFirestore, nomAppli, idUtilisateur, 'taches')
    ).then(
        res => res.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    );
}

// Ajouter une tâche
export async function creerTache(idUtilisateur, tache) {
    tache.date = Timestamp.now();
    tache.fini = false;
    let coll = collection(bdFirestore, nomAppli, idUtilisateur, 'taches');
    let refDoc = addDoc(coll, tache, { merge: true });
    return await getDoc(refDoc);
}

//  Convertir la date
export function convertirDate(dateEnTimestamp) {
    const date = new Date(dateEnTimestamp * 1000).toLocaleString();
    const jour = date.substring(0, 2);
    const listeDesMois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const mois = listeDesMois[parseInt(date.substring(3, 5)) - 1];
    const annee = date.substring(6, 10);
    return `${jour} ${mois} ${annee} à ${date.substring(12, 20)}`;
}