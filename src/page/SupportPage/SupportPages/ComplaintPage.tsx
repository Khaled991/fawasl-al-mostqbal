import { ReactElement } from "react";
import circle from "../../../assets/Img/circle.svg";
import complaint from "../../../assets/Img/complaintImage.svg";

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
export default ComplaintPage;
