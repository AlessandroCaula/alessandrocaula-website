import { type ReactNode } from "react";
import { BiLinkExternal } from "react-icons/bi";
import HorizontalAnimatedCardWrapper from "./HorizontalAnimatedCardWrapper";

interface props {
  role: string;
  period: string;
  company: string;
  description: ReactNode;
  skills: string[];
  link?: string;
  xInitialOffset: number;
}

const ExperienceCard = ({
  role,
  period,
  company,
  description,
  skills,
  link,
  xInitialOffset,
}: props) => {
  return (
    <HorizontalAnimatedCardWrapper xInitialOffset={xInitialOffset}>
      <div className="card-style p-8 relative">
        <div className="flex flex-col gap-2">
          <div className="flex sm:flex-row flex-col justify-between items-center">
            <h2 className="text-center text-[21px] font-bold">{role}</h2>
            <p className="text-md font-light">{period}</p>
          </div>
          <p className="text-xl font-roboto font-light text-center sm:text-left">
            {company}
          </p>
        </div>
        <div className="border-[0.5px] border-orange-400 mt-5"></div>
        <div className="mt-5 leading-7 font-light text-justify font-inter">
          {description}
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Relevant skills:</p>
          <ul className="columns-3 rows-4 max-sm:columns-2 font-lato pt-3 space-y-1">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex justify-start items-center gap-4 font-inter text-foreground"
              >
                <div className="w-[5px] h-[5px] bg-foreground rounded-full items-center"></div>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            className="text-xl text-foreground absolute bottom-8 right-8 cursor-pointer hover:text-orange-400"
          >
            <BiLinkExternal className="opacity-80" />
          </a>
        )}
      </div>
    </HorizontalAnimatedCardWrapper>
  );
};

export default ExperienceCard;
