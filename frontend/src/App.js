import api from "../services/index"
function App() {
  api.get("api/get/produtos");
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
