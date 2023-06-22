import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { WithChildrenProps } from 'types';

export function HorizontalScrollSection({ children }: WithChildrenProps) {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({ target });
    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
    return (
        <motion.section
            className="flex h-[500vh] w-full flex-col items-start justify-start overflow-clip"
            ref={target}>
            <motion.div
                className="sticky top-0 flex h-screen w-fit flex-row items-start justify-start"
                style={{ x }}>
                {children}
            </motion.div>
        </motion.section>
    );
}
