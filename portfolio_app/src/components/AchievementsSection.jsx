import React from 'react';

const achievementsList = [
    {
        mertic: "Projects",
        vaule: "5+",
    },
    {
        mertic: "Users",
        vaule: "1000+",
    },
    {
        mertic: "Years",
        vaule: "1+",
    },
];

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='border-gray-700 border rounded-md py-8 px-17 flex flex-row items-center justify-between'>
      {achievementsList.map((achievement, index) => {
        return (
            <div 
            key={index}
            className='flex flex-col justify-center items-center mx-4'
            >
                <h1 className='text-white text-4xl font-bold'>
                    {achievement.mertic}
                </h1>
                <p className='text-gray-400 text-base'>
                    {achievement.vaule}
                </p>
            </div>
        );
      })}
      </div>
    </div>
  )
}

export default AchievementsSection;
