import SocialNetworkContainer from './SocialNetworkContainer';
import InformationContainer from "./InformationContainer";
import Avatar from '../img/Marcus Vinicius.jpeg';

import '../styles/components/sidebar.sass';


const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Marcus Vinícius Abdalla" />
    <p className="title">Web Full Stack</p>
    <SocialNetworkContainer/>
    <InformationContainer />
    <a href="https://drive.google.com/file/d/17wqU1izfSwJArx6Oe1Z6_89Wq8N6b6lz/view?usp=sharing" className="btn">
      Download currículo
    </a>
  </aside>;
};

export default Sidebar;