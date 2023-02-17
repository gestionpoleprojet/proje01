import imageUrlFor from '../lib/imageUrlFor';
import { Teacher } from '../lib/types';
import {PortableText} from '@portabletext/react'
import {sanityConfig} from "../lib/sanity-config";

export default function TeacherCard({ teacher }: { teacher: Teacher }) {

    return (
      <div id="" className="wts-carddiv-test-pedag pt-1-5 pl-2 pr-1-5625">                         
        <div className="reviewer-details-pedag">
          <div className="logo-wrapper-pedag date">
            <div className="_2textblock-pedag">
              <a href = {teacher.link}>
                <img src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/63a2f46ca12984c7764f509e_linkedin.svg" 
                loading="lazy" 
                width={24} 
                alt="LinkedIn" 
                className="image-14-1"/>
              </a>
            </div>
          </div>
        </div>
        <div id="" className="wts-carddiv-test-copy pt-1-5 pl-2 pr-1-5625">
          <div className="reviewer-details-pedag">
            <div className="logo-wrapper-pedag date"><img src={imageUrlFor(teacher.profilePicture).ignoreImageParams().width(600).toString()} loading="lazy" width={176} alt="" />
              <div className="_2textblock-pedag">
                <div className="equipe-text1 text-base leading-5 font-medium mt-0-125">
                <a href = {teacher.link}>
                  <strong>{teacher.name}<br/>‍</strong></a></div>
                <div className="text-block-4-copy"><strong>{teacher.role}</strong></div>
                  <a href = {teacher.link} >
                  <img src="https://uploads-ssl.webflow.com/638d06865fd2fdfa5dac0d33/63a2f46ca12984c7764f509e_linkedin.svg" loading="lazy" alt="LinkedIn" className="image-25" />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>                      
    )
}
