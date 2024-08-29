"use client";

import { useState } from "react";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";

import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/react";

import {
    Bars3Icon,
    UserCircleIcon,
    XMarkIcon,
    WrenchScrewdriverIcon,
    IdentificationIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";

import { FlagIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, PhoneIcon } from "@heroicons/react/20/solid";

const introductions = [
    {
        name: "About this site",
        description: "このサイトの説明",
        href: "top",
        icon: GlobeAltIcon,
    },
    {
        name: "About me",
        description: "管理者の簡単な説明",
        href: "top",
        icon: UserCircleIcon,
    },
    {
        name: "My skill",
        description: "管理者のスキル",
        href: "top",
        icon: WrenchScrewdriverIcon,
    },
    {
        name: "Profile",
        description: "管理者の詳細な説明",
        href: "top",
        icon: IdentificationIcon,
    },
];
const callsToAction = [
    { name: "Contact administrator", href: "top", icon: PhoneIcon },
];

const items = [
    { name: "works", href: "top" },
    { name: "articles", href: "top" },
    { name: "etc...", href: "top" },
];

export default function Header({ auth }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-white border-b-2 bg-layout-200 bg-opacity-50 lg:sticky top-0">
                <nav
                    aria-label="Global"
                    className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                >
                    <div className="flex lg:flex-1">
                        <Link href={route("top")} className="-m-1.5 p-1.5">
                            <span className="sr-only">my portfolio</span>
                            <motion.div
                                transition={{ duration: 3 }}
                                animate={{ opacity: 1, rotate: 350 }}
                                initial={{ opacity: 0 }}
                            >
                                <FlagIcon className="h-8 w-auto" />
                            </motion.div>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                Top
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 flex-none text-gray-400"
                                />
                            </PopoverButton>
                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-4">
                                    {introductions.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon
                                                    aria-hidden="true"
                                                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                />
                                            </div>
                                            <div className="flex-auto">
                                                <Link
                                                    href={route(item.href)}
                                                    className="block font-semibold text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className=" divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={route(item.href)}
                                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-5 text-gray-900 hover:bg-gray-100"
                                        >
                                            <item.icon
                                                aria-hidden="true"
                                                className="h-5 w-5 flex-none text-gray-400"
                                            />
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>

                        {items.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </PopoverGroup>

                    {auth.user ? (
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link
                                href={route("dashboard")}
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                {auth.user.name}
                            </Link>
                        </div>
                    ) : (
                        <>
                            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                                <Link
                                    href={route("login")}
                                    className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    login
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Register
                                </Link>
                            </div>
                        </>
                    )}
                </nav>
                <Dialog
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                    className="lg:hidden"
                >
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">my portfolio</span>
                                <FlagIcon className="h-8 w-auto" />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="h-6 w-6"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Disclosure as="div" className="-mx-3">
                                        <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                            Top
                                            <ChevronDownIcon
                                                aria-hidden="true"
                                                className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 space-y-2">
                                            {[
                                                ...introductions,
                                                ...callsToAction,
                                            ].map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={route(item.href)}
                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </Disclosure>
                                    {items.map((item) => (
                                        <div key={item.name}>
                                            <Link
                                                href={route(item.href)}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <div className="py-6">
                                    {auth.user ? (
                                        <>
                                            <Link
                                                href={route("dashboard")}
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                dashboard
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link
                                                href={route("login")}
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                login
                                            </Link>
                                            <Link
                                                href={route("register")}
                                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            >
                                                Register
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </>
    );
}
