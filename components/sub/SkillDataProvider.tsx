 "use client"; 

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";  

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3 * index;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={imageVariants}
      transition={{ delay: animationDelay, duration: 0.5 }}
    >
      <Image src={src} width={width} height={height} alt="Skill Image" />
    </motion.div>
  );
};

export default SkillDataProvider;
