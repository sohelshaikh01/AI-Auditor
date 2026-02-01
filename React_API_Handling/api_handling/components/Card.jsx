import Image from '../assets/react.svg';

function Card() {

  return (
    <div className="w-full border-gray-800 border dark:border-white rounded-2xl shadow bg-white text-black dark:bg-gray-800  dark:text-white p-6">

        <div className="mb-6 border border-black rounded-xl dark:border-white">
            <a href="/" >
                <img src={Image} alt="product_image1" 
                    className="bg-gray-300 dark:bg-gray-700 w-full rounded-xl" />
            </a>
        </div>

        <div className="mb-6">
            <a href="/">
                <h5 className="text-xl font-bold text-black dark:text-white">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
            </a>
        </div>

        <div className="mb-4 flex justify-start content-center gap-2 text-black dark:text-white">
            <img src={Image} alt="star" className="w-5" />
            <img src={Image} alt="star" className="w-5" />
            <img src={Image} alt="star" className="w-5" />
            <img src={Image} alt="star" className="w-5" />
            <img src={Image} alt="star" className="w-5" />
            <div className='bg-blue-300 text-blue-700 px-2 leading-5 rounded-sm'>4.0</div>
        </div>

        <div className='flex justify-between content-center text-black dark:text-white'>
            <p className='font-bold text-4xl'>$599</p>
            <button className="bg-blue-600 dark:bg-blue-500 dark:text-black text-white px-6 py-2"> Add to cart </button>
        </div>

    </div>
  )
}

export default Card;
