import Avatar from '../Avatar';
import './style.css'

const Abstract = () => (
    <div className="abstract">
      <div className="content">
        <div className="nameAndAvatar">
          <h1 className="name">Paulo Teixeira</h1>
          <Avatar/>
        </div>
        <div >
        <h2 className="abstractDetails">Front-end developer</h2>
        <p className="abstractDetails">Estudante do curso Web Front end & React na Let’s Code.</p>

        </div>
      </div>
      <div className="abstractButtons">
        <a href="https://github.com/paulinhoteixeira">GitHub</a>
        <a href="https://onedrive.live.com/download?cid=ED0414E82EC975AE&resid=ED0414E82EC975AE%213273&authkey=AKzzycjT5C2rYm0&em=2">
          Download CV
        </a>
      </div>
    </div>
    
  );
  
  export default Abstract;