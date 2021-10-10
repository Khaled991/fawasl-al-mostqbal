import { ReactElement } from "react";
import callIcon from "../../assets/Icons/call.svg";
import xIcon from "../../assets/Icons/x.svg";

function ChatHeader({ hideChat }: any): ReactElement {
  return (
    <div className="border-b border-primary border-solid flex justify-between items-center pb-2 cursor-pointer">
      <img
        src={xIcon}
        alt="x"
        className="w-4 cursor-pointer rounded"
        onClick={() => hideChat()}
      />
      <div className="text-xl font-bold">المحادثة</div>
      <img src={callIcon} alt="call" className="w-6 cursor-pointer rounded" />
    </div>
  );
}

export default ChatHeader;
