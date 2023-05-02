import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {
  percentage: number;
};

function SkillBar({ percentage }: Props) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (width < percentage) {
        setWidth((prevWidth) => prevWidth + 1);
      }
    }, 18);

    return () => clearInterval(intervalId);
  }, [width]);

  return (
    <div className="bg-gray-200 h-2 w-full rounded">
      <motion.div
        className="bg-red-500 h-2 rounded"
        style={{ width: `${width}%` }}
        initial={{ width: "0%" }}
        animate={{ width: `${width}%` }}
      />
    </div>
  );
}

export default SkillBar;
