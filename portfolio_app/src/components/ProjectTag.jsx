import React from 'react';

const ProjectTag = ( {name, onClick, isSelected}) => {
   const buttonStyle = isSelected
   ? "text-white border-purple-500"
   : "text-gray-400 border-slate-600 hover:border-white"
    return (
    <div>
       <button 
        className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
        onClick={() =>onClick(name)}
        >
           {name}
        </button>
    </div>
  )
}

export default ProjectTag;
