import AboutCard from "../custom/AboutCard";

const About = () => {
  return (
    <div className="flex-center"> 
      <AboutCard
        imgPath="/koala.svg"
        title="About Me"
        text={
          <p>
            I'm a software developer and bioinformatician with a background in computational biology. I enjoy working where science meets software and love solving real problems with code. 
            My experience taught me to think carefully about data and to build tools that are fast, clean, and genuinely useful (or at least make someone smile).
            <br />
            <br />I'm curious by nature and always eager to learn. I enjoy reading about finance and personal growth, spending time outdoors, hanging out with friends, or staying active with kickboxing. 
            <br />
            <br />I love exploring what fascinates me, diving into new technologies, and following my curiosity wherever it leads.
          </p>
        }
      />
    </div>
  );
};

export default About;
