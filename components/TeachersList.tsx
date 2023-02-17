'use client';
import { Teacher } from '../lib/types';
import TeacherCard from './TeacherCard';

export default function TeacherList({ teachers }: { teachers : Teacher[] }) {

    return (
    <>
        <div className="list-div-pedag mt-1-875-pedag">
            <div className="logo-wrapper-pedag mb-3-75">
                {teachers.slice(0,4).map((teacher: Teacher, id) => (
                    <TeacherCard key={id} teacher={teacher} />
                ))}
            </div>
        </div>
    </>
    )
}
