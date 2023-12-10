import { useMemo } from 'react';
import { NextPage } from 'next';
import { Member, MemberCard } from '../components/MemberCard';
import roster from './team.json';

const Team: NextPage = () => {
    const { mentors, mechanical, programming, media, lead } = useMemo(() => (
        roster.reduce((prev, curr: Member) => {
            if (curr.department === 'mechanical') {
                prev.mechanical.push(curr);
            } else if (curr.department === 'programming') {
                prev.programming.push(curr);
            } else if (curr.department === 'mentor') {
                prev.mentors.push(curr);
            } else if (curr.department === 'media') {
                prev.media.push(curr);
	    } else if (curr.department === 'lead') {
                prev.lead.push(curr);
	    }
            return prev;
        }, {
            mechanical: [] as Member[],
            programming: [] as Member[],
            mentors: [] as Member[],
	    media: [] as Member[],
	    lead: [] as Member[],
        })
    ), []);

    return (
        <div className="container py-36">
            <h2 className="mb-10">Mentors</h2>
            <div className="flex flex-wrap gap-10 justify-center">
                {mentors.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i} member={member} />)}
  	    <hr className="my-10 border-slate-700/50" />
	    </div>
            <h2 className="mb-10">Executives</h2>
            <div className="flex flex-wrap gap-10 justify-center">
                {lead.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i} member={member} />)}
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
            <hr className="my-10 border-slate-700/50" />
            <h2 className="mb-10">Media</h2>
            <div className="flex flex-wrap gap-10 justify-center">
                {media.sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => <MemberCard key={i} member={member} />)}
            </div>
        </div>
    );
};

export default Team;
