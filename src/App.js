import axios from "axios";
import "./App.css";
import ModalWindow from "./Components/Modal";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
      )
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      {data.map((post) => (
        <ModalWindow
          key={post.id} // Ensure each element has a unique key
          date={post.date}
          title={post.title}
          content={post.content}
          author={post.author}
          url={post.thumbnail}
        />
      ))}
    </div>
  );
}

export default App;
