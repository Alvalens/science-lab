import { Atom } from "lucide-react";
import { Link } from "react-router-dom";
const Chemistry = () => {
	return (
		<>
			{/* main section */}
			<div className="bg-accent">
				<div className="container mx-auto">
					<div className="flex flex-col items-center justify-center h-screen">
						<h1 className="text-6xl font-bold">Materi Kimia</h1>
						<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 w-full  ">
							{/* list materi */}
							<Link
								to="/kimia/atom"
								className="hover:scale-105 transition-all duration-300 ease-in-out">
								<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-14 ">
									<Atom className="w-1/2 h-1/2 mx-auto text-gray-300 pt-10 hover:scale-105 transition-all duration-300 ease-in-out" />
									<div className="px-5 pb-5">
										<h5 className="text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-10">
											Struktur Atom
										</h5>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* new section */}
		</>
	);
};

export default Chemistry;
