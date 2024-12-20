import headshotImg from "@/assets/images/profilePic.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import MagicButton from "@/components/MagicButton";
import githubLogo from "@/assets/icons/github-logo.png";
import leetcodeLogo from "@/assets/icons/lclogo.png";
import linkedinlogo from "@/assets/icons/linkedinlogo.png";
import resumelogo from "@/assets/icons/resumelogo.png";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-40 relative z-2">
      <div className="container">
        <div className="flex flex-col items-center animate-fade">
          <Image
            src={headshotImg}
            alt="Courtney Scrimshaw headshot"
            className="rounded-full"
            width={125}
            height={125}
            objectFit="cover"
          />
          <div className="bg-gray-950 border border-gray-800 mt-6 px-4 py-1.5 inline-flex items-center gap-3 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-pingLarge"></div>
            </div>
            <div className="text-small font-medium">
              Seeking a Software Engineering Role
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl md:text-5xl text-center mt-10 mb-6 tracking-wide font-bold">
              Hi, I'm Courtney!
            </h1>
            <p className="mt-4 mb-6 text-center text-white/80 md:text-lg">
              Second-year Computer Science student at the University of Guelph
              and recent graduate of BrainStation's Software Engineering
              bootcamp. Alongside 8+ YOE in SaaS Customer Success, Operations,
              and Project Management, I specialize in building scalable,
              user-centric applications using modern tech stacks.
            </p>
          </div>

          {/* Static Buttons for GitHub, LeetCode, and Resume */}
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a
              href="https://www.linkedin.com/in/courtneyscrimshaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-[#7be5b8] border border-black px-6 py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#52d19d] transition-all"
            >
              <Image
                src={linkedinlogo}
                alt="LinkedIn Logo"
                width={24}
                height={24}
              />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/cscrim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-[#7be5b8] border border-black px-6 py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#52d19d] transition-all"
            >
              <Image
                src={githubLogo}
                alt="GitHub Icon"
                width={24}
                height={24}
              />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/u/cscrim/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-[#7be5b8] border border-black px-6 py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#52d19d] transition-all"
            >
              <Image
                src={leetcodeLogo}
                alt="LeetCode Icon"
                width={24}
                height={24}
              />
              <span>LeetCode</span>
            </a>

            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black bg-[#7be5b8] border border-black px-6 py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#52d19d] transition-all"
            >
              <Image
                src={resumelogo}
                alt="Resume Icon"
                width={24}
                height={24}
              />
              <span>Resume</span>
            </a> */}
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <a href="#projects">
              <MagicButton
                title="See my work"
                icon={<ArrowDown className="size-4" />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
