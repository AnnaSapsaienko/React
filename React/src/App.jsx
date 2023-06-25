import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <head>
      <title>React</title>
    </head>
    <body>
      <header>
        <h1>Projekt "REACT"</h1>
        <h2>Anna Sapsaienko </h2>
        <h3>nr ALBUMU: 114727</h3>
      </header>
      <section>
        Mam na imię Anna Sapsaienko. Na tej stronie będą umieszczone niektóre moję zdjęcia żeby zaliczyc pracę z przedmiotu "Wybrane środowiska programowania". :)
      </section>
      <table>
        <tr>
          <td>
            <img src="src/photo1677358438.jpeg" alt="zdjecie lasu" />
          </td>
          <td>
            <img src="src/photo1677358460.jpeg" alt="zdjecie drogi" />
          </td>
        </tr>
        <tr>
          <td>
            <img src="src/photo1677358479.jpeg" alt="zdjecie jeziora" />
          </td>
          <td>
            <img src="src/photo1677359952.jpeg" alt="manufaktura" />
          </td>
        </tr>
      </table>
      
    </body>
    
    </>
  )
}

export default App
