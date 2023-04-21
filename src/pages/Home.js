import earth from '../image/earth.jpg';
import Input from '../components/Input';
import HomeInfo from '../components/Homeinfo';

const Home = () => (
  <div>
    <div className="content1">
      <div className="img-box">
        <img className="world-img spiner" src={earth} alt="world" />
      </div>
      <div className="banner-text">
        <p className="ban1"> The Continents</p>
      </div>
    </div>
    <div>
      <Input />
    </div>
    <h2 className="stats">STATS BY COUNTRY</h2>
    <HomeInfo />
  </div>
);

export default Home;
