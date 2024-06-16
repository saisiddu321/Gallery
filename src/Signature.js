import './App.css';
import { motion } from "framer-motion";

export default function Signature() {
	const draw = {
		hidden: { pathLength: 0, opacity: 0},
		visible: (i) => {
			const delay = i + 1;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: {delay, type: "spring", duration: 7},
					opacity: {delay, duration: 0.01},
				},
			};
		},
	};
	return (
		<motion.div>
			<motion.svg
				width="100"
				height="100"
				viewBox="0 0 400 300"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				initial="hidden"
				animate="visible"
			>
				<motion.path
					d="M53 15.8943C52.7974 12.0219 37.6732 12.0117 34.7255 12.0117C29.3346 12.0117 22.826 11.7106 17.746 14.1687C14.8713 15.5597 12.3469 17.4384 9.592 19.049C7.70779 20.1505 1.29787 26.133 3.42856 29.7263C4.3417 31.2663 9.18186 31.3155 10.5993 31.5328C15.1171 32.2254 19.764 31.9103 24.3171 31.9103C31.5724 31.9103 45.7869 30.3665 50.6497 38.4893C51.9871 40.7231 51.2754 44.1684 49.9542 46.1737C46.7449 51.0447 37.8746 51.1388 33.2386 51.8089C24.8538 53.021 15.4455 54.5183 7.86528 49.4901C4.752 47.425 4.16511 46.1412 7.62546 45.257C10.3613 44.5579 12.3968 45.0143 7.67343 45.0143"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M103.555 38.4462C96.7717 36.5644 88.1987 33.0509 81.8965 37.7196C78.9813 39.8792 77.2896 44.954 78.0927 48.4521C80.6644 59.6534 97.4822 55.4626 102.443 49.4086C103.926 47.5988 103.574 43.1893 103.02 41.2171C101.087 34.3382 98.2636 28.3778 98.0076 21.0588C97.8048 15.2589 98.85 9.4056 97.7171 3.65578C97.3908 1.99983 96.6711 2.26812 96.4936 3.92907" 
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M141.038 40.4887C133.297 38.4817 123.501 34.8221 116.382 39.3051C113.089 41.3787 111.222 46.3622 112.176 49.8398C115.231 60.9751 134.322 57.1907 139.898 51.3087C141.566 49.5503 141.114 45.1809 140.461 43.2181C138.183 36.3722 134.901 30.4157 134.526 23.1704C134.229 17.4289 135.352 11.6613 133.997 5.94939C133.606 4.30435 132.79 4.55429 132.607 6.19346"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M221.805 97.7033C216.08 96.4436 208.795 93.9254 203.754 97.9904C201.422 99.8707 200.234 104.08 201.053 106.901C203.678 115.935 217.488 111.833 221.354 106.692C222.51 105.155 222.026 101.572 221.479 99.9857C219.574 94.452 216.967 89.704 216.437 83.7432C216.018 79.0196 216.634 74.2017 215.443 69.5568C215.1 68.219 214.512 68.4671 214.437 69.8294"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M144.758 12C144.994 17.8453 146.859 24.2503 147.639 30.0571C148.412 35.8122 148.536 41.7716 151.031 46.9413C155.058 55.2864 150.736 48.5855 150.854 42.5868C151.058 32.2831 167.477 32.4972 172.493 37.18C175.008 39.5272 179.128 51.3272 175.178 53.4355"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M269.378 15C269.231 20.8482 270.672 27.3617 271.069 33.2072C271.463 39.0005 271.196 44.9553 273.346 50.2774C276.818 58.8686 272.945 51.8988 273.456 45.9207C274.335 35.6525 290.704 36.9427 295.403 41.9445C297.758 44.4514 301.095 56.4962 297.016 58.3409"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M127.925 97.0739C127.692 87.7408 110.677 88.2835 107.57 96.2739C104.886 103.174 112.224 107.573 118.325 106.496C121.888 105.867 123.269 104.409 124.103 101.074C124.58 99.1645 124.229 93.3148 124.77 95.2072C125.372 97.3158 134.226 104.373 135.925 102.674"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M201.925 41.8967C201.692 32.5636 184.677 33.1063 181.57 41.0966C178.886 47.9972 186.224 52.3954 192.325 51.3189C195.888 50.6901 197.269 49.2315 198.103 45.8966C198.58 43.9873 198.229 38.1375 198.77 40.03C199.372 42.1386 208.226 49.1955 209.925 47.4966"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M217 31.6093C217.433 37.2399 217.8 42.8494 217.8 48.4982C217.8 48.5513 217.598 51.7223 218.2 51.1204C219.454 49.866 218.705 45.2712 219.4 43.4315C221.715 37.303 225.473 32.6988 231.8 30.4537C234.868 29.3651 241.293 27.6495 243.4 30.8093"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M79 76.9773C79.1544 88.5547 82.2 99.9387 82.2 111.377"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M84.6 68.1772C90.6233 68.1772 104.345 68.5685 106.511 75.0662C110.618 87.3871 91.6757 89.3337 83.7999 90.5773"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M77 80.3772C77 78.07 77.8719 73.1197 79.8 71.5773C80.8368 70.7479 80.3062 69.1772 82.2 69.1772C84.7333 69.1772 87.2667 69.1772 89.8 69.1772"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M140.408 103.275C133.744 95.7782 142.032 83.4646 151.608 88.2527C156.365 90.6312 157.908 94.5034 159.208 99.186C160.089 102.358 159.554 97.0155 159.653 96.0305C160.122 91.3335 165.58 88.9694 169.83 88.875C175.451 88.7501 179.887 92.7211 182.364 97.6749C183.495 99.937 183.608 113.396 183.608 106.475"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M191 94.1772C191 98.7106 191 103.244 191 107.777C191 110.853 198.207 111.78 194.2 110.177"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M191 82.1772V82.9773"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M65 36C65 40.5333 65 45.0667 65 49.6C65 52.6761 72.2068 53.6027 68.2 52"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M67 25V25.8"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M233 90.1772C233 94.7106 233 99.2439 233 103.777C233 106.853 240.207 107.78 236.2 106.177"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M235 79.1772V79.9773"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M258.044 6C254.136 23.0244 250.876 44.4608 261.252 59.0633"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
				<motion.path
					d="M237 21.6887C237.917 19.0484 258.573 24.7421 261.78 25.4784"
					stroke="black"
					strokeWidth="5"
					strokeLinecap="round"
					variants={draw}
				/>
			</motion.svg>

		</motion.div>
	)
};
