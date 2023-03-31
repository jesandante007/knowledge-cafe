import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import SideCart from './components/SideCart/SideCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QnAndAns from './components/QnAndAns/QnAndAns'


function App() {
  const [time, setTime] = useState(0)
  const [titles, setTitles] = useState([])

  const handleMarkAsRead = (readTime) => {
    const newTime = time + parseInt(readTime)
    setTime(newTime)
  }
  const handleBookmark = (blogTitle) => {
    const newTitles = [...titles, blogTitle]
    setTitles(newTitles)
    const exist = titles.includes(blogTitle);
    if(exist){
      toast('You Have Already Bookmarked This Blog')
    }
  }

  return (
    <div className="App container mx-auto">
        <Header />
        <main className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 px-2 md:px-0'>
          <Blogs handleMarkAsRead={handleMarkAsRead} handleBookmark={handleBookmark} />
          <SideCart time={time} titles={titles} />
        </main>
        <QnAndAns />
        <ToastContainer />
    </div>
  )
}

export default App
