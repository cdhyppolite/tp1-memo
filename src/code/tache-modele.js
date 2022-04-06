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
    let refDoc = await addDoc(coll, tache, { merge: true });
    return await getDoc(refDoc);
}

//  Convertir la date
export function convertirDate(dateEnTimestamp) {
    const date = new Date(dateEnTimestamp * 1000);
    const annee = date.getFullYear();
    const listeDesMois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    const mois = listeDesMois[date.getMonth()];
    const jour = date.getDate();
    return `(${jour} ${mois} ${annee} à ${heureDeuxChiffre( date.getHours(),date.getMinutes(), date.getSeconds() )})`;
}

function heureDeuxChiffre(heures, minutes, secondes) {
    let h = (heures < 10 ? '0' : '') + heures;
    let m = (minutes < 10 ? '0' : '') + minutes;
    let s = (secondes < 10 ? '0' : '') + secondes;
    return `${h}:${m}:${s}`
}