import imageUrlFor from '../lib/imageUrlFor';
import { Testimonial } from '../lib/types';
import {PortableText} from '@portabletext/react'
import {sanityConfig} from "../lib/sanity-config";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (

<div className="review">
  <div className="reviewer-details">
    <div className="logo-wrapper">
      <div className="img-div"> 
        <img
          src={imageUrlFor(testimonial.poster).ignoreImageParams().width(96).toString()}
          loading="lazy"
          alt=""
          height="48"
          width="48"
          className="user-avatar img-rounded"
        />
      </div>
      <div className="alumni-name">
        <div
          className="wts-imgname text-base leading-5 font-medium mt-0-125"
        >
          {testimonial.title}
        </div>
        <div className="wtsimg-job text-sm leading-5">
          {testimonial.role}
        </div>
      </div>
    </div>
  </div>
  <div className="text-desc text-sm mt-1-125">
    <PortableText value={testimonial.content} {...sanityConfig} />
  </div>
</div>
    )
}
