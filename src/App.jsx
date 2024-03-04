import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
// import './App.css';
import Layout from './View/Layout.jsx';
import NoMatch from './View/NoMatch.jsx';
import Home from './View/Home.jsx';
import Counter from './Components/Tab/Counter.jsx';
import Tab from './Components/Tab/Tab.jsx';
import Accordion from './Components/Accordion/Accordion.jsx';
import Blog from './View/Blog.jsx';
import BlogDetail from './View/BlogDetail.jsx';
import CataloguePage from './View/CataloguePage.jsx';
import CartDetail from './View/CartDetail.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NoMatch />,

    children: [
      { index: true, element: <Home /> },
      { path: "tab", element: <Tab /> },
      { path: "accordion", element: <Accordion /> },
      { path: "blog", element: <Blog /> },
      { path: "catalogue", element: <CataloguePage /> },
      { path: "counter", element: <Counter /> },
      { path: "blog/:title", element: <BlogDetail /> },
      { path: "cart", element: <CartDetail /> },
    ]

  },

  { path: "*", element: <NoMatch /> },
]);

function App() {

  return (
    <>
      <RouterProvider router={route} />
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
        <br /><br />
        <h2>Day-1</h2>
        <br /><br />
        <Counter></Counter>
        <Tab></Tab>
        <br /><br />
        <h2>Day-2</h2>
        <br /><br />
        <Accordion></Accordion>
        <br /><br />
        <h2>Day-3</h2>
        <br /><br />
        <Blog></Blog>
        <br /><br />
        <Catalogue></Catalogue>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
