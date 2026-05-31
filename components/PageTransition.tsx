'use client';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <MotionConfig reducedMotion="user">
            <AnimatePresence mode="wait">
                {/* Key on the pathname so this re-renders on route change */}
                <motion.div key={pathname}>
                    {/* Exit/Enter overlay */}
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: '100%' }}
                        exit={{ y: 0 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[999] bg-black"
                    />
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: '-100%' }}
                        transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[999] bg-black"
                    />

                    {/* Your page */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </MotionConfig>
    );
}
