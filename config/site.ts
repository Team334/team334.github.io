type Color = "foreground" | "danger" | "success" | "warning" | "primary" | "secondary";

export type SiteConfig = {
    name: string;
    description: string;
    navItems: {
        label: string;
        href: string;
        color: Color;
    }[];
    links: {
        [key: string]: string;
    };
};

export const siteConfig: SiteConfig = {
    name: "Team 334",
    description: "The 334th Team in FIRST Robotics Competition",
    navItems: [
        {
            label: "About",
            href: "/about",
            color: "foreground"
        },
        {
            label: "Team",
            href: "/team",
            color: "foreground"
        },
        {
            label: "Blog",
            href: "/blog",
            color: "foreground"
        },
        {
            label: "Sponsors",
            href: "/sponsors",
            color: "danger"
        },
        {
            label: "Donate",
            href: "/donate",
            color: "success"
        },
        {
            label: "FAQ",
            href: "/faq",
            color: "warning"
        }
    ],
    links: {
        github: "https://github.com/Team334",
        instagram: "https://instagram.com/team334",
        donate: "https://bthsalumni.org/donate/",
        youtube: "https://www.youtube.com/@TechKnights334",
        blueAlliance: "https://www.thebluealliance.com/team/334"
    },
};