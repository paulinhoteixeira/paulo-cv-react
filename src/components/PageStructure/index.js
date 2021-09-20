import Header from '../Header';
import Avatar from '../Avatar';
import Abstract from '../Abstract';

const PageStructure = ( props ) => (
    <div className="page-structure">
    <Header/>

    <div className="mainBox">
    <Abstract/>
    <Avatar/>

    </div>

    <div className="dynamicBox">   
    {props.children}

    </div>

    </div>
)

export default PageStructure;