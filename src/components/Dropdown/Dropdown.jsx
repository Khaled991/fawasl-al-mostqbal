import { useEffect, useRef, useState } from 'react';

import './Dropdown.scss';

const Dropdown = ({
  options,
  selectedIndex,
  setSelectedIndex,
  unselectedText = 'اختر طلب',
  maxItems = 5,
}) => {
  const [dropdownisActive, setDropdownisActive] = useState(false);
  const toggleIsActive = () => setDropdownisActive(!dropdownisActive);
  const ref = useRef();
  const InputRef = useRef();
  let isSelected = typeof selectedIndex === 'number';

  // required dropdown

  useEffect(() => {
    if (!isSelected) {
      InputRef.current.setCustomValidity('من فضلك اختار طلب');
    } else {
      InputRef.current.setCustomValidity('');
    }
  }, [isSelected]);

  // click outside dropdown to close

  useEffect(() => {
    const handleClickOutside = e => {
      if (!ref.current?.contains(e.target)) {
        setDropdownisActive(false);
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="container  w-11/12 md:w-4/6">
      <div className="select-box">
        <div
          className={`options-container ${dropdownisActive && 'active'}`}
          style={{
            top: ref.current?.offsetHeight + 4,
            maxHeight: ref.current?.offsetHeight * maxItems,
          }}
        >
          {options.map((label, i) => (
            <div
              key={i}
              className="option"
              onClick={() => {
                toggleIsActive();
                setSelectedIndex(i);
              }}
            >
              <input type="radio" className="radio" name="category" />
              <label htmlFor="tutorials">{label}</label>
            </div>
          ))}
        </div>
        <div className="selected" onClick={toggleIsActive} ref={ref}>
          <span style={!isSelected ? { opacity: 0.8 } : null}>
            {isSelected ? options[selectedIndex] : unselectedText}
          </span>
        </div>
        <input ref={InputRef} className="dropdown-required-alert" />
      </div>
    </div>
  );
};

export default Dropdown;
