import { useState } from "react";

const formatChemicalFormula = (atoms) => {
	const atomSymbols = {
		hidrogen: "H",
		oksigen: "O",
	};

	const formula = [];
	for (const atom in atoms) {
		if (atoms[atom] > 0) {
			const symbol = atomSymbols[atom];
			const count = atoms[atom];
			formula.push(count === 1 ? symbol : `${symbol}${count}`);
		}
	}
	return formula.join("");
};

const MoleculeBuilder = () => {
	const [atomCounts, setAtomCounts] = useState({
		hidrogen: 0,
		oksigen: 0,
		// Add more atom types as needed
	});
	const [result, setResult] = useState(null);

	// Define predefined molecules and their required atom combinations
	const molecules = [
		{ name: "Air", atoms: { hidrogen: 2, oksigen: 1 } },
		// Define more molecules here
	];

	const handleAtomClick = (atomType) => {
		if (atomCounts[atomType] < 4) {
			// Limit the number of atoms (you can change the limit)
			setAtomCounts({
				...atomCounts,
				[atomType]: atomCounts[atomType] + 1,
			});
		}
	};

	const handleMinusClick = (atomType) => {
		if (atomCounts[atomType] > 0) {
			setAtomCounts({
				...atomCounts,
				[atomType]: atomCounts[atomType] - 1,
			});
		}
	};

	const handleResultClick = () => {
		// Check if the user's atom combinations match any predefined molecules
		for (const molecule of molecules) {
			const requiredAtoms = molecule.atoms;
			let isMoleculeFormed = true;
			for (const atomType in requiredAtoms) {
				if (atomCounts[atomType] !== requiredAtoms[atomType]) {
					isMoleculeFormed = false;
					break;
				}
			}

			if (isMoleculeFormed) {
				// Set the result state with the molecule name and its atoms
				setResult({
					name: molecule.name,
					formula: formatChemicalFormula(molecule.atoms),
				});
				return; // Exit the loop when a molecule is found
			}
		}

		setResult(null);
		alert("Tidak ada molekul yang terbentuk");
	};

	return (
		<div className="molecule-builder flex flex-col justify-center items-center min-h-[80vh]">
			{/* result */}
			<div className="w-full h-auto md:w-[50%] md:h-[400px] rounded-2xl bg-primary flex flex-col justify-start items-center">
				{/* atoms */}
				<div className="flex flex-row justify-center items-center p-3 gap-2">
					{Object.keys(atomCounts).map(
						(atomType) =>
							atomCounts[atomType] > 0 && (
								<div
									key={atomType}
									className="bg-[#e2b63d] rounded-xl px-3 py-1">
									<span className="rounded-full bg-accent px-2 py-1 mr-2">
										{atomCounts[atomType]}
									</span>
									{atomType}{" "}
									<button
										onClick={() =>
											handleMinusClick(atomType)
										}>
										<span className="ml-2 text-xl bg-red-500 px-3 py-1 rounded-full">
											-
										</span>
									</button>
								</div>
							)
					)}
				</div>
				{/* result output */}
				<div className="w-[50%] h-full flex flex-col justify-center items-center">
					{result && (
						<div className="bg-blue-300 rounded-2xl py-3 px-5 text-center">
							<h1 className="text-7xl">
								{result && result.formula}
							</h1>
							<h2 className="">{result && result.name}</h2>
						</div>
					)}
				</div>
			</div>
			<div className="atoms p-5 flex flex-row flex-wrap justify-center items-center gap-2">
				<button
					onClick={() => handleAtomClick("hidrogen")}
					className="rounded-xl bg-primary px-3 py-1 text-white">
					Hidrogen (H)
				</button>
				<button
					onClick={() => handleAtomClick("oksigen")}
					className="rounded-xl bg-gray-100 px-3 py-1 text-black">
					oksigen (O)
				</button>
			</div>
			<button
				onClick={handleResultClick}
				className="rounded-xl bg-secondary px-3 py-1 text-white">
				Gabungkan!
			</button>
		</div>
	);
};

export default MoleculeBuilder;
