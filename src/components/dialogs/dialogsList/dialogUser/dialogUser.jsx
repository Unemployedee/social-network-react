import dialogUserStyle from './dialogUserStyle.module.css'
import { NavLink } from 'react-router-dom'

function DialogUser (props) {
return(
<li className={dialogUserStyle.dialogsUser}>
<NavLink to={`/dialogs/${props.id}`}>{props.userName}</NavLink>
</li>
);
}

export default DialogUser;