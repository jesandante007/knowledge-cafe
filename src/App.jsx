import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App container mx-auto">
        <Header />
        <main className='grid grid-cols-1 md:grid-cols-[2fr_1fr]'>
          <Blogs />
        </main>
    </div>
  )
}

export default App
