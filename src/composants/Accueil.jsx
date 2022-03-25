import './Accueil.scss';
import logoGoogle from '../images/google-logo.png';

export default function Accueil() {
  
  // Déclenche le processus d'authentification avec Google Auth Provider
   function connexion() {
    alert('À compléter !');
    signInWithPopup(authFirebase, authGoogle).then(
      userGoogle => setUtil(userGoogle.user)
    );
  }

  return (
    <div className="Accueil">
      <h3 className="logo">Memo</h3>
      <div className="conteneur-boutons-connexion">
        <span className="btn-google" onClick={connexion}>
          <img className="btn-image" src={logoGoogle} alt="Logo Google"/>
          <span className="btn-texte">Continuer avec Google</span>
        </span>
      </div>
    </div>
  )
}