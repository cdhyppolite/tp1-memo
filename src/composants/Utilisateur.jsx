import './Utilisateur.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { deconnexion } from '../code/utilisateur-modele';

export default function Utilisateur({utilisateur}) {
  return (
    <div className="Utilisateur">
      <span className="nom">{utilisateur.displayName}</span>
      <Avatar className="avatar" alt="Le même Monsieur Untel" title={utilisateur.email}  src={utilisateur.photoURL}/>
      
      <Button 
        variant="outlined"
        size="small"
        className="btn-deconnexion"
        onClick={deconnexion}
      >
        Déconnexion
      </Button>
    </div>
  );
}