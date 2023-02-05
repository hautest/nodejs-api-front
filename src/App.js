import axios from "axios";

function App() {
  const handleButtonClick = async () => {
    const result = await axios.get("http://localhost:8080/hello-world");
    console.log(result.data);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Hello World 호출</button>
    </div>
  );
}

export default App;
