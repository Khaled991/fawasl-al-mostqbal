import {
  ReactElement,
  lazy,
  Suspense,
  useEffect,
  useRef,
  RefObject,
} from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Loading from './components/loading/loading';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsChatButtonShown,
  selectIsChatShown,
} from './redux/chat/chat.selector';
import { ReactComponent as ChatIcon } from './assets/Icons/chat.svg';
import Chat from './components/Chat/Chat';
import {
  modifyScrollHeightAction,
  setMessagesAction,
  toggleChatAction,
} from './redux/chat/chat.actions';
import { getTenMessages } from './redux/chat/chat.utils';
import { signInAnonymously } from 'firebase/auth';
import { auth } from './utils/firebase';
import { setAuthUuidAction } from './redux/uuid/auth.actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PartnerDetailsPage = lazy(
  () => import('./page/PartnerDetailsPage/PartnerDetailsPage')
);
const AnswerOfQuestion = lazy(
  () => import('./page/SupportPage/subpage/AnswerOfQuestion')
);
const HomePage = lazy(() => import('./page/HomePage/HomePage'));
const DownloadPage = lazy(() => import('./page/DownloadPage/DownloadPage'));
const SupportPage = lazy(() => import('./page/SupportPage/SupportPage'));
const PartnersPage = lazy(() => import('./page/PartnersPage/PartnersPage'));
const ServicesPage = lazy(() => import('./page/ServicesPage/ServicesPage'));
const NotFoundPage = lazy(() => import('./page/NotFoundPage/NotFoundPage'));
const VideosPage = lazy(() => import('./page/VideosPage/VideosPage'));
const BusinessPartnersPage = lazy(
  () => import('./page/BusinessPartnersPage/BusinessPartnersPage')
);

const App = (): ReactElement => {
  const isChatButtonShown: boolean = useSelector(selectIsChatButtonShown);
  const isChatShown: boolean = useSelector(selectIsChatShown);
  const dispatch = useDispatch();
  const messagesContainerRef: RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    signInAnonymously(auth)
      .then(async () => {
        dispatch(setAuthUuidAction(auth.currentUser?.uid ?? ''));
      })
      .then(async () => {
        const [messages, lastLoadedMessageDocument] = await getTenMessages();
        dispatch(setMessagesAction(messages, lastLoadedMessageDocument));

        dispatch(
          modifyScrollHeightAction(
            messagesContainerRef?.current?.scrollHeight ?? 0
          )
        );
      })
      .catch(error => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // ()();
  }, [dispatch]);

  return (
    <div className="app">
      <NavBar />
      <div className="pr-0 md:pr-32 pt-16 md:pt-0">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/support" component={SupportPage} />
            <Route exact path="/partners" component={PartnersPage} />
            <Route exact path="/partners/:id" component={PartnerDetailsPage} />
            <Route
              exact
              path="/support/AnswerOfQuestion/:id"
              component={AnswerOfQuestion}
            />
            <Route exact path="/download" component={DownloadPage} />
            <Route exact path="/services" component={ServicesPage} />
            <Route exact path="/videos" component={VideosPage} />
            <Route
              exact
              path="/businessPartners"
              component={BusinessPartnersPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>
      {/* TODO footer */}
      {/* <Footer /> */}
      {isChatButtonShown && !isChatShown && (
        <button
          onClick={() => dispatch(toggleChatAction())}
          className="chat-button"
        >
          <ChatIcon className="chat-button-icon" />
        </button>
      )}
      {isChatShown && <Chat ref={messagesContainerRef} />}
      <ToastContainer />
    </div>
  );
};

export default App;
