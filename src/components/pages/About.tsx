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
            I'm a software developer and bioinformatician with a background in computational biology. I enjoy working where science meets software and love solving real problems with code. I’ve learned to treat data with care and build tools that are fast, clean, and useful.
            <br />
            <br />Curious by nature and always eager to learn, I enjoy reading about finance and personal growth, spending time outdoors, hanging out with friends, or staying active with kickboxing. 
            <br />
            <br />I love exploring what fascinates me, diving into new technologies, and following my curiosity wherever it leads.
          </p>
        }
      />
    </div>
  );
};

export default About;
