import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import BaseApp from "../Core/Base";

export default function EditUser() {
  const { user, setUser } = AppState();
  const history = useHistory();
  const { id } = useParams();

  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [batch, setBatch] = useState("");

  const selectedUser = user.find((per) => per.id === id);
  useEffect(() => {
    setIdx(selectedUser.id);
    setName(selectedUser.name);
    setEmail(selectedUser.email);
    setExperience(selectedUser.experience);
    setBatch(selectedUser.batch);
  }, []);

  const Edit = () => {
    const EditedIndex = user.findIndex((per) => per.id === id);
    console.log(EditedIndex);

    const EditedUser = {
      id:idx,
      name,
      email,
      experience,
      batch,
    };
    console.log(EditedUser);

    user[EditedIndex] = EditedUser;
    setUser([...user]);
    
    history.push("/");
  };

  return (
    <BaseApp title={"Edit User"}>
      <div>
        <input
          placeholder="id"
          value={idx}
          onChange={(event) => setIdx(event.target.value)}
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
        <button onClick={Edit}>Submit</button>
      </div>
    </BaseApp>
  );
}
