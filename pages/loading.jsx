import React from "react";
import Image from 'next/image'

export default function Loading() {
    return (
        <div className="loading h-screen w-full flex flex-row justify-center items-center">
            <div className="logo-loading">
                <Image src="/img/logo.png" alt="Uriel - Portfolio" width={100} height={100}></Image>
            </div>
        </div>
    )
}