import './Tache.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import { convertirDate } from '../code/tache-modele';

export default function Tache({id, nom, date, fini}) {
  let etat = "Tache";
  if (fini==true) etat += " completee";
  return (
    <div className={etat}>
      <CheckCircleIcon/>
      <span className="texte">{nom}</span>
      <span className="date">{convertirDate(date.seconds)}</span>
      <DoDisturbOnIcon/>
    </div>
  );
}