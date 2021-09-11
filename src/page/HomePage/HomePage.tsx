import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="home-page absolute md:relative">
      <div className="home-page-image-container w-full z--1 right-0 md:z-1">
        <img
          src="src/assets/Img/homePageImage.svg"
          alt="homePageImage"
          className="home-page-image"
        />
      </div>
      {/* lg:text-3xl xl:text-4xl  */}
      <div className="css-typing md:text-3xl md:leading-loose lg:text-4xl lg:leading-lg xl:text-5xl xl:leading-xl">
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
      </div>
      {/* <div className="home-page-chat-button-container">
        <img
          src="src/assets/Icons/chat.svg"
          alt="chatIcon"
          className="home-page-chat-button"
        />
      </div> */}
    </div>
  );
};

export default HomePage;
