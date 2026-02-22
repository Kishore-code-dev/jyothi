"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function VelvetCurtain() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 3500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="curtain-container"
                    className="fixed inset-0 z-[1000] flex flex-col pointer-events-none"
                    exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
                >
                    {/* Top Curtain / Stage Top */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: 2, ease: [0.65, 0, 0.35, 1], delay: 2 }}
                        className="h-1/2 w-full bg-[#7B1123] relative flex items-end justify-center pb-20 origin-top"
                    >
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="z-10 text-center"
                        >
                            <h2 className="text-white/20 text-[0.6rem] tracking-[1em] uppercase font-bold mb-4">The Grand Reveal™</h2>
                            <h1 className="text-[#F8F6F4] text-4xl md:text-6xl font-serif italic tracking-tighter">Crimson Stage Opening</h1>
                        </motion.div>
                    </motion.div>

                    {/* Bottom Curtain / Stage Bottom */}
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: "100%" }}
                        transition={{ duration: 2, ease: [0.65, 0, 0.35, 1], delay: 2 }}
                        className="h-1/2 w-full bg-[#5A0D18] relative flex items-start justify-center pt-20 origin-bottom"
                    >
                        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstripe-dark.png')]" />
                        <div className="w-px h-20 bg-white/10" />
                    </motion.div>

                    {/* Dramatic Center Logo/Text Reveal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, times: [0, 0.5, 1] }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="text-white text-9xl font-serif italic opacity-[0.05] pointer-events-none">VELVET</div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
