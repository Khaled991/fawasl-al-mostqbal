import './HomePage.scss';
import HomePageImage from '../../assets/Img/homePageImage.svg';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page absolute md:relative flex flex-col lg:flex-row justify-items-center lg:justify-items-end">
      <div className="home-page-image-container lg:justify-items-end h-full z--1 right-0 md:z-1 flex-col flex-1 p-0 lg:pl-0 lg:p-20">
        <div className="web-name web-name-mobile w-full text-center block lg:hidden lg:text-right">
          فواصل المستقبل
        </div>
        <img
          src={HomePageImage}
          alt="homePageImage"
          className="home-page-image h-auto lg:h-full  lg:w-auto w-full"
        />
      </div>
      {/* <HomePageTextDesktop /> */}
      <div className=" self-start lg:self-center w-full lg:w-auto">
        <div className="web-name text-center lg:text-right  hidden lg:block">
          فواصل المستقبل
        </div>
        <HomePageTextMobile />
      </div>
    </div>
  );
};

export default HomePage;

// const HomePageTextDesktop = () => {
//   return (
//     <div className="css-typing leading-relaxed text-3xl md:leading-loose lg:text-4xl lg:leading-lg xl:text-4-5xl xl:leading-xl self-start lg:self-center">
//       <p>
//         لم يكن من السهل ادارة{" "}
//         <span className="special-text-color">نقاط البيع</span>
//       </p>
//       <p>
//         <span className="special-text-color">والمحاسبة</span> ببرنامج واحد ولكن
//       </p>
//       <p>
//         يمكنك الان <span className="special-text-color">ببرنامجنا</span>
//       </p>
//       <div className="buttons-and-text-container self-center lg:self-start">
//         <Link to="/download">
//           <Button buttonStyleType="solidGreen">جرب الآن</Button>
//         </Link>
//         {/* <Link to="/download">
//       <Button buttonStyleType="greenBorder">تجربة كاملة</Button>
//     </Link> */}
//       </div>
//     </div>
//   );
// };

const HomePageTextMobile = () => {
  return (
    <div
      className="css-typing
        leading-relaxed
        text-2xl
        sm:text-3xl
        sm:leading-loose
        lg:text-4xl
        lg:leading-lg
        xl:text-4-5xl
        xl:leading-xl
        self-start
        lg:self-center
        items-center
        lg:items-start
        mb-5
        lg:mb-0
      "
    >
      <p>
        لم يكن من السهل ادارة{' '}
        <span className="special-text-color">نقاط البيع</span>
      </p>
      <p>
        <span className="special-text-color">والمحاسبة</span> ببرنامج واحد ولكن
      </p>
      <p>
        يمكنك الان <span className="special-text-color">ببرنامجنا</span>
      </p>
      <div className="buttons-and-text-container self-center lg:self-start">
        <Link to="/download">
          <Button buttonStyleType="solidGreen">جرب الآن</Button>
        </Link>
        {/* <Link to="/download">
      <Button buttonStyleType="greenBorder">تجربة كاملة</Button>
    </Link> */}
      </div>
    </div>
  );
};
