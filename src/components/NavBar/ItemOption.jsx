export default function ItemOption(props) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href="/#">
          {props.text}
        </a>
      </li>
    </>
  );
}
