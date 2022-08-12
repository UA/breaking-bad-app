import './App.css'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Quotes from './pages/Quotes'
import QuoteDetail from './pages/QuoteDetail'

function App() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Characters</Link>
                    </li>
                    <li>
                        <Link to="/quotes">Quotes</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:char_id" element={<Detail />} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/quotes/:quote_id" element={<QuoteDetail />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    )
}

export default App
