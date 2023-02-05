import axios from "axios";

function App() {
  const handleButtonClick = async () => {
    const result = await axios.get("http://localhost:8080/hello-world");
    console.log(result.data);
  };

  const handlePostButtonClick = async () => {
    const result = await axios.post("http://localhost:8080/post", {
      value: "value11",
    });
    console.log(result);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      <button onClick={handleButtonClick}>Hello World 호출</button>
      <button onClick={handlePostButtonClick}>Post 버튼</button>
    </div>
  );
}

export default App;
