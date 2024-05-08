import { BackgroundGradientAnimation } from "@/components/aceternity/ui/bg-gradient";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {HeartFilledIcon} from "@/components/icons";
import {Button} from "@/components/shadcn/ui/button";
import {siteConfig} from "@/config/site";

export default function DonatePage() {
    return (
        <div className={"overflow-x-hidden"}>
            <div className="text-center mt-10 align-middle p-2">
                <h1 className="text-[2.9rem] md:text-7xl text-bold text-white secondary">How to donate?</h1>
                <p className="text-base md:text-xl my-3 text-neutral-200 p-2">
                    Our team appreciates both in-kind and monetary donation
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className={"grid place-items-center"}>
                        <h1 className="text-2xl main">Online Donation</h1>
                        <hr className="align-middle border-gray-200 my-2 w-[60%] overflow-x-hidden m-auto"/>
                        <p className={"secondary text-lg"}>
                            Online donations can be made at
                            <Link
                                href={"https://bthsalumni.org/donate"}
                                color={"success"}
                                className={"mx-1 underline"}
                            >
                                https://bthsalumni.org/donate
                            </Link>
                            <br/>
                            <br/>
                            Select "<b>Robotics</b>" under <b>Designation</b>
                        </p>
                        <Image
                            src={"/donation.png"}
                            alt={"How to donate"}
                            height={"400"}
                            width={"800"}
                            className={"mt-3"}
                        />
                    </div>
                    <div>
                        <div>
                            <h1 className="text-2xl main">Checks</h1>
                            <hr className="align-middle border-gray-200 my-2 w-[60%] overflow-x-hidden m-auto"/>
                            <div className={"space-y-20"}>
                                <p className={"secondary text-lg"}>
                                    Checks can be mailed to:
                                    <br/>
                                    <br/>
                                    Brooklyn Tech Alumni Foundation
                                    <br/>
                                    P.O. Box 26608
                                    <br/>
                                    Attn: Techknights Robotics Donation
                                </p>
                                <p className={"secondary text-lg text-red-300"}>
                                    The Brooklyn Technical Alumni foundation is a 501(c)(3) nonprofit organization. A W-9 form can be provided on request. Our tax ID is 11-2739496. All donations are tax deductible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}