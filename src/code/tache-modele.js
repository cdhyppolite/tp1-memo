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

export async function creer(idUtilisateur, tache) {
    tache.date = Timestamp.now();
    let coll = collection(bdFirestore, nomAppli, idUtilisateur, 'taches');
    let refDoc = addDoc(coll, tache);
    return await getDoc(refDoc);
}