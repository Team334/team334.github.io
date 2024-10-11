"use client"
import {Member, MemberCard} from "@/components/member-card";
import React from "react";
import {TextGenerateEffect} from "@/components/aceternity/ui/autotype";

interface Roster {
    [key: string]: Member;
}

// @ts-ignore
const roster: Roster = require('./team.json');
const departments: {
    [key: string]:
        { name: string; image: string, department: string }[]
} = {};


export default function TeamPage() {
    // Prevent duplication
    Object.keys(departments).forEach(key => delete departments[key]);

    Object.keys(roster).reduce((acc, member) => {
        const department = roster[member].department;
        if (!departments[department]) {
            departments[department] = [];
        }
        if (!departments[department].some(existingMember => existingMember.name === member)) {
            departments[department].push({name: member, image: roster[member].image, department: department});
        }
        return acc;
    }, {});

    const addSIfNeeded = (word: string): string => {
        if (word === "Executive" || word === "Mentor") {
            return word + "s";
        }
        return word;
    };


    return (
        <div>
            <h1 className="underline font-bold text-center text-5xl md:text-6xl main py-20 p-3">Our Team Members</h1>

            {Object.keys(departments).map((department, index) => (
                <div key={index}>
                    <TextGenerateEffect words={addSIfNeeded(department)}
                                        className={"font-bold text-3xl md:text-4xl text-center main py-4 mb-10"}/>
                    <div className="flex flex-wrap gap-10 justify-center">
                        {departments[department].sort((a, b) => a.name < b.name ? -1 : 1).map((member, i) => (
                            <MemberCard key={i} member={member}/>
                        ))}
                    </div>
                    <hr className="my-10 border-slate-700/50"/>
                </div>
            ))}
        </div>
    );
}
