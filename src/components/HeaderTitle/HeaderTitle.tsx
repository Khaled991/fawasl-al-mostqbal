import { ReactElement } from 'react';
import './HeaderTitle.scss';

const HeaderTitle = ({ title }: { title: string }): ReactElement => {
  return (
    <>
      <span className="text-2xl font-medium hidden md:block ">{title}</span>
      <span className="header-title">{title}</span>
    </>
  );
};

export default HeaderTitle;
