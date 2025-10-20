import AboutCard from "../custom/AboutCard";

const About = () => {
  return (
    <div className="margin-top grid grid-rows-4 text-foreground md:grid md:grid-cols-2 md:grid-rows-2">
      <AboutCard
        icon="🐨"
        title="About Me"
        text={
          <p>
            I'm a software developer and bioinformatician with a Master's degree
            in Bioinformatics from the University of Bologna. Since the
            beginning of my studies, I've been fascinated by how technology can
            help us make sense of complex data by turning raw information into
            something meaningful and useful.
            <br />
            <br />I like working where science and software meet, but I also
            enjoy solving any kind of real-world problem with code. My
            background in computational biology taught me to think
            systematically about data, while my experience as a software
            engineer sharpened my focus on performance, scalability, and clean
            design. What I enjoy most is creating tools that are solid,
            efficient, and genuinely helpful (or at least funny) for the people
            who use them.
          </p>
        }
      />

      <AboutCard
        icon="💡"
        title="Personal Interests"
        link="/projects"
        text={
          <p>
            I'm a curious person who loves learning new things. I like reading
            about finance and personal growth, getting outside in nature, or
            just spending time with friends. I also enjoy staying active and
            train regularly in kickboxing.
            <br />
            <br />I love exploring what fascinates me, diving into new
            technologies, and following my curiosity wherever it leads.
          </p>
        }
      />

      <AboutCard
        icon="🎓"
        title="Academic Background"
        link="/studies"
        text={
          <p>
            During my studies, I focused on computational biology, data science,
            algorithms, and machine learning, gaining a solid foundation in
            statistical modeling, data analysis, and scientific programming.
            <br />
            <br />
            My master's thesis, "Identifying subtypes of Mild Cognitive
            Impairment due to Alzheimer's disease in cerebrospinal fluid
            proteomics: a Machine Learning approach", gave me practical
            experience designing machine learning pipelines to uncover patterns
            in complex biological data.
          </p>
        }
      />

      <AboutCard
        icon="👨‍💻"
        title="Professional Experience"
        link="/experiences"
        text={
          <p>
            I worked as a Bioinformatics Software Developer at 3Brain AG, where
            I helped develop BrainWave, a large-scale C#/.NET application for
            neural data analysis.
            <br />I worked on developing and optimizing data pipelines,
            improving algorithms, and building interactive visualizations to
            make large-scale neuronal recordings understandable and actionable
            for researchers.
            <br />
            Collaborating with scientists and engineers taught me how to bridge
            the gap between software development and science, building tools
            that make research faster and more reliable.
          </p>
        }
      />
    </div>
  );
};

export default About;
