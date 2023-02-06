import React, {useState} from 'react';
import Loading from '../components/Load';
import LoginSuccess from '../components/LoginSucces';
import MobileNum from '../components/MobileNo';
import OtpFun from '../components/Otp';

const Main = ({flag, setFlag}) => {
  const [number, setNumber] = useState(null);
  const [otpValue, setOtpValue] = useState(null);
  console.log('flafds', flag);
  switch (flag) {
    case 0:
      return <MobileNum setNumber={setNumber} flag={flag} setFlag={setFlag} />;
    case 1:
      return (
        <OtpFun
          setOtpValue={setOtpValue}
          number={number}
          flag={flag}
          setFlag={setFlag}
        />
      );
    case 2:
      return <Loading setFlag={setFlag} flag={flag} />;
    case 3:
      return <LoginSuccess setFlag={setFlag} flag={flag} />;
    default:
      return <></>;
  }
};

export default Main;
