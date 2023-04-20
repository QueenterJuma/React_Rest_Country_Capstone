import oceania from '../image/Oceania_stub.jpg';
import Input from './input';
import HomeInfo from './Homeinfo';

const Home = () => (
  <div>
    <div>
      <div>
        <img src={oceania} alt="ocenia" />
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
