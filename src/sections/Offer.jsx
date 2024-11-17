import OfferTapeImage from '../images/offer-tape-image.png';
import OfferDecoratorImage from '../images/offer-decorator-image.png';

const Offer = () => {
	return (
		<section
			id='nasze-uslugi'
			className='relative flex flex-col justify-center items-center w-full  pb-6'>
			<img className='absolute right-0 2xl:right-16 z-10 max-rsm:top-[-160px] max-sm:top-[-200px] top-[-175px] max-md:top-[-230px]' src={OfferDecoratorImage} alt='' />
			<img
				className='absolute max-rsm:top-[-60px] max-sm:top-[-85px] top-[-175px] w-full max-h-[400px] bg-repeat z-0'
				src={OfferTapeImage}
				alt=''
			/>
			<div className='flex justify-center items-center text-center w-full pt-28 pb-24 xl:py-48 z-20'>
				<p className='text-white text-3xl md:text-5xl w-1/2 2xl:w-1/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
		</section>
	);
};

export default Offer;
