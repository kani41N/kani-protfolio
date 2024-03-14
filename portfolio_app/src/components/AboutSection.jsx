import React from 'react';
import { useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React JS</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
        <li>HTML</li>
        <li>Node.js</li>
        <li>GitHub</li>
      </ul>
    ),
  },
  {
    title: "Educations",
    id: "educations",
    content: (
      <ul className="list-disc pl-2">
        {/* <li>Fullstack Academy of Code </li> */}
        <li>I trained in frontend React.js development at Renga Technologies.</li>
        <li>University of Madurai Kamaraj, Sri SRNM College at sattur</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>*******</li>
        <li>*******</li>
      </ul>
    ),
  },
];

const AboutSection=()=> {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
       <img src="icons/about-image.png" alt="" width={500} height={500}/>
       <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className='text-4xl font-bold mb-4'>About Me</h2>
        <p className='text-base lg:text-lg'>I am a frontend web developer with a passion for creating interactive
           and responsive web applictions. I have experience working with React js, Node.js,
           JavaScript, Boostrap, Tailwind CSS, CSS, HTML and Git. I am a quick learner and 
           I am always looking to expand my knowledge and skill set. I am a team player 
           and I am excited to work others to create amazting applictions.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              >
                {" "}
                Skills{" "}
             </TabButton>

             <TabButton
              selectTab={() => handleTabChange("educations")}
              active={tab === "educations"}
              >
                {" "}
                Educations{" "}
             </TabButton>

             <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
             </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
       </div>
      </div>
    </section>

  )
}
export default AboutSection;