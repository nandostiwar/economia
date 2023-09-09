import './App.css'
import Login from './components/Login';
import Content from './components/horoscopo';
import { zodiacSigns } from './horoscopo';

function App() {
  const signsList = zodiacSigns.map(sign => {
    return(
      <Content name={sign.name} date={sign.date} description={sign.description} image={sign.image}/>
    )
  })

  return (
    <div className='App'>
      <h1>Horoscope App</h1>
      <div className='Container'>
        <Login/>
      </div>
    </div>
  );
}

export default App
