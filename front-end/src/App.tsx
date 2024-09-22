import { Theme } from '@radix-ui/themes'
import ProductList from './pages/ProductList'
import { BrowserRouter } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
    <Theme>
      <Navbar />
      <ProductList />
    </Theme>
    </BrowserRouter>
  )
}

export default App
