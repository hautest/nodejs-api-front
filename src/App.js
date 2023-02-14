import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:8080/create-list", {
      value: inputRef.current.value,
    });
    setList(result.data);
    inputRef.current.value = "";
  };

  const handleCheck = async (id) => {
    const result = await axios.patch("http://localhost:8080/update-list", {
      id,
    });
    setList(result.data);
  };

  const handleDelete = async (id) => {
    const result = await axios.delete(`http://localhost:8080/list/${id}`);
    setList(result.data);
  };

  useEffect(() => {
    const init = async () => {
      const result = await axios.get("http://localhost:8080/list");
      setList(result.data);
    };
    init();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <input ref={inputRef} />
        <button>만들기</button>
      </form>
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                textDecoration: item.checked ? "line-through" : "none",
              }}
              onClick={() => handleCheck(item.id)}
            >
              {item.value}
            </span>
            <button onClick={() => handleDelete(item.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
