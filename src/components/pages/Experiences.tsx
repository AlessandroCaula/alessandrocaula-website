import ExperienceCard from "../common/ExperienceCard";

const Experiences = () => {
  return (
    <div className="pt-15">
      <h2 className="text-center font-lato text-4xl">Experience</h2>
      
      {/* Render the experience card */}
      <ExperienceCard
        role="Bioinformatics Software Developer"
        period="May 2022 - Sep 2025"
        company="@ 3Brain AG"
        description={
          <p>
            Designed and developed high-performance software for neural data
            acquisition, analysis, and visualization. Built scalable data
            pipelines, optimized algorithms for signal and frequency analysis,
            and created modular, maintainable architectures.
            <br />
            Developed interactive GUIs and visualizations that enabled
            researchers to explore complex neuroscientific data in real time.
          </p>
        }
        skills={["C#", ".NET", "OOP", "DevExpress", "WinForm", "R&D"]}
        link="https://www.3brain.com/products/software/brainwave-6"
        xInitialOffset={-300}
      />

      {/* Render the experience card */}
      <ExperienceCard
        role="Data Scientist Intern"
        period="Apr 2021 - Feb 2022"
        company="@ LASIGE research group"
        description={
          <p>
            Developed and implemented supervised and unsupervised machine learning pipelines for omics data analysis using Python. 
            <br />Performed data preprocessing, feature selection, and model evaluation, and visualized results to extract meaningful biological insights.
          </p>
        }
        skills={["Python", "NumPy", "Pandas", "Scikit-learn", "Jupyter Notebook"]} // , "Jupyter Notebook"
        link="https://github.com/AlessandroCaula/MasterThesis_Projects"
        xInitialOffset={300}
      />

    </div>
  );
};

export default Experiences;
