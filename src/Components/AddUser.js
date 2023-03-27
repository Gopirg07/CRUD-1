import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import BaseApp from "../Core/Base";

export default function AddUser() {
  const { user, setUser } = AppState();
  const history = useHistory();
  const Add=()=> {
    const newUser = {
      id,
      name,
      email,
      experience,
      batch,
    };
    console.log(newUser);
    setUser([...user, newUser]);
    history.push("/");
  }
 
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [batch, setBatch] = useState("");
  return (
    <BaseApp title={"Add A New User"}>
      <div>
        <input
          placeholder="id"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />

        <input
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          placeholder="experience"
          value={experience}
          onChange={(event) => setExperience(event.target.value)}
        />

        <input
          placeholder="batch"
          value={batch}
          onChange={(event) => setBatch(event.target.value)}
        />
        <button onClick={Add}>Submit</button>
      </div>
    </BaseApp>
  );
}
