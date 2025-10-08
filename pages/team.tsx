"use client"
import {Member, MemberCard} from "@/components/member-card";
import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Skeleton} from "@/components/shadcn/ui/skeleton";

interface Roster {
    [key: string]: Member;
}

// @ts-ignore
const roster: Roster = require('./team.json');
const departments: {
    [key: string]: { name: string; image: string, department: string, role?: string }[]
} = {};

export default function TeamPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("All");
    const [imagesLoading, setImagesLoading] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const totalImages = Object.keys(roster).length;

// Process departments immediately
Object.keys(roster).reduce((acc, member) => {
    const {department, role} = roster[member];
    if (!departments[department]) {
        departments[department] = [];
    }
    if (!departments[department].some(existingMember => existingMember.name === member)) {
        departments[department].push({name: member, image: roster[member].image, department: department, role: role});
    }
    return acc;
}, {});    useEffect(() => {
        // Preload images in the background
        const imagePromises = Object.values(roster).map(member => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = member.image;
                img.onload = () => {
                    setImagesLoaded(prev => prev + 1);
                    resolve(true);
                };
                img.onerror = () => resolve(false);
            });
        });

        Promise.all(imagePromises).then(() => {
            setImagesLoading(false);
        });

        return () => {
            setImagesLoaded(0);
            setImagesLoading(true);
        };
    }, []);

    const filteredDepartments = Object.entries(departments).reduce((acc, [dept, members]) => {
        const filteredMembers = members.filter(member =>
            member.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedDepartment === "All" || dept === selectedDepartment)
        );
        if (filteredMembers.length > 0) {
            acc[dept] = filteredMembers;
        }
        return acc;
    }, {} as typeof departments);

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5}}
            className="min-h-screen"
        >
            {/* Hero Section - Always visible */}
            <motion.div 
                initial={{y: -20}}
                animate={{y: 0}}
                transition={{duration: 0.6}}
                className="relative py-20 text-center"
            >
                <h1 className="text-5xl md:text-7xl font-bold main bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    Meet Our Team
                </h1>
                <p className="mt-4 text-xl secondary text-gray-400">
                    The passionate individuals behind Team 334
                </p>
                {imagesLoading && (
                    <p className="mt-2 text-sm text-blue-400">
                        Loading images... ({Math.round((imagesLoaded / totalImages) * 100)}%)
                    </p>
                )}
            </motion.div>

            {/* Search and Filter Controls - Always visible */}
            <motion.div 
                initial={{y: 20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.2}}
                className="max-w-2xl mx-auto px-4 mb-16"
            >
                <div className="flex flex-col md:flex-row gap-4 p-4 bg-black/20 backdrop-blur-sm rounded-2xl">
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search members..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl 
                                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                                     text-white placeholder-gray-400 transition-all"
                        />
                    </div>
                    <select
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl
                                 focus:outline-none focus:ring-2 focus:ring-blue-500
                                 text-white transition-all cursor-pointer [&>option]:text-black"
                    >
                        <option value="All">All Departments</option>
                        {Object.keys(departments).map((dept) => (
                            <option key={dept} value={dept} className="text-black bg-white">
                                {dept === "Executive" || dept === "Mentor" ? `${dept}s` : dept}
                            </option>
                        ))}
                    </select>
                </div>
            </motion.div>

            {/* Member Cards Section - Modified */}
            <motion.div className="max-w-7xl mx-auto px-4">
                {Object.keys(filteredDepartments).length === 0 ? (
                    <motion.div 
                        key="no-results"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-2xl text-gray-500 secondary">No members found</p>
                        <button 
                            onClick={() => {setSearchQuery(""); setSelectedDepartment("All");}}
                            className="mt-4 px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                        >
                            Clear Filters
                        </button>
                    </motion.div>
                ) : (
                    <AnimatePresence>
                        {Object.keys(filteredDepartments).map((department) => (
                            <motion.div 
                                key={department}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mb-16"
                            >
                                <h2 
                                    className="text-3xl md:text-4xl font-bold text-center main 
                                              bg-clip-text text-transparent bg-gradient-to-r 
                                              from-white via-gray-300 to-white mb-10"
                                >
                                    {department === "Executive" || department === "Mentor" ? `${department}s` : department}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                                    {filteredDepartments[department]
                                        .sort((a, b) => a.name.localeCompare(b.name))
                                        .map((member, i) => (
                                            <motion.div
                                                key={member.name}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: i * 0.05 }}
                                            >
                                                {imagesLoading ? (
                                                    <div className="w-full">
                                                        <Skeleton className="h-64 w-full rounded-xl" />
                                                        <Skeleton className="h-4 w-3/4 mt-4" />
                                                        <Skeleton className="h-4 w-1/2 mt-2" />
                                                    </div>
                                                ) : (
                                                    <MemberCard member={member} />
                                                )}
                                            </motion.div>
                                        ))}
                                </div>
                                <div className="mt-16 border-t border-white/10"/>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </motion.div>
        </motion.div>
    );
}
