import { Link } from "react-router-dom";
import { FlaskConical } from "lucide-react";
import HeaderImage from"../assets/images/header.png";
import Wave from "../components/Wave";
import Footer from "../components/Footer";
const Home = () => {
	return (
		<>
			{/* main section */}
			<div className="bg-white">
				<div className="container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2">
					<div className="flex flex-col items-start justify-center">
						<h1 className="text-3xl md:text-6xl font-bold z-10  p-4">
							Welcome to Science Lab
						</h1>
						<div className="flex justify-center items-center md:hidden ">
							<img
								src={HeaderImage}
								className="top-0 right-0 w-[80%] h-auto object-cover z-0"
							/>
						</div>
						<p className=" text-lg md:text-xl z-10  p-4 ">
							Science Lab adalah sebuah aplikasi yang berisi
							materi-materi pelajaran IPA yang disajikan secara
							interaktif dan menarik.
						</p>
						<div className="flex flex-row items-center justify-center z-10  p-4">
							<a
								href="#menu"
								className="font-bold hover:underline z-10 bg-secondary px-4 py-2 rounded-md shadow-2xl">
								Go to menu
							</a>
						</div>
					</div>
					<div className="hidden justify-center items-center md:flex ">
						<img
							src={HeaderImage}
							className="top-0 right-0 w-[100%] h-auto object-cover z-0"
						/>
					</div>
				</div>
				<Wave color="#DBF3FF" />
				{/* new section */}
				<div className="bg-accent">
					<div className="container mx-auto" id="menu">
						<div className="flex flex-col items-center justify-center h-screen">
							<h1 className="text-6xl font-bold mb-5">Menu</h1>
							<div className="grid grid-cols-1 md:grid-cols-3 w-full h-[50%] ">
								<Link
									to="/kimia"
									className=" p-4 m-4 bg-emerald-500 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
									<div className=" p-4 m-4 bg-emerald-600 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
										<FlaskConical className="w-1/2 h-1/2 mx-auto text-emerald-100 pt-10 hover:scale-105 transition-all duration-300 ease-in-out" />
										<h2 className="text-5xl text-center pt-10 text-emerald-100">
											Kimia
										</h2>
									</div>
								</Link>
								<div className="bg-secondary p-4 m-4">
									Coming Soon
								</div>
								<div className="bg-primary p-4 m-4">
									Coming Soon
								</div>
							</div>
						</div>
					</div>
				</div>
				<Wave color="#DBF3FF" rotate="true" />
			</div>
			<Footer />
		</>
	);
};

export default Home;
