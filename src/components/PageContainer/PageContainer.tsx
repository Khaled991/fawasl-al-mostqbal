import { ReactElement } from 'react';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import './PageContainer.scss';

const PageContainer = ({
  children,
  title,
  searchBox,
  modal,
}: {
  title: string;
  children: React.ReactNode;
  searchBox?: React.ReactNode;
  modal?: React.ReactNode;
}): ReactElement => {
  return (
    <div className="page-container">
      <div className="page-header p-0 md:p-8 justify-center md:justify-between ">
        <HeaderTitle title={title} />
        {searchBox}
      </div>
      <div className="page-body mt-7 md:mt-0 justify-center md:justify-start overflow-y-auto">
        {children}
      </div>
      {modal}
    </div>
  );
};

export default PageContainer;
