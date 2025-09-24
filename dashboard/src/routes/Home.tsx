
import MyFirstGraphic from '../components/MyFirstGraphic'
import { monthlyProfit } from '../dados'
import "./Home.css"

function Home() {
  const data = monthlyProfit
  const total = data.reduce((t, c) => c + t, 0).toLocaleString("pt-br", {style: "currency", currency: "BRL"})
  const totalNumber = data.reduce((t, c) => c + t, 0)
  const media = (totalNumber / data.length).toFixed(2)
  return (
    <div className='container'>
  
          <MyFirstGraphic data={data} color='#646cffaa' title='Ganhos' subtitle='de janeira a dezembro' total={total} media={media}/>
          
    </div>
  )
}

export default Home