import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Input,
  TextArea,
  Line,
} from "components";

const ContactPagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center mx-[auto] w-[100%]">
        <Column className="bg-gray_52 items-center lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
          <header className="w-[85%]">
            <Row className="items-center justify-end pl-[2px] w-[100%]">
              <Img
                src="images/img_home.svg"
                className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:w-[27px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
                alt="home"
              />
              <Text className="cursor-pointer font-markoone hover:font-normal font-normal lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-orange_A700 w-[auto]">
                Realstatic
              </Text>
              <Text className="cursor-pointer font-manrope hover:font-normal font-semibold lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-orange_A700 w-[auto]">
                Home
              </Text>
              <Img
                src="images/img_arrowdown_gray_600.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[1%]"
                alt="arrowdown"
              />
              <Text className="cursor-pointer font-manrope hover:font-normal font-semibold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-orange_A700 w-[auto]">
                About
              </Text>
              <Text className="cursor-pointer font-manrope hover:font-normal font-semibold lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-orange_A700 w-[auto]">
                Listing
              </Text>
              <Img
                src="images/img_arrowdown_gray_600.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[1%]"
                alt="arrowdown One"
              />
              <Text className="cursor-pointer font-manrope hover:font-normal font-semibold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-orange_A700 w-[auto]">
                Agents
              </Text>
              <Img
                src="images/img_arrowdown_gray_600.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[1%]"
                alt="arrowdown Two"
              />
              <Text className="cursor-pointer font-manrope hover:font-normal font-semibold lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-orange_A700 w-[auto]">
                Property{" "}
              </Text>
              <Text className="cursor-pointer font-manrope hover:font-normal font-semibold lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 hover:text-orange_A700 w-[auto]">
                Others Pages
              </Text>
              <Img
                src="images/img_arrowdown_gray_600.svg"
                className="lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] w-[1%]"
                alt="arrowdown Three"
              />
              <Img
                src="images/img_search.svg"
                className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[103px] 2xl:ml-[116px] 3xl:ml-[139px] lg:ml-[90px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                alt="search"
              />
              <Text className="cursor-pointer font-bold font-manrope hover:font-normal 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 hover:text-orange_A700 w-[auto]">
                Search
              </Text>
              <Button
                className="font-manrope font-semibold lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[9%]"
                size="md"
              >
                Log in
              </Button>
            </Row>
          </header>
          <Text className="font-extrabold 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-gray_900 tracking-ls1 w-[auto]">
            Get in touch
          </Text>
          <Text className="font-normal leading-[180.00%] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_600 w-[52%]">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble.
          </Text>
          <Row className="bg-white_A700 border border-bluegray_100 border-solid items-end 2xl:mb-[102px] 3xl:mb-[122px] lg:mb-[79px] xl:mb-[90px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:p-[29px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-radius10 w-[85%]">
            <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[59%]">
              <Text className="font-extrabold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                Send a message
              </Text>
              <Input
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="2xl:mt-[30px] 3xl:mt-[36px] flex lg:mt-[23px] w-[85%] xl:mt-[26px]"
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
                wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] w-[85%] xl:mt-[10px]"
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
              <Input
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] w-[85%] xl:mt-[10px]"
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
              <TextArea
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[85%]"
                name="inputbox"
                placeholder="Message"
              ></TextArea>
              <Button
                className="font-bold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[27%]"
                size="xl"
              >
                Send Message
              </Button>
            </Column>
            <Line className="bg-bluegray_100 lg:h-[416px] xl:h-[476px] 2xl:h-[535px] 3xl:h-[642px] mb-[2px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[1px]" />
            <Column className="lg:mb-[185px] xl:mb-[212px] 2xl:mb-[239px] 3xl:mb-[286px] lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] pt-[4px] w-[24%]">
              <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Office Address
              </Text>
              <Text className="font-semibold leading-[180.00%] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[100%]">
                1421 San Pedro St, Los Angeles, CA 90015
              </Text>
              <Row className="ml-[3px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[61%]">
                <Img
                  src="images/img_vector_gray_600_17X17.svg"
                  className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px]"
                  alt="Vector One"
                />
                <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  (302) 555-0107
                </Text>
              </Row>
              <Row className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pl-[1px] py-[1px] w-[91%]">
                <Img
                  src="images/img_mail.svg"
                  className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] ml-[2px] mt-[2px] w-[7%]"
                  alt="mail One"
                />
                <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  staticmania@gmail.com
                </Text>
              </Row>
              <Text className="font-semibold lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Social
              </Text>
              <Img
                src="images/img_socailicons_30X214.svg"
                className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[80%]"
                alt="Socailicons"
              />
            </Column>
          </Row>
        </Column>
        <footer className="bg-white_A700 w-[100%]">
          <Column className="lg:mb-[59px] xl:mb-[68px] 2xl:mb-[77px] 3xl:mb-[92px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] mx-[auto] w-[83%]">
            <Row className="items-center 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] w-[100%]">
              <Column className="w-[42%]">
                <Row className="font-markoone items-center pl-[2px] py-[2px] w-[31%]">
                  <Img
                    src="images/img_home.svg"
                    className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:w-[27px] xl:w-[31px] 2xl:w-[35px] 3xl:w-[42px]"
                    alt="home Two"
                  />
                  <Text className="font-normal lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-orange_A700 w-[auto]">
                    Realstatic
                  </Text>
                </Row>
                <Text className="font-manrope font-semibold lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                  59 Bervely Hill Ave, Brooklyn Town,  New York, NY 5630, CA, US
                </Text>
                <Text className="font-manrope font-semibold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                  +056 686 56 56 98 info@staticmania.com
                </Text>
                <Img
                  src="images/img_socialmedia_8.svg"
                  className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[40%]"
                  alt="socialmedia"
                />
              </Column>
              <Column className="w-[15%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Features
                </Text>
                <Text className="font-semibold leading-[270.00%] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[37%]">
                  Home v1
                  <br />
                  <br />
                  Home v2
                  <br />
                  <br />
                  About
                  <br />
                  Contact
                  <br />
                  Search
                </Text>
              </Column>
              <Column className="w-[17%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Informations
                </Text>
                <Text className="font-semibold leading-[270.00%] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[61%]">
                  Listing v1
                  <br />
                  <br />
                  Listing v2
                  <br />
                  <br />
                  Property Details
                  <br />
                  Agent List
                  <br />
                  <br />
                  Agent Profile
                  <br />
                </Text>
              </Column>
              <Column className="w-[16%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Documention
                </Text>
                <Text className="font-semibold leading-[270.00%] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[55%]">
                  Blog
                  <br />
                  <br />
                  Blog - single
                  <br />
                  <br />
                  Privacy Policy
                  <br />
                  <br />
                  License
                  <br />
                  404 Page
                </Text>
              </Column>
              <Column className="w-[10%]">
                <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                  Others
                </Text>
                <Text className="font-semibold leading-[270.00%] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[100%]">
                  Log in
                  <br />
                  <br />
                  Enter OTP
                  <br />
                  <br />
                  New Password
                  <br />
                  <br />
                  Reset Password
                  <br />
                  <br />
                  Create Account
                  <br />
                </Text>
              </Column>
            </Row>
            <Text className="font-semibold ml-[4px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              © Static Mania 2022. All rights reserved. / Template Documentation
            </Text>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default ContactPagePage;
