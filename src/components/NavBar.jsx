import Tab from "./Tab";
import { useState } from "react";
export default function NavBar({ data, onActive }) {
  return (
    <div>
      {" "}
      {data.map((el) => (
        <Tab key={el.id} id={el.id} name={el.name} onActive={onActive} />
      ))}
    </div>
  );
}
