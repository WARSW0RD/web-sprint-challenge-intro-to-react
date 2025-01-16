import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  
  
  
  // ❗ Create effects to fetch the data and put it in state
  useEffect(() => {
    Promise.all([axios.get(urlPeople), axios.get(urlPlanets)])
      .then(([peopleRes, planetsRes]) => {
        setPeople(peopleRes.data);
        setPlanets(planetsRes.data);
        //console.log(peopleRes, planetsRes)
      })
      .catch((err) => {
        console.error('Error fetching data', err);
        
      })
  }, [])
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {people.map((person, index) => {
        const planet = planets.find((planet) => planet.id === person.homeworld)
       
        return(
          
          <Character person={person} planet={planet}/>
          
        )
      })}
      
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
