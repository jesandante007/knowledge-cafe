import './App.css'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App container mx-auto">
        <Header />
        <main className='grid grid-cols-1 md:grid-cols-[2fr_1fr]'>
          <Blog />
        </main>
    </div>
  )
}

export default App
