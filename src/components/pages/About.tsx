import AboutCard from "../common/AboutCard";

// About Section
// 
const About = () => {
  return (
    <div className="flex-center pt-0"> 
      {/* Render the AboutCard component */}
      <AboutCard
        imgPath="/koala.svg"
        title="About Me"
        text={
          <p className="flex flex-grow items-center font-inter text-center text-foreground md:text-[18px] leading-7">
            I'm a software developer and bioinformatician with a background in computational biology. I enjoy working where science meets software and love solving real problems with code.
            <br />
            <br />I'm naturally curious and enjoy reading about finance and personal growth, spending time outdoors, hanging out with friends, and staying active with kickboxing. 
            <br />
            <br />I like experimenting with new technologies and figuring out how things work, whether it's for a project, a problem, or just to learn something new.
          </p>
        }
      />
    </div>
  );
};

export default About;
