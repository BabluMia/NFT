import React from 'react';
import '../TopSeller/TopSeller.css'
import { TiTick } from 'react-icons/ti';
import a1 from '../../assets/author/author-1.jpg'
import a2 from '../../assets/author/author-2.jpg'
import a3 from '../../assets/author/author-3.jpg'
import a4 from '../../assets/author/author-4.jpg'
import a5 from '../../assets/author/author-5.jpg'
import a6 from '../../assets/author/author-6.jpg'
import a7 from '../../assets/author/author-7.jpg'
import a8 from '../../assets/author/author-8.jpg'
import a9 from '../../assets/author/author-9.jpg'
import a10 from '../../assets/author/author-10.jpg'
import a11 from '../../assets/author/author-11.jpg'
import a12 from '../../assets/author/author-12.jpg'



const TopSeller = () => {
    const sellers = [
        {
            id:1,
            img:a1,
            name:"Monica Lucas",
            worth:"3.2 ETH"

        },
        {
            id:2,
            img:a2,
            name:"Lori Hart",
            worth:"2.2 ETH"

        },
        {
            id:3,
            img:a3,
            name:"Gayle Hicks",
            worth:"3.2 ETH"

        },
        {
            id:4,
            img:a4,
            name:"Monica Lucas",
            worth:"3.2 ETH"

        },
        {
            id:5,
            img:a5,
            name:"Jimmy Wright",
            worth:"3.2 ETH"

        },
        {
            id:6,
            img:a6,
            name:"Rash Ayan",
            worth:"3.2 ETH"

        },
        {
            id:7,
            img:a7,
            name:"Jimmy Wright",
            worth:"3.2 ETH"

        },
        {
            id:8,
            img:a8,
            name:"Claude Banks",
            worth:"3.2 ETH"

        },
        {
            id:9,
            img:a9,
            name:"Ida Chapman",
            worth:"3.2 ETH"

        },
        {
            id:10,
            img:a10,
            name:"Dani Rock",
            worth:"3.2 ETH"

        },
        {
            id:11,
            img:a11,
            name:"Monica Lucas",
            worth:"3.2 ETH"

        },
        {
            id:12,
            img:a12,
            name:"Franklin Greer",
            worth:"3.2 ETH"

        },
        
    ]
    return (
        <div className='pb-12 pt-10 max-w-7xl mx-auto'>
            <div className='flex flex-col relative items-center'>
                <h1 className='text-white text-4xl'>Top<p className='border-b-2 border-[#fff305] pb-3 inline text-white'> Sel</p>ler</h1>
                
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 place-items-center text-center grid-cols-2  mt-12'>
               
                {
                    sellers.map(seller=> <div key={seller.id} className='flex my-3 space-x-3 '>
                    <p className='text-gray-400'>{seller.id}.</p>
                    <div className='w-14 bg-[#fff305] hover:outline-none rounded-full cursor-pointer relative'>
                        <img className='w-14 transform hover:outline-none  hover:scale-90 transition ease-in-out duration-300 rounded-full ' src={seller.img} alt="" />
                        <div className='absolute p-[1px] bg-[#fff305] rounded-full right-0 bottom-2'>
                            <TiTick/>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h4 className='text-white font-bold'>{seller.name}</h4>
                        <p className='text-[#a1a1a1]'>{seller.worth}</p>
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default TopSeller;