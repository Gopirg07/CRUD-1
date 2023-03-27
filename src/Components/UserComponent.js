import React from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Context/AppProvider";
import BaseApp from "../Core/Base";
import { data } from "../datas/data";

export default function UserComponent() {
  const { user, setUser } = AppState();
  const history = useHistory();

  function deleteUser(idx) {
    const alterList = user.filter((per) => per.id !== idx);
    console.log("deleted");
    setUser(alterList);
  }
  return (
    <BaseApp title="User Details">
      <div className="user-content">
        {user &&
          user?.map((person, idx) => (
            <div key={idx} className="user-card">
              <h1>{person.name}</h1>
              <p>Batch : {person.batch}</p>
              <p>Email : {person.email}</p>
              <p>Exp : {person.experience}</p>
              <div className="btn-group">
                <button
                  onClick={() => history.push(`/edit/${person.id}`)}
                  className="btn edit-btn"
                >
                  Edit
                </button>

                <button
                  className="btn view-btn"
                  onClick={() => history.push(`/user/${idx}`)}
                >
                  View
                </button>

                <button
                  className="btn del-btn"
                  onClick={() => deleteUser(person.id)}
                >
                  Delete
                </button>
              </div>
              
            </div>
          ))}
      </div>
    </BaseApp>
  );
}
