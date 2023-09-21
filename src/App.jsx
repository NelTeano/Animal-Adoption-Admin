// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'

// PAGES
import Login from './pages/Login'
import Users from './pages/Users'
import Animals from './pages/Animals'
import Inquiries from './pages/Inquiries'
import Dashboard from './pages/Dashboard'

import './App.css'

function App() {

  // PAGES ROUTES PATH AND ELEMENT SETTER
  const routes = [{
    pathname: "/Login",
    element: Login
  },
  {
    pathname: "/Users",
    element: Users
  },
  {
    pathname: "/Animals",
    element: Animals
  },
  {
    pathname: "/Inquiries",
    element: Inquiries
  },
  {
    pathname: "/Dashboard",
    element: Dashboard
  },]






  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.pathname} element={<route.element />} />
      ))}
    </Routes>





      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
