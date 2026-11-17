import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // useState — count qiymatini saqlash uchun
  const [count, setCount] = useState(0);

  // useEffect — har safar count o'zgarganda document.title yangilanadi
  useEffect(() => {
    document.title = `Bosildi: ${count}`;
  }, [count]);

  return (
    <div className="container">
      <h1>📋 Document Title Tracker</h1>
      <p className="description">
        Tugmani bosing va brauzer tabining nomiga qarang!
      </p>

      <div className="counter-box">
        <span className="count">{count}</span>
      </div>

      <div className="btn-row">
        <button className="btn decrement" onClick={() => setCount(count - 1)}>
          − 1
        </button>
        <button className="btn reset" onClick={() => setCount(0)}>
          Reset
        </button>
        <button className="btn increment" onClick={() => setCount(count + 1)}>
          + 1
        </button>
      </div>

      <p className="hint">
        💡 <code>document.title</code> hozir: <strong>"Bosildi: {count}"</strong>
      </p>
    </div>
  );
}

export default App;
