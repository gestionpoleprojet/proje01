'use client';
import { Project } from '../lib/types';
import ProjectCard from './ProjectCard';


export default function ProjectCardList({ projects }: { projects: Project[] }) {

    return (
        <>
        {projects.slice(0,3).map((project: Project) => (
            <ProjectCard key={project._id} project={project} />
        ))}
        </>
    )
}
