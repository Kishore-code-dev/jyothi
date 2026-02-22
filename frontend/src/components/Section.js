"use client";
import { motion } from "framer-motion";

export default function Section({ children, className, id }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ${className}`}
        >
            {/* Red line divider drawing effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-0 bg-[#7B1123]/20 group-in-view:h-20 transition-all duration-[2000ms] ease-out" />

            {children}
        </motion.section>
    );
}
