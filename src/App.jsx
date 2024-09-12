import './App.css'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a la e-commerce N°1 del mundo!!'}/>
    </div>
    </>
  )
}

export default App
