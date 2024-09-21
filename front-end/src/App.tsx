import { Theme } from '@radix-ui/themes'
import ProductList from './pages/ProductList'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <Theme>
      <Navbar />
      <ProductList />
    </Theme>
  )
}

export default App
