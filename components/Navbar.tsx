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

import {ThemeSwitch} from "@/components/theme-switch";
import {GithubIcon, InstagramIcon, LoginIcon, YoutubeIcon} from "@/components/icons";
import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/components/shadcn/ui/dropdown-menu";

const Profile = React.memo(() => {
    const {user, logout} = useAuth0();

    const name = user?.name;
    const picture = user?.picture;

    const handleLogout = () => {
        logout({logoutParams: {returnTo: window.location.origin}});
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image
                    src={picture}
                    alt={name}
                    width={40}
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-4">
                <DropdownMenuLabel>Hi {name}!</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem onClick={handleLogout}>
                        <LoginIcon width={30} height={30}/> Log out
                        <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
});

Profile.displayName = "DesktopProfile"

const ProfileMenu = React.memo(() => {
    const {user, logout} = useAuth0();

    const name = user?.name;
    const picture = user?.picture;

    const handleLogout = () => {
        logout({logoutParams: {returnTo: window.location.origin}});
    };

    return (
        <div className="flex items-center justify-between p-3">
            <div className="flex items-center justify-start gap-2 text-xl">
                <Image
                    src={picture}
                    alt={name}
                    width={40}
                    className="rounded-full mr-2"
                />
                <span className="mr-2">Hi, <b>{name}</b></span>
            </div>
            <div className="flex items-center justify-end">
                <button onClick={handleLogout} className="text-danger m-auto">
                    <LoginIcon width={44} height={44} className={"align-middle"}/>
                </button>
            </div>
        </div>
    );
});

ProfileMenu.displayName = "MobileNavbar"

export const Navbar = React.memo(() => {
    const {isAuthenticated, loginWithRedirect} = useAuth0();
    const [isMenuOpen, setIsMenuOpen] = React.useReducer((current) => !current, false);

    return (
        <NextUINavbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}
                      className={"flex z-20 box-border border-shadow-lg p-0 capitalize rounded-[3.5rem] max-w-screen-lg mx-auto mt-7 shadow"}>
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
                <NavbarItem className="gap-2 flex">
                    <Link isExternal href={siteConfig.links.instagram} aria-label="Instagram"
                          className={"hidden lg:flex"}>
                        <InstagramIcon className="text-default-500 m-auto"/>
                    </Link>
                    <Link isExternal href={siteConfig.links.github} aria-label="Github" className={"hidden lg:flex"}>
                        <GithubIcon className={"text-default-500 m-auto"}/>
                    </Link>
                    <ThemeSwitch/>
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
                <div className="hidden lg:flex border-l dark:border-gray-300 border-gray-900 h-6 mx-2"/>
                <NavbarItem className="hidden lg:flex">
                    {isAuthenticated ? (
                        <Profile/>
                    ) : (
                        <Button
                            onClick={() => loginWithRedirect()}
                            className="text-sm text-default-800 font-bold bg-default-100"
                            variant="flat"
                            startContent={<LoginIcon width={32} height={32}/>}
                        >
                            Log In
                        </Button>
                    )}
                </NavbarItem>

            </NavbarContent>
            <NavbarMenu
                className="box-border border-shadow-lg p-0 capitalize rounded-[1.1rem] shadow flex flex-col mt-10 fixed w-[300px]">
                <div className="flex flex-col mt-5 mb-3">
                    {isAuthenticated ? (
                        <ProfileMenu/>
                    ) : (
                        <Button
                            onClick={() => loginWithRedirect()}
                            className="text-sm text-default-800 font-bold w-[40%] align-middle m-auto"
                            variant="flat"
                            startContent={<LoginIcon width={32} height={32}/>}
                        >
                            Log In
                        </Button>
                    )}
                </div>
                <hr className="align-middle border-gray-200 my-2 w-[90%] overflow-x-hidden m-auto"/>
                <div className="flex flex-col p-4 space-y-10 mt-3">
                    <NavbarMenuItem>
                        <Link
                            color="success"
                            className="w-full block main text-2xl text-center"
                            href="/"
                            size="lg"
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
                        <ThemeSwitch/>

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