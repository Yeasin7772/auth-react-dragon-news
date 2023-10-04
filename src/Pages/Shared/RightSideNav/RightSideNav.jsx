import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className='p-4 space-y-4 mb-6'>
        <h2 className="text-3xl">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login with GitHub
        </button>
      </div>

      <div className='p-4  mb-6'>
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a className='flex p-4 text-lg items-center border rounded-t-lg ' href="">
          <FaFacebookF className='mr-3'></FaFacebookF>
          <span>Facebook</span>
        </a>
        <a className='flex p-4 text-lg items-center border-x ' href="">
          <FaTwitter className='mr-3'></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className='flex p-4 text-lg items-center border rounded-b-lg ' href="">
          <FaInstagram className='mr-3'></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>

      {/* Q Zone */}

      <div className='p-4 space-y-4 mb-6'>
        <h2 className="text-3xl">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div className='p-8 space-y-6 mb-6 bg-[#05001DCC]'>
        <h2 className="text-3xl font-bold">Create an Amazing Newspaper</h2>
        <p>Discover thousands of options, easy to customize layouts,
          one-click to import demo and much more.</p>
          <button className='btn btn-secondary bg-[#D72050]'> Learn More</button>

      </div>




    </div>
  );
};

export default RightSideNav;