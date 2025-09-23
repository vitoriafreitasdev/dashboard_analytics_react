// App.tsx
import  MyFirstGraphic  from './components/MyFirstGraphic'
import './App.css'


function App() {
  const data = [1500, 1700, 2500, 2440, 4243, 1424, 2421, 3449, 1239, 4500, 1300, 4531]
  const total = data.reduce((t, c) => c + t, 0).toLocaleString("pt-br", {style: "currency", currency: "BRL"})
  return (
    <div className='container'>
        <MyFirstGraphic data={data} color='#646cffaa' title='Ganhos' subtitle='de janeira a dezembro' total={total}/>
    </div>
  )
}

export default App
