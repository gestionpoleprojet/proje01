import imageUrlFor from '../lib/imageUrlFor';
import { Project } from '../lib/types';
import {PortableText} from '@portabletext/react'
import {sanityConfig} from "../lib/sanity-config";

export default function ProjectCard({ project }: { project: Project }) {
    return (

    <div className="blog-div-wrapper">
        {project.poster && (
        <img
            src={imageUrlFor(project.poster).ignoreImageParams().width(600).toString()}
            loading="lazy"
            sizes="(max-width: 479px) 96vw, (max-width: 767px) 97vw, 100vw"
            
            alt=""
            className="blog-image eiffel1"
        />
        )}
        <div className="img-details2 pl-1-375 mt-1-441875">
            <div className="calende-div">
            <img
                src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055b20fbb034a2c43ae763c_Group%2037.png"
                loading="lazy"
                alt=""
                className="mr-0-375"
            />
            <div className="mr-1-75 text-sm leading-5 mt-2px">
                
                {new Date(project.releaseDate).toLocaleDateString("fr-FR", {
                year: "numeric",
                })}
            </div>
            <img
                src="https://uploads-ssl.webflow.com/6051f4237c04701dd0f9616a/6055b28a4e987f7c4839c40f_Group%2038.png"
                loading="lazy"
                alt=""
                className="mr-0-375"
            />
            <div className="text-sm leading-5 mt-2px">{project.valorisation}</div>
            </div>
            <div
            className="img-head2 text-2xl leading-9 font-medium mt-1 mb-0-875"
            >
            {project.title}
            </div>
            <div className="_2textblock text-sm leading-5">
                <PortableText value={project.overview} {...sanityConfig} />

            </div>
                <div className=" mt-0-4375 mb-0-875">
                    <a
                        href="https://www.snow-smart.fr/"
                        target="_blank"
                        rel="noreferrer"
                        className="bold w-inline-block"
                    >
                    <div className="link-text">Voir le site</div>
                        
                    </a>
                </div>
            </div>
        </div>

    )
}