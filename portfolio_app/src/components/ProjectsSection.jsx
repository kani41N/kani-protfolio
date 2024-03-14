import { useState, useRef } from 'react';
import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
      id: 1,
      title: 'Simple Cards',
      description: 'Project 1 description',
      image: '/projects/card_01.jpeg',
      tag: ['All', "Web"],
      gitUrl: '/',
      previewUrl: '/', 
  },
  {
      id: 2,
      title: 'Snake Game',
      description: 'Project 2 description',
      image: '/projects/snake_01.jpeg',
      tag: ['All', "Mobile"],
      gitUrl: '/',
      previewUrl: '/', 
  },
  {
      id: 3,
      title: 'Spice Website',
      description: 'Project 3 description',
      image: '/projects/spiceshead.jpeg',
      tag: ['All', "Web"],
      gitUrl: '/',
      previewUrl: '/', 
  }
]

const ProjectsSection = () => {

   
  const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTabChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag) 
    )

    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };

  return (
    <section>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
       <ProjectTag 
       onClick={handleTabChange}
       name='All'
       isSelected={tag === 'All'}
       />
        <ProjectTag 
       onClick={handleTabChange}
       name='Web'
       isSelected={tag === 'Web'}
       />
        <ProjectTag 
       onClick={handleTabChange}
       name='Mobile'
       isSelected={tag === 'Mobile'}
       />
      </div>
      <ul ref={ref}
       className='grid md:grid-cols-3 gap-8 md:gap-12'>
       {filteredProjects.map((project, index) => (
        <motion.li
         key={index}
         variants={cardVariants}
         initial='initial'
         animate={isInView ? 'animate' : 'initial'}
         transition={{ duration:0.5, delay: index * 0.4 }}
        >
        <ProjectCard 
        key={project.id} 
        title={project.title} 
        description={project.description}
        imgUrl={project.image}
        gitUrl={project.gitUrl} 
        previewUrl={project.previewUrl} 
        />
        </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection;
