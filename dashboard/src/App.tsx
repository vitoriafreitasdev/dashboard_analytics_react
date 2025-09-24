// App.tsx
import  MyFirstGraphic  from './components/MyFirstGraphic'
import './App.css'


function App() {
  const data = [4566, 2700, 3500, 2840, 4243, 2424, 5421, 3449, 1239, 4500, 1300, 4531]
  const total = data.reduce((t, c) => c + t, 0).toLocaleString("pt-br", {style: "currency", currency: "BRL"})
  const totalNumber = data.reduce((t, c) => c + t, 0)
  const media = totalNumber / data.length
  return (
    <div className='container'>
        <MyFirstGraphic data={data} color='#646cffaa' title='Ganhos' subtitle='de janeira a dezembro' total={total} media={media}/>
    </div>
  )
}

export default App
