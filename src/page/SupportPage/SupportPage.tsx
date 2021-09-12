import { ReactElement, useState } from "react";
import "./SupportPage.scss";
import questions from "./supportPageData";
import ReactPageScroller from "react-page-scroller";
import chatIcon from "../../assets/Icons/chat.svg";
import chat from "../../assets/Img/chatImage.svg";
import circle from "../../assets/Img/circle.svg";
import complaint from "../../assets/Img/complaintImage.svg";
import callIcon from "../../assets/Icons/call.svg";
import xIcon from "../../assets/Icons/x.svg";
import sendIcon from "../../assets/Icons/send.svg";
import attachImageIcon from "../../assets/Icons/attachImage.svg";
import customerFemale from "../../assets/Icons/customerFemale.svg";
import customerService from "../../assets/Icons/customerService.svg";
import formatAMPM from "./../../utils/formatAMPM";

const SupportPage = (): ReactElement => {
  const [showChat, setShowChat] = useState<boolean>(false);

  const RenderQuestions = (): ReactElement[] => {
    const questionsBlocks = [];
    const blockItemsCount = 3;
    for (let i = 0; i < questions.length; i += blockItemsCount) {
      const blockElements = questions.slice(i, i + blockItemsCount);
      const questionsBlockArray = renderQuestionsBlockArray(blockElements);
      const questionsBlockElement = renderQuestionsBlock(questionsBlockArray);
      questionsBlocks.push(questionsBlockElement);
    }

    return questionsBlocks;
  };

  function renderQuestionsBlockArray(questions: string[]) {
    const questionsBlockArray = [];

    for (let i = 0; i < questions.length; i++) {
      const questionElement = renderQuestion(questions[i]);
      if (questionElement != null) questionsBlockArray.push(questionElement);
    }

    return questionsBlockArray;
  }

  function renderQuestion(questionText: string): ReactElement | undefined {
    if (questionText)
      return (
        <span className="questions-text flex flex-col" style={{ fontSize: 25 }}>
          - {questionText}{" "}
        </span>
      );
  }

  function renderQuestionsBlock(
    questionsElements: ReactElement[]
  ): ReactElement {
    return <div>{questionsElements}</div>;
  }

  function QuestionsPage(): ReactElement {
    return (
      <div className="questions-page-container pr-32">
        <div className="popular-question-text">
          <div className="title-green-border-text-container">
            <span className="title-green-text">شيوعاً</span>
            <div className="title-green-border" />
          </div>
          <div className="title-black-border-text-container">
            <span className="title-black-text">المواضيع الأكثر</span>
            <div className="title-black-border" />
          </div>
        </div>
        <div className="questions-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {RenderQuestions()}
        </div>
      </div>
    );
  }

  function ComplaintPage(): ReactElement {
    return (
      <div className="relative">
        <div className="w-screen h-screen grid grid-cols-2 grid-rows-2 md:pr-32 gap-10 place-content-center">
          <img
            className="w-full lg:p-10 xl:p-28 hidden lg:block row-span-2 self-center"
            src={complaint}
            alt="complaint"
          />
          <div
            className="flex justify-center items-center row-span-2 col-span-2 lg:col-span-1"
            dir="rtl"
          >
            <div className="w-10/12 flex flex-col">
              <div className="text-5xl font-bold mb-4">
                تقديم <span className="text-primary">شكوى</span>
              </div>
              <input placeholder="الاسم" className="custom-input" />
              <input
                placeholder="البريد الإلكتروني"
                className="custom-input"
                type="email"
              />
              <textarea
                className="custom-input"
                cols={30}
                rows={10}
                placeholder="تفاصيل الشكوى"
              ></textarea>
              <button className="custom-button w-44">إرسال</button>
            </div>
          </div>
        </div>
        <img
          src={circle}
          alt="circle"
          className="w-80 sm:w-96 h-80 sm:h-96 absolute animate-spin dura"
          style={{
            top: "-12rem",
            left: "-12rem",
          }}
        />
      </div>
    );
  }
  function ContactUsPage(): ReactElement {
    function Chat(): ReactElement {
      function ChatHeader(): ReactElement {
        return (
          <div className="border-b border-primary border-solid flex justify-between items-center pb-2 cursor-pointer">
            <img
              src={xIcon}
              alt="x"
              className="w-4 cursor-pointer rounded"
              onClick={() => setShowChat(false)}
            />
            <div className="text-xl font-bold">المحادثة</div>
            <img
              src={callIcon}
              alt="call"
              className="w-6 cursor-pointer rounded"
            />
          </div>
        );
      }
      function ChatMessages(): ReactElement {
        interface IMessage {
          isMe: boolean;
          msg: string;
          time: Date;
        }

        function Message({ isMe, msg, time }: IMessage): ReactElement {
          return (
            <div className={isMe ? "my-message" : "peer-message"}>
              <div>
                {msg}
                <div className="text-xs mt-1">{formatAMPM(time)}</div>
              </div>
              <img
                src={isMe ? customerFemale : customerService}
                alt={isMe ? "me" : "peer"}
                className={isMe ? "my-message-image" : "peer-message-image"}
              />
            </div>
          );
        }

        return (
          <div className="py-2 text-xl overflow-y-auto flex flex-col">
            <Message isMe={true} msg="مرحباً" time={new Date()} />
            <Message isMe={false} msg="مرحباً" time={new Date()} />
          </div>
        );
      }

      function ChatFooter(): ReactElement {
        return (
          <div className="border-t border-primary border-solid flex items-center pt-2">
            <img
              src={sendIcon}
              alt="send"
              className="w-6 cursor-pointer rounded mr-2"
            />
            <div className="flex-1 border-solid border border-primary rounded-xl w-full px-2 py-2 text-right flex">
              <img
                src={attachImageIcon}
                alt="attach"
                className="w-6 cursor-pointer rounded mr-2"
              />
              <input
                type="text"
                className="flex-1"
                placeholder="اكتب رسالة ..."
                dir="rtl"
              />
            </div>
          </div>
        );
      }

      return (
        <div className="absolute bottom-8 left-8 grid grid-rows-chat-layout bg-white w-96 rounded-3xl border-solid border-primary border-2 py-3 px-4">
          <ChatHeader />
          <ChatMessages />
          <ChatFooter />
        </div>
      );
    }

    return (
      <div className="w-screen h-screen grid grid-cols-2 grid-rows-4 gap-10 md:pr-32 relative">
        <div
          className="
          col-span-2
          row-span-3
          md:row-span-2
          xl:row-span-4
          xl:col-span-1
          place-self-center
        "
        >
          <div className="flex flex-col items-center md:px-20">
            <div className="font-bold mb-4 text-center leading-snug text-4xl xl:text-5xl xl:leading-normal">
              <div className="w-full">
                يمكنك التحدث مع أحد ممثلي{" "}
                <span className="text-primary">خدمة العملاء</span> إن لم تجد حل
                لمشكلتك <div>نحن نعمل على الدوام</div>{" "}
                <span className="text-primary">٢٤</span> ساعة
              </div>
            </div>
            <button
              className="custom-button flex justify-center px-20 w-3/4 items-center"
              onClick={() => setShowChat(true)}
            >
              فتح محادثة
              <img src={chatIcon} alt="chat icon" className="h-6 ml-3" />
            </button>
          </div>
        </div>

        <img
          className="
            h-full
            row-span-1
            col-span-2
            place-self-center
            md:row-span-2
            xl:h-auto
            xl:col-span-1
            xl:row-span-4
            xl:place-self-end
          "
          src={chat}
          alt="chat"
        />
        {showChat ? <Chat /> : ""}
      </div>
    );
  }

  return (
    <ReactPageScroller>
      <QuestionsPage />
      <ComplaintPage />
      <ContactUsPage />
    </ReactPageScroller>
  );
};

export default SupportPage;
