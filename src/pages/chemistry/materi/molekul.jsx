
const MateriMolekul = () => {
	return (
		<>
			<div className="bg-accent">
				<div className="container mx-auto">
					<div className="flex flex-col items-center justify-center min-h-screen">
						<h1 className="text-3xl font-bold">Molekul</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 w-full space-x-3">
							{/* card */}
							<div className="flex flex-col justify-between">
								<div className="w-full min-h-[40%]  bg-white border border-gray-200 rounded-lg shadow mt-14 ">
									<div className="px-5 pb-5">
										<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
											Pengertian Molekul
										</h5>
										<p>
											Molekul adalah partikel terkecil
											dari suatu zat yang masih memiliki
											sifat-sifat zat tersebut. Molekul
											terdiri dari dua atau lebih atom
											yang terikat bersama. Molekul dapat
											terdiri dari atom-atom yang sama
											atau atom-atom yang berbeda. Molekul
											yang terdiri dari atom-atom yang
											sama disebut molekul unsur.
											Sedangkan molekul yang terdiri dari
											atom-atom yang berbeda disebut
											molekul senyawa.
										</p>
									</div>
								</div>
								<div className="w-full min-h-[40%]  bg-white border border-gray-200 rounded-lg shadow mt-5 ">
									<div className="px-5 pb-5">
										<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
											Contoh Molekul
										</h5>
										<p>
											Contoh molekul unsur adalah molekul
											oksigen (O2), molekul hidrogen (H2),
											dan molekul nitrogen (N2). Contoh
											molekul senyawa adalah molekul air
											(H2O), molekul garam dapur (NaCl),
											dan molekul karbon dioksida (CO2).
										</p>
									</div>
								</div>
							</div>
							{/* gambar atom */}
							<div className="w-full  bg-white border border-gray-200 rounded-lg shadow mt-14 ">
								<div className="px-5 pb-5">
									<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
										Gambar Molekul Air
									</h5>
									<img
										src="https://www.quipper.com/id/blog/wp-content/uploads/2019/08/Bentuk-Molekul-Kimia-Kelas-12-1.png"
										alt="atom"
										border="0"
									/>
								</div>
							</div>
						</div>
						{/* video atom */}
						<div className="w-full  bg-white border border-gray-200 rounded-lg shadow mt-14 ">
							<div className="px-5 pb-5">
								<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
									Video Molekul
								</h5>
								<div className="flex flex-col md:flex-row justify-center items-start">
									<div className="w-full md:w-[50%] aspect-video">
										<iframe
											className="w-full min-h-[90%]"
											src="https://www.youtube.com/embed/EdJCap88sYM"
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowfullscreen></iframe>
									</div>
									{/* penjelasan */}
									<div className="w-full md:w-[50%] ps-4">
										<p className="text-start text-xl font-semibold tracking-tight text-gray-900 pb-3">
											Penjelasan
										</p>
										<p>
											Molekul adalah partikel terkecil dari suatu zat yang masih memiliki sifat-sifat zat tersebut. Molekul terdiri dari dua atau lebih atom yang terikat bersama. Molekul dapat terdiri dari atom-atom yang sama atau atom-atom yang berbeda. Molekul yang terdiri dari atom-atom yang sama disebut molekul unsur. Sedangkan molekul yang terdiri dari atom-atom yang berbeda disebut molekul senyawa.
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* game menyusun atom */}
						<div className="w-full  bg-white border border-gray-200 rounded-lg shadow mt-14 ">
							<div className="px-5 pb-5">
								<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
									Game Membuat Molekul
								</h5>
								<a href="molekul/game">
									<button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">
										Play Game
									</button>
								</a>
								{/* <div className="flex flex-row justify-center items-start">
									<div className="w-full md:w-[50%] aspect-video">
										<iframe
											className="w-full min-h-[90%]"
											src="https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html"
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
											allowfullscreen></iframe>
									</div>
									
									<div className="w-full md:w-[50%] ps-4">
										<p className="text-start text-xl font-semibold tracking-tight text-gray-900 pb-3">
											Penjelasan
										</p>
										<p>
											Atom adalah unit terkecil dari unsur
											kimia yang mempertahankan identitas
											dan sifat uniknya. Atom terdiri dari
											tiga jenis partikel dasar: proton
											yang bermuatan positif, neutron yang
											netral, dan elektron yang bermuatan
											negatif. Ketiganya berperan dalam
											membentuk struktur atom yang
											memengaruhi sifat-sifat materi.
										</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* new section */}
		</>
	);
};

export default MateriMolekul;
