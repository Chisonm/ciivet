import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Input, Button, Line } from "components";

const ResetPasswordModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[33%]"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[100%]">
            <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
              <Text className="font-extrabold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
                Reset Password
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Text className="font-normal leading-[180.00%] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[90%]">
              Enter the email address associated with your account and we'll
              send you a link to reset your password.
            </Text>
            <Input
              className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
              wrapClassName="2xl:mt-[34px] 3xl:mt-[40px] flex lg:mt-[26px] w-[100%] xl:mt-[30px]"
              type="email"
              name="TextFieldLa"
              placeholder="email address"
              prefix={
                <Img
                  src="images/img_mail.svg"
                  className="ml-[1px] lg:w-[14px] lg:mr-[13px] xl:w-[16px] xl:mr-[15px] 2xl:w-[18px] 2xl:mr-[17px] 3xl:w-[21px] 3xl:mr-[20px] my-[auto]"
                  alt="mail"
                />
              }
              shape="RoundedBorder10"
            ></Input>
            <Button
              className="font-bold lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
              size="xl"
            >
              Get OTP
            </Button>
            <Button
              className="font-bold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
              size="xl"
              variant="OutlineGray600"
            >
              Return to sign in
            </Button>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]" />
            <Text className="font-semibold mb-[3px] lg:ml-[22px] xl:ml-[25px] 2xl:ml-[29px] 3xl:ml-[34px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
              <span className="text-gray_600 font-manrope">
                Don’t have an account?{" "}
              </span>
              <span className="text-gray_900 font-manrope">Create Account</span>
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default ResetPasswordModal;
