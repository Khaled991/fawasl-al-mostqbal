import { ReactElement, useState } from 'react';
import Search from '../../assets/Icons/search.svg';
import { ReactComponent as YoutubeButton } from '../../assets/Img/youtube.svg';
import './VideosPage.scss';

const VideosPage = (): ReactElement => {
  const [showModal, setShowModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handelChangeValue = ({ target: { value } }: any) => {
    setSearchValue(value);
  };

  return (
    <div className="videos-page">
      <div className="video-header p-0 md:p-8 justify-center md:justify-between ">
        <span className="text-2xl font-medium hidden md:block ">
          الفيديوهات
        </span>
        <div className="search-box">
          <input
            type="text"
            placeholder="بحث..."
            className="pl-2 w-72"
            onChange={handelChangeValue}
            value={searchValue}
          />
          <img src={Search} alt="" width="22" />
        </div>
      </div>
      <div className="videos-container mt-7 md:mt-0 justify-center md:justify-start ">
        <div className="video-and-title flex flex-col">
          <div className="relative float-left">
            <iframe
              title="video"
              className="video"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            />
            <div
              className="clicked-video absolute top-0 left-0 w-full h-full"
              onClick={() => setShowModal(true)}
            >
              <YoutubeButton className="youtube-button" />
            </div>
          </div>
          <span className="text-xl pt-2 text-center md:text-right">
            Bohemian Rhapsody | Muppet Music Video | The Muppets
          </span>
        </div>
      </div>
      {showModal ? (
        <div className="modal" onClick={() => setShowModal(false)}>
          <iframe
            title="fullscreenvideo"
            className="full-screen-video"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
            allow="autoplay"
            allowFullScreen
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default VideosPage;
