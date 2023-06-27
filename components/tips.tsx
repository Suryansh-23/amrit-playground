import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface TipsProps {
    tips: string[];
}

const Tips: React.FC<TipsProps> = ({ tips }) => {
    const [currentTip, setCurrentTip] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTip((prevIndex) => (prevIndex + 1) % tips.length);
        }, 5000);

        return () => {
            clearInterval(timer);
        };
    }, [tips.length]);

    return (
        <div className="p-4 bg-gray-200 rounded-xl">
            <AnimatePresence mode="wait">
                <motion.p
                    className="text-gray-600 font-semibold text-center"
                    key={currentTip}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                >
                    {tips[currentTip]}
                </motion.p>
            </AnimatePresence>
        </div>
    );
};

export default Tips;
