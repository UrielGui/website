import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export default function SocialMedia() {
  return (
    <div className="flex sm:mt-7 mt-2">
      <span className="bg-blue-600 text-white text-2xl p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black mr-4">
        <FaLinkedinIn />
      </span>
      <span className="bg-purple-600 text-white text-2xl p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black mr-4">
        <FaGithub />
      </span>
      <span className="bg-pink-600 text-white text-2xl p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black mr-4">
        <FaDribbble />
      </span>
      <span className="bg-green-600 text-white text-2xl p-4 rounded-xl cursor-pointer hover:bg-white hover:text-black mr-4">
        <AiOutlineMail />
      </span>
    </div>
  )
}