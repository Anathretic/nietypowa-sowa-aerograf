import GallerySplashImage from '../images/gallery-splash-image.png';
import BlueTapeImage from '../images/blue-tape-image.png';
import PinkTapeImage from '../images/pink-tape-image.png';
import EmptyTapeImage from '../images/empty-tape-image.png';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTopUtils';

const Gallery = () => {
	return (
		<section className='relative flex flex-col justify-center items-center w-full max-rsm:pb-[8rem] max-sm:pb-[10rem] lg:pb-[24rem] pb-[16rem]'>
			<img
				className='absolute max-rsm:top-[-60px] max-sm:top-[-85px] top-[-175px] w-full max-h-[500px] bg-repeat mb-24 z-0'
				src={PinkTapeImage}
				alt=''
			/>
			<img className='w-full max-h-[100px] bg-repeat mb-24 z-0' src={BlueTapeImage} alt='' />
			<div id='galeria' className='scroll-mt-[120px] max-w-[1000px] w-full max-lg:w-11/12 z-10'>
				<div className='image-mosaic w-full'>
					<div
						className='card card-tall card-wide card-with-bg'
						style={{ backgroundImage: `url('https://picsum.photos/id/564/1200/800')` }}></div>
					<div
						className='card card-tall card-with-bg'
						style={{ backgroundImage: `url('https://picsum.photos/id/566/800/530')` }}></div>
					<div
						className='card card-with-bg'
						style={{ backgroundImage: `url('https://picsum.photos/id/575/800/530')` }}></div>
					<div
						className='card card-with-bg'
						style={{ backgroundImage: `url('https://picsum.photos/id/626/800/530')` }}></div>
					<div
						className='card card-with-bg'
						style={{ backgroundImage: `url('https://picsum.photos/id/667/800/530')` }}></div>
					<div
						className='card card-with-bg'
						style={{ backgroundImage: `url('https://picsum.photos/id/678/800/530')` }}></div>
					<div className='card card-wide max-sm:col-span-2 max-[540px]:gap-x-0'>
						<Link
							to='/galeria-prac'
							className='bg-[#23A1B4] max-md:py-3 py-2 max-sm:px-12 px-20 text-lg rounded-full hover:bg-[#C80C59] transition duration-300'
							onClick={scrollToTop}>
							Przejdź do galerii
						</Link>
					</div>
				</div>
				<div className='relative w-full flex flex-col items-center'>
					<img
						className='absolute max-rsm:bottom-[-200px] max-sm:bottom-[-300px] bottom-[-500px] z-0'
						src={GallerySplashImage}
						alt=''
					/>
					<img className='absolute top-[-350px] z-0 hidden mf:block' src={EmptyTapeImage} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Gallery;
