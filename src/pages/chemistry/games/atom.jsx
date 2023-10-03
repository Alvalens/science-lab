/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";

const Particle = ({ type, className }) => {
	const [{ isDragging }, drag] = useDrag({
		type,
		item: { type },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	return (
		<div
			ref={drag}
			className={`flex justify-center items-center ${
				type === "electron" ? "bg-blue-600" : ""
			} ${type === "proton" ? "bg-red-500" : ""} ${
				type === "neutron" ? "bg-stone-300" : ""
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

const CircularDropTarget = () => {
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
			}
		},
	});

	return (
		<div
			ref={drop}
			className={`absolute rounded-full border-black border-2 h-auto w-[50%] aspect-square z-3 ${
				hovered ? "bg-gray-300" : ""
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

const InnerCircleDropTarget = () => {
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
				setHovered(false);
			}
		},
	});

	return (
		<div
			ref={drop}
			className={`absolute rounded-full border-black border-2 h-auto w-[25%] aspect-square z-40 ${
				hovered ? "bg-gray-300" : "bg-white"
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

const CenterDrop = () => {
	const [protons, setProtons] = useState([]);
	const [neutrons, setNeutrons] = useState([]);

	const [, drop] = useDrop({
		accept: ["proton", "neutron"],
		drop: (item) => {
			// Handle the drop logic for protons and neutrons in the center
			if (item.type === "proton" && protons.length < 4) {
				console.log("Proton dropped in the center!");
				setProtons([...protons, item]);
			} else if (item.type === "neutron" && neutrons.length < 4) {
				console.log("Neutron dropped in the center!");
				setNeutrons([...neutrons, item]);
			}
		},
	});

	return (
		<div
			ref={drop}
			className="particle-list absolute flex justify-center items-center flex-wrap w-[150px] min-h-[10rem] z-50">
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
	return (
		<>
			<div className="h-screen mx-auto">
				<h2>Build an Atom</h2>

				<div className="atom-container relative h-full flex flex-col justify-center items-center">
					{" "}
					<div className="self-start">
						<Particle type="proton" />
						<Particle type="neutron" />
						<Particle type="electron" />
					</div>
					<CircularDropTarget />
					<InnerCircleDropTarget />
					<CenterDrop />
				</div>
			</div>
		</>
	);
};

export default Atom;
