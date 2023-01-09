import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home'
import Authentication from './routes/authentication/authentication'
import Navigation from './routes/Navigation/Navigation'

import './index.scss'

const Shop = () => {
  return <h1>shopping</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
  )
}

export default App
