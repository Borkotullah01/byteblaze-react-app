import Hero from '../Components/Hero';
import wave from '/src/assets/wave.svg';
const Home = () => {
    return (
    <div className='min-h-[calc(100vh-116px)] relative'>
        <Hero></Hero>
        <img src={wave} alt="" className='absolute bottom-0 w-full' />
    </div>
    );
};

export default Home;