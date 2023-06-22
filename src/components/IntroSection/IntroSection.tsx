import model from 'assets/model.jpg';
import Image from 'next/image';
import { IconLink } from './IconLink';
import { FaBehance, FaInstagram, FaTwitter } from 'react-icons/fa';
import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion';
import { useRef } from 'react';
export function IntroSection() {
    const target = useRef(null);
    const { scrollYProgress } = useScroll({
        target,
        offset: ['start start', 'center start'],
    });
    const spring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const portraitY = useTransform(spring, [0, 1], [-50, 50]);
    const titleY = useTransform(spring, [0, 1], [0, -200]);
    const portraitSize = useTransform(spring, [0, 1], ['80vh', '100vh']);
    useMotionValueEvent(scrollYProgress, 'change', (v) => console.log(v));
    return (
        <section
            className="flex min-h-screen w-full items-center justify-center px-6 pt-24 font-title"
            ref={target}>
            <div className="relative flex w-full flex-col items-center justify-start">
                <motion.div
                    className="flex flex-col items-center justify-center"
                    style={{ y: titleY }}>
                    <div className="text-3xl font-medium">Photographer</div>
                    <header className=" z-10 whitespace-nowrap pb-12 pt-6 text-4xl  font-semibold uppercase md:pb-16 md:pt-8 md:text-7xl lg:text-8xl">
                        Ruby Thompson
                    </header>
                </motion.div>
                <div className="flex w-full flex-row items-center justify-center">
                    <div className="hidden flex-1 flex-grow text-center text-xl font-medium md:block">
                        ruby@gmail.com
                    </div>
                    <motion.div
                        className="relative flex aspect-[10/16] w-full origin-top items-center justify-center overflow-clip rounded-full saturate-[0.9] md:h-[80vh] md:w-auto"
                        style={{ height: portraitSize }}>
                        <motion.div
                            className="relative h-[125%] w-[125%]"
                            style={{ y: portraitY }}>
                            <Image
                                src={model}
                                alt="Model"
                                className="object-cover"
                                fill
                                placeholder="blur"
                            />
                        </motion.div>
                    </motion.div>
                    <div className="hidden flex-1 flex-grow flex-row items-center justify-center gap-8 text-center text-2xl font-semibold md:flex">
                        <IconLink href="" Icon={FaInstagram} />
                        <IconLink href="" Icon={FaBehance} />
                        <IconLink href="" Icon={FaTwitter} />
                    </div>
                </div>
            </div>
        </section>
    );
}
