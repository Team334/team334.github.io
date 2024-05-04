"use client"
import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Image, NavbarMenu} from "@nextui-org/react";
import {link as linkStyles} from "@nextui-org/theme";

import {siteConfig} from "@/config/site";
import clsx from "clsx";

// import {ThemeSwitch} from "@/components/theme-switch";
import {GithubIcon, InstagramIcon, YoutubeIcon} from "@/components/icons";
import React from "react";

export const Navbar = React.memo(() => {
    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);

    return (
        <NextUINavbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}
                      className={"flex z-50 box-border border-shadow-lg p-0 capitalize rounded-[3.5rem] max-w-screen-lg mx-auto mt-7 shadow"}>
            <NavbarContent className={"md:mr-[8rem]"}>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <Link className="flex justify-start items-center gap-2 ml-2 flex-shrink-0 mt-1" href="/">
                        <Image
                            width={64}
                            alt={"logo"}
                            src={"/logo.png"}
                            className={"flex-shrink-0"}
                        />
                        <p className="font-bold main">Team 334</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex md:text-center gap-4 mr-0 lg:mr-[4.5rem]" justify="center">
                {siteConfig.navItems.map((item) => (
                    <NavbarItem key={item.href}>
                        <Link
                            className={clsx(
                                linkStyles({color: "foreground"}),
                                "data-[active=true]:text-primary data-[active=true]:font-medium transition ease-in-out delay-200 hover:text-blue-600 font-bold"
                            )}
                            color="foreground"
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="gap-4 flex">
                    <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram"
                          className={"hidden lg:flex"}>
                        <InstagramIcon className="text-default-500 m-auto"/>
                    </Link>
                    <Link isExternal href={siteConfig.links.github} aria-label="Github" className={"hidden lg:flex"}>
                        <GithubIcon className={"text-default-500 m-auto"}/>
                    </Link>

                    {/*<ThemeSwitch/>*/}
                </NavbarItem>

                {/*<NavbarItem className="hidden md:flex">*/}
                {/*    <Button*/}
                {/*        isExternal*/}
                {/*        as={Link}*/}
                {/*        className="text-sm text-default-800 font-bold bg-default-100"*/}
                {/*        href={siteConfig.links.donate}*/}
                {/*        startContent={<HeartFilledIcon className="text-danger m-auto"/>}*/}
                {/*        variant="flat"*/}
                {/*    >*/}
                {/*        Donate*/}
                {/*    </Button>*/}
                {/*</NavbarItem>*/}

            </NavbarContent>
            <NavbarMenu
                className="box-border border-shadow-lg p-0 capitalize rounded-[1.1rem] shadow flex flex-col mt-10 fixed w-[300px]">

                <div className="flex flex-col p-4 space-y-10 mt-3">
                    <NavbarMenuItem>
                        <Link
                            color="success"
                            className="w-full block main text-2xl text-center"
                            href="/"
                            size="lg"
                            onPress={setIsMenuOpen}
                        >
                            Home
                        </Link>
                    </NavbarMenuItem>
                    {siteConfig.navItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className="hover:animate-pulse">
                            <Link
                                color={
                                    item.color
                                }
                                className="w-full block main text-2xl text-center"
                                href={item.href}
                                size="lg"
                                onPress={setIsMenuOpen}
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <div className="mt-4 w-full flex justify-center items-end space-x-4 align-bottom">
                        <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram">
                            <InstagramIcon className="text-default-500"/>
                        </Link>
                        <Link isExternal href={siteConfig.links.github} aria-label="Github">
                            <GithubIcon className="text-default-500"/>
                        </Link>
                        <Link isExternal href={siteConfig.links.youtube} aria-label="Youtube">
                            <YoutubeIcon width={28} height={28}/>
                        </Link>
                        {/*<ThemeSwitch/>*/}

                    </div>
                    {/*<div className="mt-4 flex justify-center items-end space-x-4 align-bottom">*/}
                    {/*    <Button*/}
                    {/*        isExternal*/}
                    {/*        as={Link}*/}
                    {/*        className="text-sm text-default-800 font-bold bg-default-100"*/}
                    {/*        href={siteConfig.links.donate}*/}
                    {/*        startContent={<HeartFilledIcon className="text-danger m-auto"/>}*/}
                    {/*        variant="flat"*/}
                    {/*    >*/}
                    {/*        Donate*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                </div>
            </NavbarMenu>
        </NextUINavbar>
    );
});

Navbar.displayName = "Navbar"