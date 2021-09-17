import PageStructure from "../PageStructure";
import InfoBox from "../InfoBox";
import MCDenisDSBio from "../assets/mcDenisBio.PNG"
import OnlyBio from "../assets/onlyBio.PNG"

const Projects = () => (
    <PageStructure>

<InfoBox title="Página da Bio do Instagram da banda Only">
        <a href="http://onlybio.netlify.app"><img src={OnlyBio} alt="Foto da página da banda Only" /></a>       

    </InfoBox>

    <InfoBox title="Página da Bio do Instagram do MC Denis DS">
        <a href="http://mcdenisdsbio.netlify.app"><img src={MCDenisDSBio} alt="Foto da página do MC Denis DS" /></a>       

    </InfoBox>

    </PageStructure>
)

export default Projects;