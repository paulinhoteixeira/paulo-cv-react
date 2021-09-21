import React from "react";

import PageStructure from "../PageStructure";
import './style.css'
const Home = () => (
  <>
    <PageStructure>
      <div className="home">
        <div className="homeDetails">
          <h2>Paulo Teixeira de Oliveira</h2>
          <p>31 anos</p>
          <p>Brasileiro</p>
          <p>Solteiro</p>
          <p>São Paulo - SP</p>
        </div>

        <div className="homeProfile">
          <h2>Profile</h2>
          <p>
            Graduado em Ciências da Computação e Administração de Empresas com
            ênfase em finanças e com certificações SFPC (CertiProf), SFC
            (SCRUMstudy), CAPM (PMI) e ITIL V3. Experiência profissional em
            implantação e suporte de sistema de gestão e mais de 8 anos de
            atuação em Gestão de Projetos em empresas de TI. Altamente
            comprometido e engajado em encontrar soluções consistentes para as
            tarefas diárias e metas da empresa, colaborando com ideias,
            planejamento e estratégias. Tenho facilidade em me adaptar e
            interagir com novas equipes, ambientes e cultura organizacional. Em
            transição de carreira para desenvolvimento.
          </p>
        </div>
      </div>
    </PageStructure>
  </>
);

export default Home;
