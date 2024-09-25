import AppHead from "@/Components/AppHead";
import Header from "@/Layouts/header";
import { motion } from "framer-motion";
import RenderScroll from "@/Components/RenderScroll";
import { useEffect } from "react";
import BarChart from "@/Components/BarChart";
import {
    UserCircleIcon,
    WrenchScrewdriverIcon,
    IdentificationIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { Textarea } from "@headlessui/react";

export default function Top({ auth, id }) {
    const data = [
        { label: "HTML/CSS", value: 50 },
        { label: "PHP", value: 70 },
        { label: "JS", value: 60 },
        { label: "AWS", value: 20 },
        { label: "MySQL", value: 20 },
    ];

    useEffect(() => {
        RenderScroll(id);
    });
    const handleScroll = (sid) => {
        const element = document.getElementById(sid);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" }); // スムーズにスクロール
        }
    };

    return (
        <>
            <AppHead title="Top" />
            <Header handleScroll={handleScroll} auth={auth} topPage="true" />
            <div className="bg-white">
                <div
                    id="section1"
                    className="bg-layout-300 h-screen flex items-center flex-col justify-center"
                >
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <GlobeAltIcon className="h-40 mb-2 " />
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
                                このサイトは、私がどんな人間なのか知ってもらいたいと思い作成しました。
                                <br />
                                今後勉強したweb関連の技術を記事にしていく予定です。
                                <br />
                            </p>
                        </motion.div>
                    </div>
                </div>
                <div
                    id="section2"
                    className="h-screen flex items-center flex-col justify-center"
                >
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
                <div
                    id="section3"
                    className="bg-layout-300 h-screen flex items-center flex-col justify-center"
                >
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
                            <BarChart data={data} title="skill stack" />
                        </motion.div>
                    </div>
                </div>
                <div
                    id="section4"
                    className="h-screen flex items-center flex-col justify-center"
                >
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
                <div
                    id="section5"
                    className="bg-layout h-screen flex items-center flex-col justify-center"
                >
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 3 }}
                    >
                        <PhoneIcon className="h-40 mb-2" />
                    </motion.div>
                    <div className="text-center">
                        <h1 className="text-5xl">Contact</h1>
                        <p>
                            ここまでご覧いただきありがとうございます。
                            <br />
                            このサイトを通して、私のことを少しでも知っていただけたのなら幸いです。
                            <br />
                            *ログイン不要です
                        </p>
                        <Textarea
                            name="description"
                            className="border data-[hover]:shadow data-[focus]:bg-blue-100"
                        ></Textarea>
                        <div className="h-4" />
                        <h2>Accounts URL</h2>
                        <p>
                            GitHub:
                            <a
                                href="https://github.com/TAKUO2000"
                                className="text-sky-400"
                            >
                                https://github.com/TAKUO2000
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
