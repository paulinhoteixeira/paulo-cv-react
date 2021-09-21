import PageStructure from "../PageStructure";
import InfoBox from "../InfoBox";

const Details = () => (
  <div>
    <PageStructure>
      <InfoBox title="Education">
        <p>Ciência da Computação</p>
        <div></div>
        <p>Administração</p>
      </InfoBox>

      <InfoBox title="Experience">
        <p>Ciência da Computação</p>
        <div></div>
        <p>Administração</p>
      </InfoBox>

      <InfoBox title="Coding">
        <p>HTML</p>
        <div></div>
        <p>CSS</p>
        <div></div>
        <p>Javascript</p>
        <div></div>
        <p>React</p>
      </InfoBox>

      <InfoBox title="Tools and technologies">
        <p>Visual Studio Code</p>
        <div></div>
        <p>GIT</p>
        <div></div>
        <p>Git Hub</p>
        <div></div>
        <p>Figma</p>
      </InfoBox>

      <InfoBox title="Project Management">
        <p>Scrum</p>
        <div></div>
        <p>Kanban</p>
        <div></div>
        <p>PMI</p>
      </InfoBox>
    </PageStructure>
  </div>
);

export default Details;
