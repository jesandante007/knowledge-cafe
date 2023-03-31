import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import SideCart from './components/SideCart/SideCart'

function App() {
  return (
    <div className="App container mx-auto">
        <Header />
        <main className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6'>
          <Blogs />
          <SideCart />
        </main>
    </div>
  )
}

export default App
