import './Tache.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

export default function Tache({id, nom, date, fini}) {
  let etat = "Tache";
  if (fini==true) etat = "Tache completee";
  return (
    <div className={etat}>
      <CheckCircleIcon/>
      <span className="texte">{nom}</span>
      <span className="date">{date.seconds}</span>
      {/* (16 mars 2022 à 10:05:46) */}
      <DoDisturbOnIcon/>
    </div>
  );
}