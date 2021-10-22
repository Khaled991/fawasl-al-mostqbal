import { ReactElement, useState, useEffect } from 'react';
import Services2 from '../../assets/Img/services2.svg';
import { collection, addDoc } from 'firebase/firestore';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import { firestore } from '../../utils/firebase';
import '../../page/ServicesPage/ServicesPage.scss';
import { ShowToast } from '../ShowToast/ShowToast';

const dropDownOptions = [
  'إنشاء موقع',
  'إنشاء موبيل app',
  'إنشاء برنامج',
  'التعديل على موقع أو برنامج او موبيل app',
];

const RequestServices = (): ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [reqDescriptionValue, setReqDescriptionValue] = useState<string>('');

  useEffect(() => {}, [selectedIndex, reqDescriptionValue]);

  const onChangeReqAnService = ({ target: { value } }: any) => {
    setReqDescriptionValue(value);
  };
  const onPressSendReq = async () => {
    if (selectedIndex === null)
      return ShowToast('يجب اختيار نوع الطلب', 'error');

    if (reqDescriptionValue === '')
      return ShowToast('يجب أضافة تفاصيل الطلب', 'error');

    // Add a new document with a generated id.
    await addDoc(collection(firestore, 'requests'), {
      requestType: selectedIndex,
      requestDetails: reqDescriptionValue,
    });
    ShowToast('تم إرسال الطلب بنجاح', 'success');

    setSelectedIndex(null);
    setReqDescriptionValue('');
  };

  return (
    <div className="services-page grid grid-cols-1 xl:grid-cols-2 items-center">
      <div className="program-details flex flex-col items-center ">
        <div className="services-description-container px-0 md:px-28 text-center mb-8">
          <span className="text-2xl md:text-3xl lg:text-4xl">
            ارسل لنا <span className="text-primary">طلبك</span> لمساعدتك في{' '}
            <span className="text-primary">انشاء</span> او{' '}
            <span className="text-primary">تعديل</span> موقعك.
          </span>
        </div>
        <Dropdown
          unselectedText="نوع الطلب"
          options={dropDownOptions}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <textarea
          dir="rtl"
          className="custom-input w-11/12 md:w-4/6"
          cols={50}
          style={{ resize: 'none' }}
          draggable={true}
          rows={13}
          placeholder="تفاصيل الطلب"
          onChange={onChangeReqAnService}
          value={reqDescriptionValue}
        />
        <Button
          onClick={onPressSendReq}
          buttonStyleType="solidGreen flex w-11/12 md:w-4/6 justify-center"
        >
          ارسال الطلب
        </Button>
      </div>

      <img src={Services2} alt="2 طلبات خاصة" className="p-9 hidden xl:block" />
    </div>
  );
};

export default RequestServices;
