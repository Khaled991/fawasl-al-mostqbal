import { ReactElement } from 'react';
import ReactPageScroller from 'react-page-scroller';
import {
  DownloadCardsPages,
  ProgramAndDownloadPages,
  ProgramAndDownloadPages2,
  ProgramAndDownloadPages3,
} from './programAndDownloadPages';

const DownloadPage = (): ReactElement => {
  return (
    <ReactPageScroller>
      <ProgramAndDownloadPages />
      <ProgramAndDownloadPages2 />
      <ProgramAndDownloadPages3 />
      <DownloadCardsPages />
    </ReactPageScroller>
  );
};

export default DownloadPage;
