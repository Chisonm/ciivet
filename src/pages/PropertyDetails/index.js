import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Input,
  TextArea,
  List,
  Radio,
} from "components";

const PropertyDetailsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-end mx-[auto] lg:pt-[13px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[100%]">
        <header className="w-[83%]">
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
        <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[100%]">
          <Stack className="lg:h-[2478px] xl:h-[2834px] 2xl:h-[3188px] 3xl:h-[3825px] w-[100%]">
            <Column className="absolute bg-white_A700 bottom-[2%] justify-end lg:p-[59px] xl:p-[68px] 2xl:p-[77px] 3xl:p-[92px] w-[100%]">
              <Row className="lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[92%]">
                <Column className="w-[42%]">
                  <Img
                    src="images/img_logo.svg"
                    className="lg:h-[26px] xl:h-[30px] 2xl:h-[34px] 3xl:h-[40px] w-[26%]"
                    alt="logo"
                  />
                  <Text className="font-semibold lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                    59 Bervely Hill Ave, Brooklyn Town,  New York, NY 5630, CA,
                    US
                  </Text>
                  <Text className="font-semibold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                    +056 686 56 56 98 info@staticmania.com
                  </Text>
                  <Img
                    src="images/img_socialmedia_6.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[40%]"
                    alt="socialmedia"
                  />
                </Column>
                <Column className="mt-[1px] w-[15%]">
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
              <Text className="font-semibold lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                © Static Mania 2022. All rights reserved. / Template
                Documentation
              </Text>
            </Column>
            <Column className="absolute bg-gray_52 lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] w-[100%]">
              <Row className="items-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] w-[88%]">
                <Column
                  className="bg-cover bg-repeat items-center lg:p-[182px] xl:p-[209px] 2xl:p-[235px] 3xl:p-[282px] rounded-radius10 w-[66%]"
                  style={{
                    backgroundImage:
                      "url('images/img_group100000142_550X792.png')",
                  }}
                >
                  <Button
                    className="flex lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] items-center justify-center rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                    size="lgIcn"
                    variant="icbFillWhiteA700ab"
                  >
                    <Img
                      src="images/img_search.svg"
                      className="flex items-center justify-center lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px]"
                      alt="search One"
                    />
                  </Button>
                </Column>
                <Column className="items-center lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[32%]">
                  <Img
                    src="images/img_rectangle5611.png"
                    className="lg:h-[205px] xl:h-[234px] 2xl:h-[264px] 3xl:h-[316px] rounded-radius10 w-[100%]"
                    alt="Rectangle5611"
                  />
                  <Column
                    className="bg-cover bg-repeat items-end justify-end lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage:
                        "url('images/img_group100000142_263X384.png')",
                    }}
                  >
                    <Button
                      className="2xl:mt-[159px] 3xl:mt-[190px] flex items-center justify-center lg:mt-[123px] text-center w-[38%] xl:mt-[141px]"
                      leftIcon={
                        <Img
                          src="images/img_mail_16X16.svg"
                          className="text-center lg:w-[12px] lg:h-[13px] lg:mr-[7px] xl:w-[14px] xl:h-[15px] xl:mr-[8px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[9px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[10px]"
                          alt="mail"
                        />
                      }
                      size="md"
                      variant="FillWhiteA700ab"
                    >
                      <div className="bg-transparent font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                        3 more
                      </div>
                    </Button>
                  </Column>
                </Column>
              </Row>
              <Row className="lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[88%]">
                <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[66%]">
                  <Text className="font-extrabold leading-[135.00%] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[71%]">
                    Trovilla Plan in Sereno Canyon - Estate Collection by Toll
                    Brothers
                  </Text>
                  <Text className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    2861 62nd Ave, Oakland, CA 94605
                  </Text>
                  <Row className="items-center mr-[auto] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[58%]">
                    <Column className="bg-white_A700 border border-gray_600 border-solid lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[48%]">
                      <Text className="font-bold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                      <Text className="font-semibold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                        Online / Cash Payment
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[48%]">
                      <Text className="font-bold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $850 / month
                      </Text>
                      <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                        0% EMI for 6 Months
                      </Text>
                    </Column>
                  </Row>
                  <Text className="font-semibold leading-[140.00%] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[64%]">
                    Well-constructed 1562 Sq Ft Home Is Now Offering To You In
                    Uttara For Sale
                  </Text>
                  <Text className="font-normal leading-[180.00%] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[98%]">
                    A slider is great way to display a slideshow featuring
                    images or videos, usually on your homepage.
                    <br />
                    Adding sliders to your site is no longer difficult. You
                    don’t have to know coding anymore. Just use a slider widget
                    and it will automatically insert the slider on your web
                    page.
                    <br />
                    So, the Elementor slider would be a great tool to work with
                    when building a WordPress site.
                  </Text>
                  <Text className="font-extrabold lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                    Local Information
                  </Text>
                  <Row className="items-center mr-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[70%]">
                    <Button
                      className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[19%]"
                      size="md"
                      variant="OutlineBluegray100"
                    >
                      Map
                    </Button>
                    <Button className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[24%]">
                      Schools
                    </Button>
                    <Button
                      className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[21%]"
                      variant="OutlineBluegray100"
                    >
                      Crime
                    </Button>
                    <Button
                      className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]"
                      size="md"
                      variant="OutlineBluegray100"
                    >
                      Shop & Eat
                    </Button>
                  </Row>
                  <Stack
                    className="bg-cover bg-repeat lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] mb-[4px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] 3xl:px-[108px] lg:px-[70px] xl:px-[80px] 2xl:px-[90px] rounded-radius10 w-[100%]"
                    style={{
                      backgroundImage:
                        "url('images/img_group100000142_400X712.png')",
                    }}
                  >
                    <Img
                      src="images/img_group100000142_deep_orange_300.svg"
                      className="absolute lg:h-[111px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[171px] left-[8%] top-[0] w-[52%]"
                      alt="Group100000142"
                    />
                  </Stack>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius10 w-[32%]">
                  <Text className="font-extrabold lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                    Request for Visit
                  </Text>
                  <Input
                    className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                    wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] flex lg:mt-[18px] w-[100%] xl:mt-[21px]"
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
                    wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] w-[100%] xl:mt-[10px]"
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
                    wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] w-[100%] xl:mt-[10px]"
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
                    wrapClassName="2xl:mt-[12px] 3xl:mt-[14px] flex lg:mt-[9px] w-[100%] xl:mt-[10px]"
                    name="TextFieldLa Three"
                    placeholder="Date"
                    prefix={
                      <Img
                        src="images/img_calendar.svg"
                        className="ml-[1px] lg:w-[12px] lg:mr-[13px] xl:w-[14px] xl:mr-[15px] 2xl:w-[16px] 2xl:mr-[17px] 3xl:w-[19px] 3xl:mr-[20px] my-[auto]"
                        alt="calendar"
                      />
                    }
                    shape="RoundedBorder10"
                  ></Input>
                  <TextArea
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                    name="inputbox"
                    placeholder="Message"
                  ></TextArea>
                  <Button
                    className="font-semibold lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
                    size="xl"
                  >
                    Send Request
                  </Button>
                </Column>
              </Row>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-center lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[58%]">
                <Text className="font-extrabold 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                  Home Highlights
                </Text>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[74%]"
                  orientation="vertical"
                >
                  <Row className="2xl:my-[10px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]">
                    <div className="bg-gray_600 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                      Parking
                    </Text>
                    <Text className="font-semibold mb-[2px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                      No Info
                    </Text>
                    <div className="bg-gray_600 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] mt-[4px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                      HOA
                    </Text>
                    <Text className="font-semibold lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                      None
                    </Text>
                  </Row>
                  <Row className="2xl:my-[10px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[100%]">
                    <div className="bg-gray_600 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                      Outdoor
                    </Text>
                    <Text className="font-semibold mb-[2px] lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                      No Info
                    </Text>
                    <div className="bg-gray_600 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] mt-[4px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                      Price/Sqft
                    </Text>
                    <Text className="font-semibold lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                      $560
                    </Text>
                  </Row>
                </List>
                <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[76%]">
                  <div className="bg-gray_600 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] my-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                    A/C
                  </Text>
                  <Text className="font-semibold mb-[1px] 3xl:ml-[102px] lg:ml-[66px] xl:ml-[75px] 2xl:ml-[85px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    No Info
                  </Text>
                  <div className="bg-gray_600 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] mt-[4px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                    Listed
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    No Info
                  </Text>
                </Row>
                <Row className="lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[25%]">
                  <div className="bg-gray_600 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] mt-[4px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
                  <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                    Year Built
                  </Text>
                  <Text className="font-semibold mb-[1px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    2021
                  </Text>
                </Row>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:p-[29px] xl:p-[33px] 2xl:p-[38px] 3xl:p-[45px] rounded-radius10 w-[58%]">
                <Text className="font-extrabold ml-[2px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                  Agent Information
                </Text>
                <Row className="items-center ml-[2px] mr-[auto] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[52%]">
                  <Img
                    src="images/img_rectangle5599.png"
                    className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] rounded-radius10 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
                    alt="Rectangle5599"
                  />
                  <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:pb-[3px] xl:pb-[4px] 2xl:pb-[5px] 3xl:pb-[6px] w-[54%]">
                    <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                      Bruno Fernandes
                    </Text>
                    <Row className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[86%]">
                      <Img
                        src="images/img_vector.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[8%]"
                        alt="Vector One"
                      />
                      <Img
                        src="images/img_vector.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] w-[8%]"
                        alt="Vector Two"
                      />
                      <Img
                        src="images/img_vector.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] w-[8%]"
                        alt="Vector Three"
                      />
                      <Img
                        src="images/img_vector.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] w-[8%]"
                        alt="Vector Four"
                      />
                      <Img
                        src="images/img_vector_gray_600.svg"
                        className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] w-[8%]"
                        alt="Vector Five"
                      />
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        4 review
                      </Text>
                    </Row>
                    <Row className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pl-[1px] py-[1px] w-[100%]">
                      <Img
                        src="images/img_mail_13X15.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[1px] mt-[1px] w-[8%]"
                        alt="mail One"
                      />
                      <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                        bruno@realstatic .com
                      </Text>
                    </Row>
                    <Row className="ml-[3px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[79%]">
                      <Img
                        src="images/img_vector_gray_600_17X17.svg"
                        className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                        alt="Vector Six"
                      />
                      <Text className="font-medium xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                        +65 0231 965 965
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
              <Row className="lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] pr-[1px] pt-[1px] w-[88%]">
                <Text className="font-extrabold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                  Latest Property Listings
                </Text>
                <Text className="font-bold lg:ml-[589px] xl:ml-[674px] 2xl:ml-[758px] 3xl:ml-[910px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-orange_A700 w-[auto]">
                  Explore All
                </Text>
                <Img
                  src="images/img_arrowright_1.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[4px] w-[1%]"
                  alt="arrowright"
                />
              </Row>
              <List
                className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:mb-[62px] xl:mb-[71px] 2xl:mb-[80px] 3xl:mb-[96px] min-h-[auto] lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[88%]"
                orientation="horizontal"
              >
                <Column className="bg-gray_52 border border-red_100 border-solid lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_260X384.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Three"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye_21X16.svg"
                        className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]"
                        alt="eye"
                      />
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[80%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[1px] w-[8%]"
                        alt="bookmark"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket_16X18.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_1.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                        alt="Vector Seven"
                      />
                      <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1,032 sqft
                      </Text>
                      <Radio
                        value="Family"
                        className="font-semibold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        checked={false}
                        name="Family"
                        label="Family"
                      ></Radio>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]">
                        View Details
                      </Button>
                      <Text className="font-bold lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_52 border border-red_100 border-solid lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_10.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Four"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye_21X16.svg"
                        className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]"
                        alt="eye One"
                      />
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[80%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[1px] w-[8%]"
                        alt="bookmark One"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket_16X18.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket One"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_1.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                        alt="Vector Eight"
                      />
                      <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1,032 sqft
                      </Text>
                      <Radio
                        value="Family"
                        className="font-semibold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        checked={false}
                        name="FamilyOne"
                        label="Family"
                      ></Radio>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]">
                        View Details
                      </Button>
                      <Text className="font-bold lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-gray_52 border border-red_100 border-solid lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 w-[100%]">
                  <Img
                    src="images/img_image_11.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Five"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye_21X16.svg"
                        className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]"
                        alt="eye Two"
                      />
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[80%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[1px] w-[8%]"
                        alt="bookmark Two"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket_16X18.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket Two"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_1.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                        alt="Vector Nine"
                      />
                      <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1,032 sqft
                      </Text>
                      <Radio
                        value="Family"
                        className="font-semibold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        checked={false}
                        name="FamilyTwo"
                        label="Family"
                      ></Radio>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]">
                        View Details
                      </Button>
                      <Text className="font-bold lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Stack>
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
                    59 Bervely Hill Ave, Brooklyn Town,  New York, NY 5630, CA,
                    US
                  </Text>
                  <Text className="font-manrope font-semibold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    +056 686 56 56 98 info@staticmania.com
                  </Text>
                  <Img
                    src="images/img_socialmedia_7.svg"
                    className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[40%]"
                    alt="socialmedia One"
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
                © Static Mania 2022. All rights reserved. / Template
                Documentation
              </Text>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default PropertyDetailsPage;
