import { Link } from "react-router-dom";
import { FlaskConical } from "lucide-react";

const Home = () => {
	return (
		<>
			{/* main section */}
			<div className="bg-accent">
				<div className="container mx-auto">
					<div className="flex flex-col items-center justify-center h-screen">
						<h1 className="text-6xl font-bold">
							Welcome to Science Lab
						</h1>
						<a
							href="#menu"
							className="mt-4 text-blue-500 hover:underline">
							Go to menu
						</a>
					</div>
				</div>
				{/* new section */}
				<div className="container mx-auto" id="menu">
					<div className="flex flex-col items-center justify-center h-screen">
						<h1 className="text-6xl font-bold">Menu</h1>
						<div className="grid grid-cols-1 md:grid-cols-3 w-full h-[50%] ">

							<Link to="/kimia" className=" p-4 m-4 bg-primary rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
							<div className=" p-4 m-4 bg-primary rounded-xl hover:scale-105 transition-all duration-300 ease-in-out">
								<FlaskConical className="w-1/2 h-1/2 mx-auto text-gray-300 pt-10" />
								<h2 className="text-5xl text-center pt-10">Kimia</h2>
							</div>
							</Link>
							<div className="bg-primary p-4 m-4">
								Coming Soon
							</div>
							<div className="bg-primary p-4 m-4">
								Coming Soon
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
