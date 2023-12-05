/* eslint-disable react/prop-types */
import {useState } from "react";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import Back from "../../../components/Back";
import { useEffect } from "react";

const WinScreen = () => {
	return (
		<div className="z-[9999] fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
			<div className="bg-white rounded-lg shadow-lg p-8 text-center">
				<h2 className="text-3xl font-bold text-center">
					Kamu berhasil membuat atom! 🎉
				</h2>
				<button
					className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded mt-5"
					onClick={() => window.location.reload()}>
					Mulai Ulang
				</button>
			</div>
		</div>
	);
};

const Particle = ({ type, className }) => {
	const [{ isDragging }, drag] = useDrag({
		type,
		item: { type: type },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	return (
		<div
			ref={drag}
			className={`flex justify-center items-center ${
				type === "electron" ? "bg-blue-600 text-white text-3xl" : ""
			} ${type === "proton" ? "bg-red-500 text-black text-3xl" : ""} ${
				type === "neutron" ? "bg-gray-300" : ""
			} rounded-full border-black border-2 h-16 w-16 ${className}`}
			style={{
				cursor: "pointer",
				opacity: isDragging ? 0.5 : 1,
			}}>
			{type === "proton" && <>+</>}
			{type === "neutron" && <>0</>}
			{type === "electron" && <>-</>}
		</div>
	);
};

const CircularDropTarget = ({ electronCount, setElectronCount}) => {
	const [particles, setParticles] = useState([]);
	const [hovered, setHovered] = useState(false);
	const [, drop] = useDrop({
		accept: "electron",
		hover: (item, monitor) => {
			if (monitor.isOver({ shallow: true }) && particles.length < 5) {
				setHovered(true);
			} else {
				setHovered(false);
			}
		},
		drop: (item) => {
			// Handle the drop logic for electrons on the circular line
			if (particles.length < 5) {
				console.log("Electron dropped on the circular line!");
				setParticles([...particles, item]);
				setHovered(false);
				setElectronCount(electronCount - 1);
			}
		},
	});

	return (
		<div
			ref={drop}
			className={` absolute rounded-full border-black border-2 h-auto w-[40%] aspect-square z-3 ${
				hovered ? "bg-gray-300" : "bg-accent"
			}`}>
			{particles.map((particle, index) => {
				if (index === 0) {
					return (
						<Particle
							key={index}
							type="electron"
							className={`absolute top-32 left-12`}
						/>
					);
				} else if (index === 1) {
					return (
						<Particle
							key={index}
							type="electron"
							className={`absolute -bottom-10 left-1/2`}
						/>
					);
				} else if (index === 2) {
					return (
						<Particle
							key={index}
							type="electron"
							className={`absolute top-1/2 -left-8`}
						/>
					);
				} else if (index === 3) {
					return (
						<Particle
							key={index}
							type="electron"
							className={`absolute top-1/2 -right-10`}
						/>
					);
				} else if (index === 4) {
					return (
						<Particle
							key={index}
							type="electron"
							className={`absolute top-32 right-12`}
						/>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

const InnerCircleDropTarget = ({ electronCount, setElectronCount }) => {
	const [particles, setParticles] = useState([]);
	const [hovered, setHovered] = useState(false);

	const [, drop] = useDrop({
		accept: "electron",
		hover: (item, monitor) => {
			if (monitor.isOver({ shallow: true }) && particles.length < 3) {
				setHovered(true);
			} else {
				setHovered(false);
			}
		},
		drop: (item) => {
			// Handle the drop logic for electrons on the inner circle
			if (particles.length < 3) {
				console.log("Electron dropped on the inner circle!");
				setParticles([...particles, item]);
				setElectronCount(electronCount - 1);
				setHovered(false);
			}
		},
	});

	return (
		<div
			ref={drop}
			className={`absolute rounded-full border-black border-2 h-auto w-[20%] aspect-square z-40 ${
				hovered ? "bg-gray-300" : "bg-accent"
			}`}>
			{particles.map((particle, index) => {
				if (index === 0) {
					return (
						<Particle
							key={index}
							type="electron"
							className={`absolute top-10 left-0`}
						/>
					);
				} else if (index === 1) {
					return (
						<Particle
							key={index}
							type="electron"
							className={`absolute -bottom-8 left-1/2`}
						/>
					);
				} else if (index === 2) {
					return (
						<Particle
							key={index}
							type="electron"
							className={`absolute bottom-14 right-0`}
						/>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
};

const CenterDrop = ({ setProtonCount, setNeutronCount, protonCount, neutronCount }) => {
	const [protons, setProtons] = useState([]);
	const [neutrons, setNeutrons] = useState([]);

	const [, drop] = useDrop({
		accept: ["proton", "neutron"],
		drop: (item) => {
			// Handle the drop logic for protons and neutrons in the center
			if (item.type === "proton" && protons.length < 4) {
				console.log("Proton dropped in the center!");
				setProtons([...protons, item]);
				setProtonCount(protonCount - 1);
			} else if (item.type === "neutron" && neutrons.length < 4) {
				console.log("Neutron dropped in the center!");
				setNeutrons([...neutrons, item]);
				setNeutronCount(neutronCount - 1);
			}
		},
	});

	return (
		<div
			ref={drop}
			className="particle-list absolute flex justify-center items-center flex-wrap w-[150px] min-h-[10rem] z-50 ">
			{protons.map((particle, index) => (
				<Particle
					key={index}
					type={particle.type}
					className="-m-[12px]"
				/>
			))}
			{neutrons.map((particle, index) => (
				<Particle
					key={index}
					type={particle.type}
					className="-m-[12px]"
				/>
			))}
		</div>
	);
};

const Atom = () => {
	const [protonCount, setProtonCount] = useState(4);
	const [neutronCount, setNeutronCount] = useState(4);
	const [electronCount, setElectronCount] = useState(8);

		useEffect(() => {
			const handleResize = () => {
				if (window.innerWidth < 1000) {
					// Handle the logic for screen size below 1000px
					return alert("Harap gunakan laptop atau komputer");
				}
			};

			window.addEventListener("resize", handleResize);

			// Cleanup the event listener on component unmount
			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}, []);

		if (protonCount === 0 && neutronCount === 0 && electronCount === 0) {
			return <WinScreen />;
		}


	return (
		<>
		<Back/>
			<div className="h-screen mx-auto bg-accent pt-16">
				<h2 className="text-3xl pt-5 px-5"> Susunlah Atom di bawah ini agar sesuai</h2>

				<div className="atom-container relative min-h-[80vh] flex flex-col justify-center items-center ">
					<div className="self-start p-6 rounded-xl bg-primary ms-2 md:block hidden">
						<h2 className="mb-3">Partikel</h2>
						<div className="flex justify-between items-center">
							<Particle type="proton" />{" "}
							<span className="mx-2 text-white">
								{protonCount}
							</span>
						</div>
						<div className="flex justify-between items-center">
							<Particle type="neutron" />{" "}
							<span className="mx-2 text-white">
								{neutronCount}
							</span>
						</div>
						<div className="flex justify-between items-center">
							<Particle type="electron" />{" "}
							<span className="mx-2 text-white">
								{electronCount}
							</span>
						</div>
					</div>
					{/* particle mobile version */}
					<div className="self-center p-6 rounded-xl bg-primary ms-2 md:hidden absolute top-0">
						<h2 className="mb-3">Partikel</h2>
						<div className="flex justify-between items-center">
							<Particle type="proton" />{" "}
							<span className="mx-2 text-white">
								{protonCount}
							</span>
							<Particle type="neutron" />{" "}
							<span className="mx-2 text-white">
								{neutronCount}
							</span>
							<Particle type="electron" />{" "}
							<span className="mx-2 text-white">
								{electronCount}
							</span>
						</div>
						</div>
					<CircularDropTarget
						electronCount={electronCount}
						setElectronCount={setElectronCount}
					/>
					<InnerCircleDropTarget
						electronCount={electronCount}
						setElectronCount={setElectronCount}
					/>
					<CenterDrop
						setProtonCount={setProtonCount}
						setNeutronCount={setNeutronCount}
						protonCount={protonCount}
						neutronCount={neutronCount}
					/>
				</div>
			</div>
		</>
	);
};

export default Atom;
