import { useMemo } from 'react';
import { NextPage } from 'next';
import { Member, MemberCard } from '../components/MemberCard';
import roster from './team.json';

const Team: NextPage = () => {
    const { mentors, mechanical, programming } = useMemo(() => (
        roster.reduce((prev, curr: Member) => {
            if (curr.department === 'mechanical') {
                prev.mechanical.push(curr);
            } else if (curr.department === 'programming') {
                prev.programming.push(curr);
            } else if (curr.department === 'mentor') {
                prev.mentors.push(curr);
            }
            return prev;
        }, {
            mechanical: [] as Member[],
            programming: [] as Member[],
            mentors: [] as Member[],
        })
    ), []);

    return (
        <div className="py-36 px-60">
            <h2 className="mb-10">Mentors</h2>
            <div className="flex flex-wrap gap-10 justify-center">
                {mentors.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i} member={member} />)}
            </div>
            <hr className="my-10 border-slate-700/50" />
            <h2 className="mb-10">Mechanical</h2>
            <div className="flex flex-wrap gap-10 justify-center">
                {mechanical.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i} member={member} />)}
            </div>
            <hr className="my-10 border-slate-700/50" />
            <h2 className="mb-10">Programming</h2>
            <div className="flex flex-wrap gap-10 justify-center">
                {programming.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i} member={member} />)}
            </div>
        </div>
    );
};

export default Team;
