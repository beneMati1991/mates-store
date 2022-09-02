import { Link } from 'react-router-dom';

export default function ItemOption(props) {
  return (
    <>
      <li className="nav-item">
        <Link className='nav-link' to={props.ruta}>{props.text}</Link>
      </li>
    </>
  );
}
