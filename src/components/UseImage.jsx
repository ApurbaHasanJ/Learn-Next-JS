import Image from 'next/image';
import Deadpool from '../../public/deadpool.jpg'

const UseImage = () => {
    return (
        <div>
            <Image src={Deadpool} alt='Deadpool'/>
        </div>
    );
};

export default UseImage;