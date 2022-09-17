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
    <a href="https://drive.google.com/file/d/1BxvLTsUrK2CH-TG6D4G5R4aZ7UC6pi5s/view?usp=sharing" className="btn">
      Download currículo
    </a>
  </aside>;
};

export default Sidebar;