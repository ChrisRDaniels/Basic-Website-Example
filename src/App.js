import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Menu from './routes/Menu';
import { Route, Routes } from 'react-router-dom';
import Breakfast from './routes/Breakfast';
import Lunch from './routes/Lunch';
import Dinner from './routes/Dinner';

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/breakfast' element={<Breakfast />} />
				<Route path='/lunch' element={<Lunch />} />
				<Route path='/dinner ' element={<Dinner />} />
			</Routes>
		</>
	);
}

export default App;
