import Back from "../../../components/Back";
const MateriAtom = () => {
	return (
		<>
			<Back/>
			<div className="bg-accent">
				<div className="container mx-auto">
					<div className="flex flex-col items-center justify-center min-h-screen">
						<h1 className="text-3xl font-bold">Struktur Atom</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 w-full space-x-3">
							{/* card */}
							<div className="flex flex-col justify-between ">
								<div className="w-full min-h-[40%] bg-white border border-gray-200 rounded-lg shadow  mt-14 ">
									<div className="px-5 pb-5">
										<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
											Pengertian Atom
										</h5>
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
								</div>
								<div className="w-full min-h-[40%]  bg-white border border-gray-200 rounded-lg shadow  mt-5 ">
									<div className="px-5 pb-5">
										<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
											Struktur Atom
										</h5>
										<p>
											Atom terdiri dari tiga jenis
											partikel dasar: proton yang
											bermuatan positif, neutron yang
											netral, dan elektron yang bermuatan
											negatif. Ketiganya berperan dalam
											membentuk struktur atom yang
											memengaruhi sifat-sifat materi.
										</p>
									</div>
								</div>
							</div>
							{/* gambar atom */}
							<div className="w-full  bg-white border border-gray-200 rounded-lg shadow  mt-14 ">
								<div className="px-5 pb-5">
									<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
										Gambar Atom
									</h5>
									<img
										src="https://umsu.ac.id/artikel/wp-content/uploads/2023/08/Teori-Atom-640x375.jpg"
										alt="atom"
										border="0"
									/>
								</div>
							</div>
						</div>
						{/* video atom */}
						<div className="w-full  bg-white border border-gray-200 rounded-lg shadow  mt-14 ">
							<div className="px-5 pb-5">
								<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
									Video Atom
								</h5>
								<div className="flex flex-col md:flex-row justify-center items-start">
									<div className="w-full md:w-[50%] aspect-video">
										<iframe
											className="w-full min-h-[90%]"
											src="https://www.youtube.com/embed/7WhRJV_bAiE?si=IWQhrRcWz-xfJ8nD"
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
								</div>
							</div>
						</div>
						{/* game menyusun atom */}
						<div className="w-full  bg-white border border-gray-200 rounded-lg shadow  mt-14 ">
							<div className="px-5 pb-5">
								<h5 className="text-start text-xl font-semibold tracking-tight text-gray-900 py-4">
									Game Menyusun Atom
								</h5>
								<a href="atom/game">
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

export default MateriAtom;
