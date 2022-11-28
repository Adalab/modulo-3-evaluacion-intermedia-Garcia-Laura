// Fichero src/components/App.js

import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";
// import ls from "../data/localstorage.js";

const App = () => {
  // Estados
  const [data, setData] = useState(contacts.results);

  const [newStudents, setNewStudents] = useState({
    name: "",
    counselor: "",
    speciality: "",
    id: crypto.randomUUID(),
  });

  const [search, setSearch] = useState("");

  // funciones Handle
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNewStudents = (ev) => {
    setNewStudents({ ...newStudents, [ev.target.id]: ev.target.value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newStudents]);
  };
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };

  // Funciones de renderizado
  const htmlData = data
    .filter(
      (students) =>
        students.name.toLowerCase().includes(search.toLowerCase()) ||
        students.lastname.toLowerCase().includes(search.toLowerCase())
    )
    .map((students, id) => {
      return (
        <tr key={id}>
          <td className="students">{students.name}</td>
          <td className="teacher">{students.counselor}</td>
          <td className="speciality">{students.speciality}</td>
        </tr>
      );
    });

  return (
    <div>
      <header>
        <h1 className="tittle"> Adalabers</h1>
      </header>
      <main>
        <form>
          <input
            className="search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar adalabers por nombre"
            onInput={handleSearch}
            value={search}
          />
          <input
            className="search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar tutores por nombre"
            onInput={handleSearch}
            value={search}
          />
        </form>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
            </tr>
          </thead>

          <tbody> {htmlData}</tbody>
        </table>

        <form className="new-contact__form" onSubmit={handleSubmit}>
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onInput={handleNewStudents}
            value={newStudents.name}
          />
          <input
            className="new-contact__input"
            type="text"
            name="counselor"
            id="counselor"
            placeholder="Tutora"
            onInput={handleNewStudents}
            value={newStudents.counselor}
          />
          <input
            className="new-contact__input"
            type="text"
            name="speciality"
            id="speciality"
            placeholder="especialidad"
            onInput={handleNewStudents}
            value={newStudents.speciality}
          />
        </form>
        <button className="button" onClick={handleClick}>
          Añadir
        </button>
      </main>
    </div>
  );
};

export default App;
