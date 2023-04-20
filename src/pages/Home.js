import earth from '../image/earth.jpg';
import Input from '../components/Input';
import HomeInfo from '../components/Homeinfo';

const Home = () => (
  <div>
    <div>
      <div>
        <img src={earth} alt="ocenia" />
      </div>
      <div className="banner-text">
        <p className="b1"> OCEANIA</p>
        {/* <p className="b2">
          {data.length}

          nations
        </p> */}
      </div>
    </div>
    <div>
      <Input />
    </div>
    <h2>Oceania Countries</h2>
    <HomeInfo />
  </div>
);

export default Home;
