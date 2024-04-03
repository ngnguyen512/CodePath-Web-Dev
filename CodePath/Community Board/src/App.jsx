import './App.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {

  const cards = [
      {
      source: "./birria.webp",
      res_name: "Birria-Landia",
      type_of_food: "Mexican"
      },
      {
        source: "./birria.webp",
        res_name: "Mysttik Masala",
        type_of_food: "Indian"
      },
      {
        source: "./thehala.webp",
        res_name: "The Halal Guys",
        type_of_food: "Middle Eastern"
      },
      {
        source: "./nydodas.jpeg",
        res_name: "NY Dodas",
        type_of_food: "Vegetarian"
      },
      {
        source: "./tong.jpeg",
        res_name: "Tong",
        type_of_food: "Bangladeshi"
      },
      {
        source: "./soulvaki.jpeg",
        res_name: "King Soulvaki",
        type_of_food: "Greek"
      },
      {
        source: "./lingsweet.jpeg",
        res_name: "Ling's Sweet Mini Cakes",
        type_of_food: "Chinese"
      },
      {
        source: "./gussy.jpeg",
        res_name: "Uncle Gussy's",
        type_of_food: "Greek"
      },
      {
        source: "./patacon.jpeg",
        res_name: "Patacon Pisao",
        type_of_food: "Venezuelan"
      },
      {
        source: "./momono.jpeg",
        res_name: "Tibetan",
        type_of_food: "Tibetan"
        },

  ]
  return (
    <>
    <div className='Header'><Header/></div>
    <div className='container'>
     {
      cards.map((card, i) => {
        return (
          <Card 
            source={card.source}
            key = {i}
            res_name={card.res_name}
            type_of_food={card.type_of_food} />
        )
      })
    }
    </div>
    </>
  )
}


export default App
