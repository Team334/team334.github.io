"use client"
import React from "react";
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuItem,
    NavbarMenuToggle,
    NavbarMenu
} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {Image} from "@nextui-org/react";
import {link as linkStyles} from "@nextui-org/theme";
import {siteConfig} from "@/config/site";
import {GithubIcon, InstagramIcon, YoutubeIcon} from "@/components/icons";
import clsx from "clsx";

export const Navbar = React.memo(() => {
    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);

    const SocialLinks = ({className = ""}: { className?: string }) => (
        <div className={`flex gap-4 ${className}`}>
            <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
                <InstagramIcon className="text-default-500"/>
            </Link>
            <Link isExternal href={siteConfig.links.github} aria-label="Github">
                <GithubIcon className="text-default-500"/>
            </Link>
            {className.includes('mobile') && (
                <Link isExternal href={siteConfig.links.youtube} aria-label="Youtube">
                    <YoutubeIcon width={28} height={28}/>
                </Link>
            )}
        </div>
    );

    const NavLinks = ({mobile = false, onPress}: { mobile?: boolean, onPress?: () => void }) => (
        <>
            {mobile && (
                <NavbarMenuItem>
                    <Link
                        color="success"
                        className="w-full block main text-2xl text-center"
                        href="/"
                        size="lg"
                        onPress={onPress}
                    >
                        Home
                    </Link>
                </NavbarMenuItem>
            )}
            {siteConfig.navItems.map((item, index) => (
                <NavbarMenuItem key={`${item.href}-${index}`} className={mobile ? "hover:animate-pulse" : ""}>
                    <Link
                        color={item.color}
                        className={mobile ? "w-full block main text-2xl text-center" : clsx(
                            linkStyles({color: "foreground"}),
                            "data-[active=true]:text-primary data-[active=true]:font-medium transition ease-in-out delay-200 hover:text-blue-600 font-bold"
                        )}
                        href={item.href}
                        size={mobile ? "lg" : "md"}
                        onPress={onPress}
                    >
                        {item.label}
                    </Link>
                </NavbarMenuItem>
            ))}
        </>
    );

    return (
        <NextUINavbar 
            onMenuOpenChange={setIsMenuOpen} 
            isMenuOpen={isMenuOpen}
            className="flex z-50 box-border border-shadow-lg p-0 capitalize rounded-[3.5rem] max-w-screen-lg mx-auto shadow"
        >
            {/* Brand and Mobile Toggle */}
            <NavbarContent className="md:mr-[8rem]">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <Link className="flex justify-start items-center gap-2 ml-2 flex-shrink-0 mt-1" href="/">
                        <Image
                            width={64}
                            alt="Team 334 Logo"
                            src="/logo.png"
                            className="flex-shrink-0"
                        />
                        <p className="font-bold main">Team 334</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            {/* Desktop Navigation */}
            <NavbarContent className="hidden md:flex md:text-center gap-4 mr-0 lg:mr-[4.5rem]" justify="center">
                <NavLinks />
            </NavbarContent>

            {/* Social Links */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <SocialLinks className="hidden lg:flex" />
                </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu className="box-border border-shadow-lg p-0 capitalize rounded-[1.1rem] shadow flex flex-col mt-1 fixed w-[300px]">
                <div className="flex flex-col p-4 space-y-10 mt-3">
                    <NavLinks mobile onPress={setIsMenuOpen} />
                    <SocialLinks className="mt-4 w-full flex justify-center items-end space-x-4 align-bottom mobile" />
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
});

Navbar.displayName = "Navbar";