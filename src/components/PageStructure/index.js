import Header from "../Header";
import Abstract from "../Abstract";
import "./style.css";

const PageStructure = (props) => (
  <div className="page-structure">
    <Header />

    <main className="container">
        <div className="fixedBox">
        <Abstract />
        </div>

        <div className="dynamicBox">
            {props.children}
        </div>
    </main>
  </div>
);

export default PageStructure;
