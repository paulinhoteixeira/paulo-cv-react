import PageStructure from "../PageStructure";
import InfoBox from "../InfoBox";
import MCDenisDSBio from "../assets/mcDenisBio.PNG";
import OnlyBio from "../assets/onlyBio.PNG";

import './style.css'

const Projects = () => (
  <PageStructure>
    <div className="projects">
    <h1 className="projectsTitle">Projects</h1>

    <InfoBox title="Página da Bio do Instagram da banda Only">
      <a className="projectsLink" href="http://onlybio.netlify.app">
        <img src={OnlyBio} alt="Foto da página da banda Only" />
      </a>
    </InfoBox>

    <InfoBox title="Página da Bio do Instagram do MC Denis DS">
      <a className="projectsLink" href="http://mcdenisdsbio.netlify.app">
        <img src={MCDenisDSBio} alt="Foto da página do MC Denis DS" />
      </a>
    </InfoBox>

    </div>
  </PageStructure>
);

export default Projects;
