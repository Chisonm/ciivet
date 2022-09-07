import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Button, Line } from "components";

const EnterOTPModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[33%]"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 justify-end lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[100%]">
            <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
              <Text className="font-extrabold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
                Enter OTP
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Text className="font-normal lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
              Please check your mail, We sent an OTP code
            </Text>
            <Row className="items-center mr-[auto] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[66%]">
              <Button
                className="font-bold lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                size="xl"
                variant="OutlineGray600"
              >
                0
              </Button>
              <Button
                className="font-bold lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                size="xl"
                variant="OutlineGray600"
              >
                0
              </Button>
              <Button
                className="font-bold lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                size="xl"
                variant="OutlineGray600"
              >
                0
              </Button>
              <Button
                className="font-bold lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                size="xl"
                variant="OutlineGray600"
              >
                0
              </Button>
            </Row>
            <Button
              className="font-bold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
              size="xl"
            >
              Confirm
            </Button>
            <Button
              className="font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
              size="xl"
              variant="OutlineGray600"
            >
              Request OTP Again
            </Button>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]" />
            <Text className="font-semibold lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
              <span className="text-gray_600 font-manrope">
                Remember the Password?{" "}
              </span>
              <span className="text-gray_900 font-manrope">Log in</span>
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default EnterOTPModal;
