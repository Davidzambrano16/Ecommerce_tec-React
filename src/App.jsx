import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProductDetail from './pages/ProductsDetail'
import Purchased from "./pages/Purchased"
import MyNavBar from './components/MyNavBar'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProductsThunk } from './store/slices/productsSlice'
import ProtectedRoutes from './components/ProtectedRoutes'
import { getCarUserThunk } from './store/slices/cartSlice'

function App() {

  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getCarUserThunk())
  }, [])

  return (
    <div className="App">
      <HashRouter>
        {isLoading && <LoadingScreen />}
        <MyNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route element={<ProtectedRoutes/>} >
            <Route path='/purchased' element={<Purchased />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
