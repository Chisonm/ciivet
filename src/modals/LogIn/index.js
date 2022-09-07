import React from "react";
import ModalProvider from "react-modal";

import { useGoogleLogin } from "@react-oauth/google";
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

const LogInModal = (props) => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[33%]"
        overlayClassName="bg-gray_900_9e fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 items-center justify-center lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[100%]">
            <Row className="justify-between lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[99%]">
              <Text className="font-extrabold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
                Log in
              </Text>
              <Img
                src="images/img_close.svg"
                className="common-pointer lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mt-[1px] lg:w-[17px] xl:w-[19px] 2xl:w-[22px] 3xl:w-[26px]"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Input
              className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
              wrapClassName="2xl:mt-[30px] 3xl:mt-[36px] flex lg:mt-[23px] w-[100%] xl:mt-[26px]"
              type="email"
              name="TextFieldLa"
              placeholder="user / email address"
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
              wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] flex lg:mt-[15px] w-[100%] xl:mt-[17px]"
              type="password"
              name="TextFieldLa One"
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
            <Row className="items-center justify-between lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
              <CheckBox
                className="font-bold lg:pl-[6px] xl:pl-[7px] 2xl:pl-[8px] 3xl:pl-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900"
                inputClassName="h-[18px] mr-[5px] w-[18px]"
                name="Remember"
                label="Remember"
                size="sm"
              ></CheckBox>
              <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Forgot Password
              </Text>
            </Row>
            <Button
              className="font-bold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
              size="xl"
            >
              Log in
            </Button>
            <Row
              className="common-pointer border border-gray_600 border-solid items-center justify-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius10 w-[100%]"
              onClick={googleSignIn}
            >
              <Img
                src="images/img_refresh.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[78px] xl:ml-[89px] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px]"
                alt="refresh"
              />
              <Text className="font-bold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] 3xl:mr-[112px] lg:mr-[73px] xl:mr-[83px] 2xl:mr-[94px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                Log in with Google
              </Text>
            </Row>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[100%]" />
            <Text className="font-semibold mb-[3px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
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

export default LogInModal;
