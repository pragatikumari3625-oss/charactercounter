import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Character Counter</h2>

      <textarea
        placeholder="Type something..."
        onChange={(e) => setCount(e.target.value.length)}
      />

      <p>Characters: {count}</p>
    </div>
  );
}

export default App;