
import MyFirstGraphic from '../components/MyFirstGraphic'
import { monthlyProfit } from '../dados'
import { calc } from '../utils/Media'
import { Lower } from '../utils/Lower'
import { downgrade } from '../utils/BiggerDowngrade'

import "./Home.css"

function Home() {
  const data = monthlyProfit
  
  const lower = Lower(data)
 
  const {media, totalNumber} = calc(data)

  const {down_grade, position} = downgrade(data)

  const total = totalNumber.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

  return (
    <div className='container'>
  
          <MyFirstGraphic data={data} color='#646cffaa' title='Receita mensais' total={total} media={media} lower={lower} downgrade={down_grade} position={position}/>
          
    </div>
  )
}

export default Home