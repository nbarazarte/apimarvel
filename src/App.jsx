import axios from 'axios'
import { useEffect, useState, useSyncExternalStore } from 'react'
import './App.css'
import Marvel from './components/Marvel'

function App() {
const [marvel, setMarvel] = useState()
const [nextprev, setNextprev] = useState(0)
const [total, setTotal] = useState(0)

  useEffect(() => {

    let url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=117af87dcc4536f58b85b6f14da9904c&hash=1c7081a622a8cf910366b0a3280f7216&limit=100&offset=${nextprev}&orderBy=name`;

    axios.get(url)
    .then(res => {
      setMarvel(res.data.data)
      setTotal(res.data.data.total)
    })
    .catch(err => console.log(err))

  }, [nextprev])

  const handlerNext = () => {
    setNextprev( nextprev + 100)
  }

  const handlerPrev = () => {
    setNextprev( nextprev - 100)
  }

  const handlerPager = (e) => {
    setNextprev( 100 * Number(e.target.value))
  }

  const limitPage = total / 100

  let numeros = []
  for (let index = 0; index < limitPage; index++) {
    
    numeros.push(  <button key={index} onClick={handlerPager} value={index}>{index}</button> )
  }

  return (
    <div className="App">
        <h1>Personajes de Marvel</h1>
        {
          nextprev != 0
          && <button key='prev' onClick={handlerPrev} >Anterior</button>
        }
        {numeros}
        <button key='next' onClick={handlerNext}>Siguiente</button> {total} 
        <Marvel marvel={marvel}/>
    </div>
  )
}

export default App
