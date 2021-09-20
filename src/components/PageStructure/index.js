import Header from "../Header";
import Avatar from "../Avatar";
import Abstract from "../Abstract";
import "./style.css";

const PageStructure = (props) => (
  <div className="page-structure">
    <Header />

    <main className="container">
        <div className="fixedBox">
        <Abstract />
        <Avatar />
        </div>

        <div className="dynamicBox">
            {props.children}
        </div>
    </main>
  </div>
);

export default PageStructure;
