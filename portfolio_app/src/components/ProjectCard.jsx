import React from 'react';
// import { Link } from 'react-router-dom';
import { HiCodeBracket } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";


const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div
                className='h-52 md:h-72 mt-3 rounded-t-xl relative group'
                style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
            >
                <div className='overlay items-center justify-center absolute top-0 left-0 h-full w-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <a
                        href={'gitUrl'}
                        className='h-14 w-14 border-2 mr-2 relative rounded-full border-gary-400 hover:border-white'>
                        <HiCodeBracket className='h-10 w-10 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white' />
                    </a>
                    <a
                        href={'previewUrl'}
                        className='h-14 w-14 border-2 relative rounded-full border-gary-400 hover:border-white'>
                        <IoEyeOutline className='h-10 w-10 text-gray-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white' />
                    </a>
                </div>

            </div>
            <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
                <h5 className='text-xl font-semibold mb-2'>{title}</h5>
                <p className='text-gray-400'>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
