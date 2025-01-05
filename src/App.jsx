import { useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import { useEffect } from "react"
function App() {
  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
  const[showModal,setShowModal] = useState(false)
  const [data,setData] = useState(null)

  
  function handleDisplayModal()
  {
    setShowModal(!showModal)
  }

  useEffect(()=>
  {
    async function fetchAPIData()
    {
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`      
      localStorage.clear()
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        console.log(apiData)
        setData(apiData)
      }
      catch(err)
      {
        console.log(err.message)
      }
    }
    fetchAPIData()
  },[])
  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingState"><i className="fa-solid fa-gear"></i></div>)}
        {
          showModal && (
            <SideBar data = {data} handleDisplayModal={handleDisplayModal}/>
          )
        }
      {data &&(<Footer handleDisplayModal={handleDisplayModal} data={data}/>)}
    </>
  )
}

export default App
