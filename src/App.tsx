import { FC } from 'react';
import './App.css';
import data from './data.json';  

interface Item {
  id: number;
  name: string;
  description: string;
}

const App: FC = () => {
  const items: Item[] = data;  

  return (
    <div className="App">
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}: {item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;