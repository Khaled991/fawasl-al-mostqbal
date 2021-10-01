import './HomePage.scss';
import HomePageImage from '../../assets/Img/homePageImage.svg';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page absolute md:relative grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:justify-items-end">
      <div className="home-page-image-container w-full z--1 right-0 md:z-1">
        <img
          src={HomePageImage}
          alt="homePageImage"
          className="home-page-image"
        />
      </div>
      <div className="css-typing leading-relaxed text-3xl md:leading-loose lg:text-4xl lg:leading-lg xl:text-4-5xl xl:leading-xl self-start lg:self-center">
        <p>
          لم يكن من السهل ادارة{' '}
          <span className="special-text-color">نقاط البيع</span>
        </p>
        <p>
          <span className="special-text-color">والمحاسبة</span> ببرنامج واحد
          ولكن
        </p>
        <p>
          يمكنك الان <span className="special-text-color">ببرنامجنا</span>
        </p>
        <div className="buttons-and-text-container self-center lg:self-start">
          <Link to="/download">
            <Button buttonStyleType="solidGreen">تجربة مجانية</Button>
          </Link>
          <Link to="/download">
            <Button buttonStyleType="greenBorder">تجربة كاملة</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
