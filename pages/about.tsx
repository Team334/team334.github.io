import { NextPage } from 'next';
import Image from 'next/image';
import { Award } from '../components/Award';

const About: NextPage = () => (
    <div className="container py-36">
        <h1>Who are we?</h1>
        <p className="mb-5">Welcome! Founded in 1998, We are the TechKnights, Brooklyn Technical High School’s high-performance FRC (FIRST Robotics Competition) team. Commonly referred to as Team 334, from downtown Brooklyn, we strive to leave a lasting impact on our school, and fellow competitors. Newcomers to the team learn how to design, build, program, and compete in each year’s complex FIRST Robotics Competition.</p>
        <div className="flex flex-wrap justify-center gap-7 mb-16">
            <Award name="Excellence in Engineering Award" event="2019 New York City Regional" />
            <Award name="Judges' Award" event="2019 New York City Regional" />
            <Award name="Industrial Design Award" event="2016 New York City Regional" />
            <Award name="Winner" event="2014 New York City Regional" />
            <Award name="Creativity Award" event="2014 New York City Regional" />
            <Award name="Industrial Design Award" event="2013 New York City Regional" />
            <Award name="Creativity Award" event="2012 New York City Regional" />
            <Award name="Gracious Professionalism Award" event="2008 New York City Regional" />
            <Award name="Engineering Inspiration Award" event="2007 New York City Regional" />
            <Award name="Sportsmanship Award" event="2006 New York City Regional" />
            <Award name="Engineering Inspiration Award" event="2005 New York City Regional" />
            <Award name="Engineering Inspiration Award" event="2004 New York City Regional" />
            <Award name="Chairman's Award" event="2003 New York City Regional" />
            <Award name="Rookie All-Star" event="1999 Philadelphia Alliance Regional" />
        </div>

        <h2>What is FIRST?</h2>
        <p className="mb-5">FIRST (For Inspiration and Recognition of Science and Technology), founded in 1989 by Dean Kamen and Woody Flowers, was created to assist in inspiring and teaching young explorers like us to connect across the globe via engineering and innovation.</p>
        <p className="mb-16">Each year FIRST designs an international robotics competition in which 26 countries and over 3,200 teams participate in each year. Over 500,000 students participate in the FIRST Robotics Competition itself, and high schools across the globe build a robot and compete at various regional competitions. After all regionals take place, winners and award recipients are invited to compete at the championship, which takes place in Houston, Texas. Over 450 teams proceeded to the championships in the 2022 season.</p>

        <div className="block xl:grid grid-cols-2 gap-5 mb-16 items-center">
            <div>
                <h2>Team 334 Now</h2>
                <p className="mb-5">Currently, our team consists of 50-60 students which come nearly every day to work on the robot during the build season. After 10th period, we meet at the wonderful Ike Heller Robotics Center at BTHS to build our award-winning robots. With the help of our mentors, we machine and fabricate all our parts in-house—from 3D printing and sanding, to cutting on the plasma cutter and the CNC machines.</p>
                <p className="mb-5">During our preseason, we exchange information between the previous members, and the newcomers, ensuring that our build season occurs flawlessly. We host events and tryouts for students at our school to have an opportunity to join the team. During our offseason, we begin planning ahead for next year’s preseason and work on projects around the lab. We also host Future Vision events, in which middle schools from all across Brooklyn come to visit the school. We teach them about FIRST and engineering, while also letting them drive our robot.</p>
            </div>
            <div className="relative">
                <Image
                    className="rounded-xl float-right"
                    src="/media/team2022.png"
                    alt="Team 334 in 2022"
                    loader={({ src }) => src}
                    width={2100}
                    height={1392}
                />
            </div>
        </div>

        <h2>Brooklyn Technical High School</h2>
        <p>Brooklyn Technical High School (aka. “BTHS”, “Tech”) is one of New York City’s specialized high schools for science, technology, engineering, and mathematics. Tech is the largest high school in the United States, with an enrollment of 6,500 students across all four grades.</p>
    </div>
);

export default About;
