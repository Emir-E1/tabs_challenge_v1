export default function Tab({ name, id, onActive }) {
  return <button onClick={() => onActive(id)}>{name} </button>;
}
