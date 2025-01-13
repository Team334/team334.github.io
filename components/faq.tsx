"use client"

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/shadcn/ui/accordion"
import React from "react";


export default function Faq() {
    const faqs = [
        {
            question: "What is FIRST?",
            answer: "FIRST is the company that holds the FIRST Robotics Competition that we compete in every year! They hold other events like First Tech Challenge and First Lego League",
        },
        {
            question: "What does this robot do? Is this battlebots?",
            answer: "This is NOT battlebots, as much as it would be cool to make our own battlebot, the robot we make year to year is a lot different. The purpose of our bot can change vastly, and its design by default",
        },
        {
            question: "How much time do I have to dedicate to this?",
            answer: "If you’re in any main department, Monday-Saturday. Weekdays till 7:30pm and 10:00am to 6:00pm on Saturdays. Other external events may also apply to the time commitment.\n" +
                "MEDIA: Subject to change \n" +
                "Any two days a week. ",
        },
        {
            question: "When does the season start?",
            answer: "Build season usually starts on the first Saturday of the year. However for pre-season. That starts around mid-late September.",
        },
        {
            question: "When/Where are competitions?",
            answer: "The competitions we attend vary by year. However, one we always are consistent with is the New York City Regional. Usually Week 6 (Mid April) of the competition season. ",
        },
        {
            question: "How do I join?",
            answer: "A series of tryouts and interviews. The tryouts do NOT require any technical experience. Only skills like communication and teamwork. ",
        },
        {
            question: "How much time do I have to dedicate to this?",
            answer: "This is a huge commitment if you want join, we spend more than 100 hours dedicating robotics.",
        },
        {
            question: "When do we meet?",
            answer: "During Season we meet Monday to Saturday where Monday to Thursday we start from 3:30pm - 7:30pm, Fridays we stay from 3:30pm - 5:30pm, and Saturday we stay from 8:00am - 5pm. During non-season we meet on Tuesday and Thursday only from 3:30pm - 5:00pm.",
        },
        {
            question: "I don't particularly enjoy robotics, but I still want to be involved. Are there things I can help with?",
            answer: "Media related activities, such as photos, social media management and business relations are a great way to be on the team. If you don’t want to be on the team but still want to help out, donations (of money or old metrocards) are greatly appreciated.",
        },
        {
            question: "Are there things that parents can do help out on the team?",
            answer: "Yes! We ask parents volunteer to bring in food for our very hardworking and hungry team members. Additionally, donations and being there to support us is a great way for a parent to get involved.",
        },
        {
            question: "I have other activities, can I still be on the team?",
            answer: "This is taken on a case on case basis. You’d have to talk to the coaches.",
        },
    ];

    return (
        <div className="container my-12 mx-auto md:px-6 xl:px-24">
            <section className="mb-10">
                <Accordion type="single" collapsible className="p-3">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index + 1}`}>
                            <AccordionTrigger className={"text-base md:text-xl text-neutral-200"}>
                                <b>{faq.question}</b>
                            </AccordionTrigger>
                            <AccordionContent className={"text-base md:text-lg text-neutral-200"}>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                    <AccordionItem value={`faq-help`}>
                        <AccordionTrigger className={"text-base md:text-xl text-neutral-200"}>
                            <b>I have some other questions. How can I contact the team?</b>
                        </AccordionTrigger>
                        <AccordionContent className={"text-base md:text-lg text-neutral-200"}>       
                                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                                    <h2 className="text-3xl md:text-6xl font-bold text-white secondary text-center mb-4 md:mb-6">
                                        Have a Question?
                                    </h2>
                                    <p className="text-lg md:text-xl text-center text-neutral-200 mb-8 md:mb-12">
                                        You can reach out to us by email
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                        <div>
                                        <h3 className="font-lg main text-xl mb-3">STUDENTS</h3>
                                        <ul className="mt-2 space-y-3">
                                            <li className="secondary text-sm md:text-base"><b>Samantha Tan</b> - samanthat155@nycstudents.net</li>
                                            <li className="secondary text-sm md:text-base"><b>Valentina Wolfe</b> - ValentinaW2@nycstudents.net</li>
                                            <li className="secondary text-sm md:text-base"><b>Gadin Aggarwal</b> - gadina@nycstudents.net</li>
                                        </ul>
                                        </div>
                                        <div>
                                        <h3 className="font-lg main text-xl mb-3">MENTORS</h3>
                                        <ul className="mt-2 space-y-3">
                                            <li className="secondary text-sm md:text-base"><b>Ms. Shaina Doherty</b> - SDoherty2@schools.nyc.gov</li>
                                            <li className="secondary text-sm md:text-base"><b>Mr. Marlon Esguerra</b> - MEsguerra@schools.nyc.gov</li>
                                            <li className="secondary text-sm md:text-base"><b>Mr. Ali Harb</b> - aharb@schools.nyc.gov</li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    )
}
