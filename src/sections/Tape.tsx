import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

export const TapeSection = () => {
  const words = [
    "Collaborative",
    "Modular",
    "Adaptable",
    "Proactive",
    "Robust",
    "Solution Oriented",
    "Agile",
    "User Centric",
    "Efficient",
    "Scalable",
    "Creative",
    "Optimized"
  ];

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-400 to-emerald-200 -mx-1">
        <div className="flex">
          <div className="flex flex-none gap-4 py-3 translate-x-4">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 " />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};