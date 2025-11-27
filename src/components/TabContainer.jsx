export default function TabContainer({ active, config }) {
  const current = config.find((el) => el.id === active);

  return <div>{current ? current.text : "Select a tab"}</div>;
}
