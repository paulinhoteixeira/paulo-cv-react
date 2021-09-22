import PageStructure from "../PageStructure";
import InfoBox from "../InfoBox";

const Details = () => (
  <PageStructure>
      <div className="details">
      <InfoBox title="Education">
        <div>
          <h3>Ciência da Computação</h3>
          <p>UNINOVE</p>
          <p>Janeiro/2007 – Dezembro/2010</p>
        </div>
        <div>
          <h3>Administração de Empresas com Ênfase em Finanças</h3>
          <p>FECAP</p>
          <p>Julho/2012 – Junho/2016</p>
        </div>
        
      </InfoBox>

      <InfoBox title="Work Experience">
      <div>
          <h3>Coordenador – PMO</h3>
          <p>Linx Sistemas e Consultoria LTDA.</p>
          <p>Novembro/2019 – Atual</p>
        </div>
        <div>
          <h3>Consultor de Projetos Sênior - PMO</h3>
          <p>Millennium Network LTDA.</p>
          <p>Janeiro/2013 – Outubro/2019</p>
        </div>
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
  </div>
    </PageStructure>
);

export default Details;
