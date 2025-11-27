import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TabContainer from "./TabContainer";
const configTabs = [
  {
    id: 1,
    name: "TabA",
    text: "AAAAA",
  },
  {
    id: 2,
    name: "TabB",
    text: "BBB",
  },
  {
    id: 3,
    name: "TabC",
    text: "CCC",
  },
  {
    id: 4,
    name: "TabD",
    text: "DDD",
  },
];
export default function TabApp() {
  const [tabs, setTabs] = useState(configTabs);
  const [active, setActive] = useState(undefined);
  function handleActive(id) {
    if (active === id) return;
    setActive(id);
    setTabs((prev) => {
      const clicked = prev.find((t) => t.id === id);
      const other = prev.filter((t) => t.id !== id);
      return [clicked, ...other];
    });
  }

  useEffect(() => {
    console.log("the current Tab is :", active);
  }, [active]);

  return (
    <>
      <NavBar data={tabs} onActive={handleActive} />
      <TabContainer config={configTabs} active={active} />
    </>
  );
}
