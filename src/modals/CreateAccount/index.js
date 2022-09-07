import React from "react";
import ModalProvider from "react-modal";

import {
  Column,
  Row,
  Text,
  Img,
  Input,
  CheckBox,
  Button,
  Line,
} from "components";

const CreateAccountModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[47%]"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 justify-center lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[100%]">
            <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
              <Text className="font-extrabold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
                Create Account
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Row className="items-center lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[100%]">
              <Input
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex w-[48%]"
                type="text"
                name="TextFieldLa"
                placeholder="Full Name"
                prefix={
                  <Img
                    src="images/img_user_17X18.svg"
                    className="ml-[2px] lg:w-[14px] lg:mr-[12px] xl:w-[16px] xl:mr-[14px] 2xl:w-[18px] 2xl:mr-[16px] 3xl:w-[21px] 3xl:mr-[19px] my-[auto]"
                    alt="user"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
              <Input
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] flex lg:ml-[15px] w-[48%] xl:ml-[17px]"
                type="email"
                name="TextFieldLa One"
                placeholder="Email Address"
                prefix={
                  <Img
                    src="images/img_mail.svg"
                    className="ml-[1px] lg:w-[14px] lg:mr-[13px] xl:w-[16px] xl:mr-[15px] 2xl:w-[18px] 2xl:mr-[17px] 3xl:w-[21px] 3xl:mr-[20px] my-[auto]"
                    alt="mail"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
            </Row>
            <Row className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
              <Input
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex w-[48%]"
                type="number"
                name="TextFieldLa Two"
                placeholder="Phone Number"
                prefix={
                  <Img
                    src="images/img_vector_gray_600_17X17.svg"
                    className="ml-[1px] lg:w-[13px] lg:h-[14px] lg:mr-[13px] xl:w-[15px] xl:h-[16px] xl:mr-[15px] 2xl:w-[17px] 2xl:h-[18px] 2xl:mr-[17px] 3xl:w-[20px] 3xl:h-[21px] 3xl:mr-[20px] my-[auto]"
                    alt="Vector"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
              <Input
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] flex lg:ml-[15px] w-[48%] xl:ml-[17px]"
                name="TextFieldLa Three"
                placeholder="Address"
                prefix={
                  <Img
                    src="images/img_location_19X15.svg"
                    className="ml-[0] lg:w-[11px] lg:mr-[14px] xl:w-[13px] xl:mr-[16px] 2xl:w-[15px] 2xl:mr-[18px] 3xl:w-[18px] 3xl:mr-[21px] my-[auto]"
                    alt="location"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
            </Row>
            <Row className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
              <Input
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex w-[48%]"
                type="password"
                name="Group100000150"
                placeholder="Password"
                prefix={
                  <Img
                    src="images/img_user.svg"
                    className="ml-[1px] lg:w-[14px] lg:h-[14px] lg:mr-[13px] xl:w-[16px] xl:h-[17px] xl:mr-[15px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[17px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[20px] my-[auto]"
                    alt="user"
                  />
                }
                suffix={
                  <Img
                    src="images/img_airplane.svg"
                    className="mr-[1px] lg:w-[14px] lg:ml-[27px] xl:w-[16px] xl:ml-[31px] 2xl:w-[18px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:ml-[42px] my-[auto]"
                    alt="airplane"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
              <Input
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="2xl:ml-[20px] 3xl:ml-[24px] flex lg:ml-[15px] w-[48%] xl:ml-[17px]"
                type="password"
                name="Group100000150 One"
                placeholder="Re-Password"
                prefix={
                  <Img
                    src="images/img_user.svg"
                    className="ml-[1px] lg:w-[14px] lg:h-[14px] lg:mr-[13px] xl:w-[16px] xl:h-[17px] xl:mr-[15px] 2xl:w-[18px] 2xl:h-[19px] 2xl:mr-[17px] 3xl:w-[21px] 3xl:h-[22px] 3xl:mr-[20px] my-[auto]"
                    alt="user"
                  />
                }
                suffix={
                  <Img
                    src="images/img_airplane.svg"
                    className="mr-[1px] lg:w-[14px] lg:ml-[27px] xl:w-[16px] xl:ml-[31px] 2xl:w-[18px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:ml-[42px] my-[auto]"
                    alt="airplane"
                  />
                }
                shape="RoundedBorder10"
              ></Input>
            </Row>
            <CheckBox
              className="font-bold lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900"
              inputClassName="h-[18px] mr-[5px] w-[18px]"
              name="Iagreetoall"
              label="I agree to all Terms & Conditions"
            ></CheckBox>
            <Button
              className="font-bold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
              size="xl"
            >
              Create Account
            </Button>
            <Row className="border border-gray_600 border-solid items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_refresh.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[123px] xl:ml-[141px] 2xl:ml-[159px] 3xl:ml-[190px] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px]"
                alt="refresh"
              />
              <Text className="font-bold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mr-[118px] xl:mr-[135px] 2xl:mr-[152px] 3xl:mr-[182px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Create Account with Google
              </Text>
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]" />
            <Text className="font-semibold lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] lg:ml-[155px] xl:ml-[177px] 2xl:ml-[200px] 3xl:ml-[240px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
              <span className="text-gray_600 font-manrope">H</span>
              <span className="text-gray_600 font-manrope">
                ave an account?{" "}
              </span>
              <span className="text-gray_900 font-manrope">Log in</span>
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default CreateAccountModal;
