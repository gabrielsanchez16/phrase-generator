import { useEffect, useState } from 'react'
import './App.css'
import QuotesCard from './components/QuotesCard'
import quotes from './json/quotes.json'


const color = [
'#FD6ACD','#C55672', '#172656',
'#9587D8','#E1C12E','#BDC073', 
'#17E0E8','#54E30C','#7E75FC',
'#5F9504','#939128', '#02F7EC', 
'#172540', '#3428C3', '#CA7505', 
'#C0E8CF', '#FB4DAC', '#D7F7B8', 
'#FC2643', '#EAF164', '#956935', 
'#EE0CA2', '#F39BF8', '#785F86', 
'#CA179C', '#20A7D7', '#68BAEC', 
'#446FB1', '#99A7CA', '#990167', 
'#4728B6', '#27C1ED', '#73EF19', 
'#C2200F', '#79CB4A', '#ACF786', 
'#FC1FFA', '#11EFB7', '#3A6EFA', 
'#4B859F', '#EFF48E', '#C2671D', 
'#54A35B', '#8B0344', '#19D1D4', 
'#F803BF', '#B1AE96', '#9A58D9', 
'#33B3E3', 
]

function App() {

  const random = array =>{
    return Math.floor(Math.random()*array.length)
  }

  const [phrase, setPhrase] = useState({});

  const [color1, setColor1] = useState("");

  const [button, setButton] = useState(0);

 useEffect(() => {
  let nombre = random(quotes);
  let colorIndex = random(color);
  setPhrase(quotes[nombre]);
  setColor1(color[colorIndex]);
 }, [button])
 

  const changeBackground = {
    backgroundColor:color1
  }
  

  return (
    <div className="App" style={changeBackground}>
     <QuotesCard
    phrase={phrase}
    color1 = {color1}
    button = {button}
    setButton = {setButton}
      />
    </div>
  )
}

export default App
