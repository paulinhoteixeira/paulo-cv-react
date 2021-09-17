import Header from '../Header';
import Avatar from '../Avatar';
import Abstract from '../Abstract';

const PageStructure = ( props ) => (
    <>
    <Header/>
    <Abstract/>
    <Avatar/>
    {props.children}
    </>
)

export default PageStructure;