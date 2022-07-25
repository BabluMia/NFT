import React from 'react';
import { AiFillTags } from 'react-icons/ai';
import { FaMusic ,FaWallet} from 'react-icons/fa';


const FeatureCrad = () => {
    const card = [
        {
            _id:1,
            cardTitle :'Connect your wallet',
            cardText:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
            icon : `${<FaWallet/>}`

        },
        {
            _id:2,
            cardTitle :'Create your NFT',
            cardText:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
            icon : `${<FaMusic />}`

        },
        {
            _id:3,
            cardTitle :'Start earning ETH',
            cardText:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
            icon : `${<AiFillTags/>}`

        },

    ]
    return (
        <section className='bg-black max-w-7xl mx-auto'>

        </section>
    );
};

export default FeatureCrad;