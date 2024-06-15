import './App.css';
import { Route, Routes} from 'react-router-dom';
import Gallery from "./Gallery";
import Home from "./Home";
import Sphere from "./Sphere";
import Vanc from "./Vanc";
import Tech from "./Tech"


export default function App() {

	// const parallax = useParallax({
	// 	rotate: [0, 360],
	// });

	return (
		<div>
			<Routes>
				<Route index element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/gallery/sphere" element={<Sphere />} />
				<Route path="/gallery/vanc" element={<Vanc />} />
				<Route path="/gallery/tech" element={<Tech />} />
			</Routes>
		</div>
	);
};