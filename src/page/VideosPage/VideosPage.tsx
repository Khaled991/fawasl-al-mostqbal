import { ReactElement, useState } from 'react';
import Search from '../../assets/Icons/search.svg';
import { ReactComponent as YoutubeButton } from '../../assets/Img/youtube.svg';
import './VideosPage.scss';
import videos from './videos.data';
import PageContainer from '../../components/PageContainer/PageContainer';

const VideosPage = (): ReactElement => {
  const [showModal, setShowModal] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');

  const handelChangeValue = ({ target: { value } }: any) => {
    setSearchValue(value);
  };

  const filteredVideos = videos.filter(({ title }) =>
    title.includes(searchValue)
  );
  return (
    <PageContainer
      title="الفيديوهات"
      searchBox={
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
      }
      modal={
        showModal && (
          <div className="modal" onClick={() => setShowModal(null)}>
            <iframe
              title="fullscreenvideo"
              className="full-screen-video"
              src={`https://www.youtube.com/embed/${showModal}?autoplay=1`}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        )
      }
    >
      <div className="video-container">
        {filteredVideos.map(({ title, id }) => (
          <div className="video-and-title flex flex-col">
            <div className="relative float-left">
              <iframe
                title="video"
                className="video"
                src={`https://www.youtube.com/embed/${id}`}
              />
              <div
                className="clicked-video absolute top-0 left-0 w-full h-full"
                onClick={() => setShowModal(id)}
              >
                <YoutubeButton className="youtube-button" />
              </div>
            </div>
            <span className="text-xl pt-2 text-center md:text-right">
              {title}
            </span>
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default VideosPage;
