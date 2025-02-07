import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import { store } from './store/store.jsx'
import Weather from './components/WeatherSearch.jsx'
import Contact from './components/contact.jsx'
import Header from './components/Header.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<App />}/>
      <Route path='/search' element={<Weather/>}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  
  </StrictMode>,
)
