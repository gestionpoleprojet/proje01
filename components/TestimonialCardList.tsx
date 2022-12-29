'use client';
import { Testimonial } from '../lib/types';
import TestimonialCard from './TestimonialCard';


export default function TestimonialCardList({ testimonials }: { testimonials : Testimonial[] }) {

    return (
        <>
        {testimonials.slice(0,3).map((testimonial: Testimonial, id) => (
            <TestimonialCard key={id} testimonial={testimonial} />
        ))}
        </>
    )
}
