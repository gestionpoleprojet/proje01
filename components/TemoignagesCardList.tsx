'use client';
import { Testimonial } from '../lib/types';
import TestimonialCard from './TemoignagesCard';


export default function TemoignagesCardList({ testimonials }: { testimonials : Testimonial[] }) {

    return (
        <>
        {testimonials.slice(0,3).map((testimonial: Testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
        ))}
        </>
    )
        }
