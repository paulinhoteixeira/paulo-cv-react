import Avatar from '../Avatar';
import './style.css'

const Abstract = () => (
    <div className="abstract">
      <div>
        <div className="nameAndAvatar">
          <h1 className="name">Paulo Teixeira</h1>
          <Avatar/>
        </div>

        <h2 className="details">Front-end developer</h2>
        <p className="details">Estudante do curso Web Front end & React na Let’s Code.</p>
      </div>
      <div className="abstractButtons">
        <a href="https://github.com/paulinhoteixeira">Projects</a>
        <a href="https://onedrive.live.com/download?cid=ED0414E82EC975AE&resid=ED0414E82EC975AE%213273&authkey=AKzzycjT5C2rYm0&em=2">
          Download CV
        </a>
      </div>
    </div>
    
  );
  
  export default Abstract;