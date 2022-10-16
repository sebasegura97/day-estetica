import { motion } from "framer-motion";
import Link from "next/link";
import { IconProps } from "./types";

const path = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};

const Logo: React.FC<IconProps> = ({
  stroke = "#333",
  width = 72,
  fill = "#333",
}) => {
  return (
    <Link href="/">
      <motion.svg
        className="hover:cursor-pointer"
        viewBox="0 0 650.88 209.4"
        width={width}
        height={width * 0.32}
        stroke={stroke}
        fill={fill}
      >
        <motion.path
          variants={path}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 0.7, ease: "easeInOut" },
          }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="9px"
          d="M160.07 3C125.08 66.38 26.41 156.15 6.6 146.36c-12.78-8.87 12.36-40.65 15.15-44.5 2.42-3.36 32.59-47.71 69.86-4.53 2.28 2.54 4.59 5.38 6.92 8.55"
        />
        <motion.path
          variants={path}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 1,
            default: { duration: 0.7, ease: "easeInOut" },
          }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="9px"
          d="M87.3 94.38c-10 17.44-66.74 107.62 71.47 6.56 17-12.46 26.88-20.09 36.95-23.19 28.63-8.82 34.31 10 34.31 10"
        />
        <motion.path
          variants={path}
          initial="hidden"
          animate="visible"
          transition={{
            delay: 2,
            default: { duration: 2, ease: "easeInOut" },
          }}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="9px"
          d="M171.89 91.2s-58.89 50.19 17.76 26.41c27.77-10 27.33-11.18 27.33-11.18s-49.77 74.38 35.56 23.18c25.55-15.33 47.55-48.56 47.55-48.56s-95.1 119.22 63.9 0C347.42 109 281 221.39 259.78 204.73s65.89-74.61 94.76-90.23c64.67-35 202.22-39.34 293.34-9.7"
        />
      </motion.svg>
    </Link>
  );
};

export default Logo;
