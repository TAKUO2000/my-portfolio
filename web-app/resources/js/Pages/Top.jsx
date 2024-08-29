import AppHead from "@/Components/AppHead";
import Header from "@/Layouts/header";
import { motion } from "framer-motion";
import {
    UserCircleIcon,
    WrenchScrewdriverIcon,
    IdentificationIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { Textarea } from "@headlessui/react";

export default function Top({ auth }) {
    return (
        <>
            <AppHead title="Top" />
            <Header auth={auth} />
            <div className="bg-white">
                <div className="bg-layout-300 h-screen flex items-center flex-col justify-center">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <GlobeAltIcon className="h-40 mb-2" />
                    </motion.div>
                    <div className="text-center">
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                        >
                            <h1 className="text-5xl">About this site</h1>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, y: "0px" }}
                            initial={{ opacity: 0, y: "200px" }}
                            transition={{ duration: 1 }}
                        >
                            <p className="pt-10 text-2xl">
                                このサイトは、Takuoのポートフォリオサイトです。
                                <br />
                                このサイトでは、私がどんな人間なのか知ってもらいたいと思い作成しました。
                                <br />
                                また、今後勉強したweb関連の技術を記事にしていく予定です。
                                <br />
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="h-screen flex items-center flex-col justify-center">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <UserCircleIcon className="h-40 mb-2" />
                    </motion.div>
                    <div className="text-center">
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                        >
                            <h1 className="text-5xl ">About me</h1>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, y: "0px" }}
                            initial={{ opacity: 0, y: "200px" }}
                            transition={{ duration: 1 }}
                        >
                            <p className="pt-10 text-2xl">
                                バックエンドエンジニア志望の大学3年生のTakuoです。
                                <br />
                                大学では、電気電子工学を学んでいます。
                                <br />
                                趣味はPCゲーム、漫画、アニメ、音楽鑑賞とかで基本インドアです。
                                <br />
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div className="bg-layout-300 h-screen flex items-center flex-col justify-center">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <WrenchScrewdriverIcon className="h-40 mb-2" />
                    </motion.div>
                    <div className="text-center">
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            transition={{ duration: 3 }}
                        >
                            <h1 className="text-5xl">My skill</h1>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, y: "0px" }}
                            initial={{ opacity: 0, y: "200px" }}
                            transition={{ duration: 1 }}
                        >
                            <p className="pt-10 text-2xl"></p>
                        </motion.div>
                    </div>
                </div>
                <div className="h-screen flex items-center flex-col justify-center">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <IdentificationIcon className="h-40 mb-2" />
                    </motion.div>
                    <div className="text-center">
                        <h1 className="text-5xl">Profile</h1>
                    </div>
                </div>
                <div className="bg-layout h-screen flex items-center flex-col justify-center">
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <PhoneIcon className="h-40 mb-2" />
                    </motion.div>
                    <div className="text-center">
                        <h1 className="text-5xl">Contact</h1>
                        <Textarea
                            name="description"
                            className="border data-[hover]:shadow data-[focus]:bg-blue-100"
                        ></Textarea>
                    </div>
                </div>
            </div>
        </>
    );
}
