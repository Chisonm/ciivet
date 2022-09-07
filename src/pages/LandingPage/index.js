import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  List,
  Grid,
  Radio,
  Input,
} from "components";

const LandingPagePage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-manrope mx-[auto] w-[100%]">
        <Column className="items-center w-[100%]">
          <header className="w-[100%]">
            <Row className="bg-white_A700 items-center justify-end lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
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
                className="font-manrope font-semibold mb-[1px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] 2xl:mr-[102px] 3xl:mr-[122px] lg:mr-[79px] xl:mr-[90px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[8%]"
                size="md"
              >
                Log in
              </Button>
            </Row>
          </header>
          <Stack className="lg:h-[560px] xl:h-[641px] 2xl:h-[721px] 3xl:h-[865px] w-[100%]">
            <Column className="absolute bg-yellow_50 xl:p-[106px] 2xl:p-[120px] 3xl:p-[144px] lg:p-[93px] w-[100%]">
              <Text className="font-extrabold mt-[4px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] 3xl:text-[55px] text-gray_900 tracking-ls1 w-[auto]">
                Find a perfect property Where you'll love to live
              </Text>
              <Text className="font-normal leading-[180.00%] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_700 w-[43%]">
                We helps businesses customize, automate and scale up their ad
                production and delivery.
              </Text>
              <Row className="items-center lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[24%]">
                <Button
                  className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[32%]"
                  variant="FillWhiteA700"
                >
                  Buy
                </Button>
                <Button
                  className="font-bold ml-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[32%]"
                  variant="FillGray300"
                >
                  Sell
                </Button>
                <Button
                  className="font-bold ml-[4px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[32%]"
                  variant="FillGray300"
                >
                  Rent
                </Button>
              </Row>
              <Row className="bg-white_A700 justify-end lg:mb-[54px] xl:mb-[62px] 2xl:mb-[70px] 3xl:mb-[84px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius14 w-[61%]">
                <Column className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[26%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_601 w-[auto]">
                    City/Street
                  </Text>
                  <Row className="items-center mt-[4px] w-[76%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                      New York City
                    </Text>
                    <Img
                      src="images/img_location.svg"
                      className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] w-[9%]"
                      alt="location"
                    />
                  </Row>
                </Column>
                <Column className="lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[26%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_601 w-[auto]">
                    Property Type
                  </Text>
                  <Row className="mt-[4px] w-[75%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                      Duplex House
                    </Text>
                    <Img
                      src="images/img_download.svg"
                      className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[4px] w-[6%]"
                      alt="download"
                    />
                  </Row>
                </Column>
                <Column className="lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[37%]">
                  <Text className="font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_601 w-[auto]">
                    Property Type
                  </Text>
                  <Row className="mt-[4px] w-[70%]">
                    <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                      $15000 - $350000
                    </Text>
                    <Img
                      src="images/img_download.svg"
                      className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[4px] w-[4%]"
                      alt="download One"
                    />
                  </Row>
                </Column>
                <Button
                  className="flex lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] items-center justify-center lg:w-[54px] xl:w-[62px] 2xl:w-[70px] 3xl:w-[84px]"
                  shape="icbRoundedBorder16"
                  size="mdIcn"
                  variant="icbFillGray900"
                >
                  <Img
                    src="images/img_search_white_A700.svg"
                    className="flex items-center justify-center lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px]"
                    alt="search One"
                  />
                </Button>
              </Row>
            </Column>
            <Img
              src="images/img_image_503X591.png"
              className="absolute bottom-[9%] lg:h-[392px] xl:h-[448px] 2xl:h-[504px] 3xl:h-[604px] right-[0] w-[41%]"
              alt="image"
            />
          </Stack>
          <Row className="items-center lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[83%]">
            <Column className="bg-red_101 lg:p-[35px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] rounded-radius20 w-[49%]">
              <Text className="font-extrabold leading-[140.00%] ml-[4px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[70%]">
                Simple & easy way to find your dream Appointment
              </Text>
              <Text className="font-normal leading-[180.00%] ml-[4px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[81%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </Text>
              <Button className="font-semibold ml-[4px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[28%]">
                Get Started
              </Button>
            </Column>
            <List
              className="gap-[0] min-h-[auto] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[49%]"
              orientation="vertical"
            >
              <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                <Column className="bg-deep_orange_50 lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius20 w-[48%]">
                  <Img
                    src="images/img_refresh_25X25.svg"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="refresh"
                  />
                  <Text className="font-extrabold lg:mb-[17px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] ml-[3px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                    Search  your location
                  </Text>
                </Column>
                <Column className="bg-deep_orange_50 lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 w-[48%]">
                  <Img
                    src="images/img_eye_20X24.svg"
                    className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mr-[148px] xl:mr-[169px] 2xl:mr-[191px] 3xl:mr-[229px] mt-[4px] w-[11%]"
                    alt="eye"
                  />
                  <Text className="font-extrabold lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] lg:mr-[35px] xl:mr-[40px] 2xl:mr-[45px] 3xl:mr-[54px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                    Visit  Appointment
                  </Text>
                </Column>
              </Row>
              <Row className="items-center justify-between xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                <Column className="bg-deep_orange_50 lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius20 w-[48%]">
                  <Img
                    src="images/img_camera.svg"
                    className="lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] mt-[1px] lg:w-[20px] xl:w-[23px] 2xl:w-[26px] 3xl:w-[31px]"
                    alt="camera"
                  />
                  <Text className="font-extrabold ml-[3px] lg:my-[22px] xl:my-[25px] 2xl:my-[29px] 3xl:my-[34px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                    Get your  dream house
                  </Text>
                </Column>
                <Column className="bg-deep_orange_50 lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] rounded-radius20 w-[48%]">
                  <Img
                    src="images/img_emojihappy.svg"
                    className="lg:h-[20px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:w-[19px] xl:w-[22px] 2xl:w-[25px] 3xl:w-[30px]"
                    alt="emojihappy"
                  />
                  <Text className="font-extrabold lg:mb-[17px] xl:mb-[20px] 2xl:mb-[23px] 3xl:mb-[27px] ml-[3px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                    Enjoy your  Appointment
                  </Text>
                </Column>
              </Row>
            </List>
          </Row>
          <Row className="bg-gray_50 justify-between lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] lg:p-[38px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
            <List
              className="lg:gap-[127px] xl:gap-[145px] 2xl:gap-[164px] 3xl:gap-[196px] grid grid-cols-2 lg:mb-[4px] xl:mb-[5px] 2xl:mb-[6px] 3xl:mb-[7px] min-h-[auto] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] w-[41%]"
              orientation="horizontal"
            >
              <Column className="w-[100%]">
                <Button
                  className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_clock.svg"
                    className="flex items-center justify-center lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px]"
                    alt="clock"
                  />
                </Button>
                <Text className="font-extrabold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] 3xl:text-[55px] text-gray_900 tracking-ls1 w-[auto]">
                  $15.4M
                </Text>
                <Text className="font-semibold leading-[140.00%] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_600 tracking-ls1 w-[100%]">
                  Owned from
                  <br />
                  <br />
                  Properties transactions
                </Text>
              </Column>
              <Column className="w-[100%]">
                <Button
                  className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                  size="smIcn"
                  variant="icbOutlineBluegray30033"
                >
                  <Img
                    src="images/img_arrowdown.svg"
                    className="flex items-center justify-center lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px]"
                    alt="arrowdown Four"
                  />
                </Button>
                <Text className="font-extrabold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] 3xl:text-[55px] text-gray_900 tracking-ls1 w-[auto]">
                  25K+
                </Text>
                <Text className="font-semibold leading-[140.00%] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_600 tracking-ls1 w-[100%]">
                  Properties for Buy & sell Successfully
                </Text>
              </Column>
            </List>
            <Column className="w-[11%]">
              <Button
                className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                size="smIcn"
                variant="icbOutlineBluegray30033"
              >
                <Img
                  src="images/img_reply.svg"
                  className="flex items-center justify-center"
                  alt="reply"
                />
              </Button>
              <Text className="font-extrabold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] 3xl:text-[55px] text-gray_900 tracking-ls1 w-[auto]">
                500
              </Text>
              <Text className="font-semibold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_600 tracking-ls1 w-[auto]">
                Daily completed  transactions
              </Text>
            </Column>
            <Column className="3xl:mr-[103px] lg:mr-[66px] xl:mr-[76px] 2xl:mr-[86px] w-[11%]">
              <Button
                className="flex lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] items-center justify-center rounded-radius50 lg:w-[46px] xl:w-[53px] 2xl:w-[60px] 3xl:w-[72px]"
                size="smIcn"
                variant="icbOutlineBluegray30033"
              >
                <Img
                  src="images/img_search_orange_A700.svg"
                  className="flex items-center justify-center lg:h-[19px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px]"
                  alt="search Two"
                />
              </Button>
              <Text className="font-extrabold ml-[3px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] 3xl:text-[55px] text-gray_900 tracking-ls1 w-[auto]">
                600+
              </Text>
              <Text className="font-semibold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_600 tracking-ls1 w-[auto]">
                Reagular Clients
              </Text>
            </Column>
          </Row>
          <Row className="2xl:mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] pr-[3px] w-[83%]">
            <Text className="font-extrabold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
              Featured Properties
            </Text>
            <Text className="font-bold lg:ml-[570px] xl:ml-[652px] 2xl:ml-[734px] 3xl:ml-[881px] mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-orange_A700 w-[auto]">
              Explore All
            </Text>
            <Img
              src="images/img_arrowright_1.svg"
              className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[1%]"
              alt="arrowright"
            />
          </Row>
        </Column>
        <Row className="items-center xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[54%]">
          <Text className="font-bold mb-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
            Resident Property
          </Text>
          <Text className="font-bold mb-[1px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_401 w-[auto]">
            Commercial Property
          </Text>
          <Text className="font-bold mb-[1px] lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_401 w-[auto]">
            Industrial Property
          </Text>
          <Text className="font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_401 w-[auto]">
            Agriculture Property
          </Text>
        </Row>
        <Column className="items-center lg:mt-[44px] xl:mt-[50px] 2xl:mt-[57px] 3xl:mt-[68px] w-[100%]">
          <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 w-[83%]">
            <Column className="bg-gray_52 border border-red_100 border-solid lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_image_260X384.png"
                className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                alt="image One"
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
                    alt="bookmark"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    3 Bed Room
                  </Text>
                  <Img
                    src="images/img_ticket.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                    alt="ticket"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    1 Bath
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                  <Img
                    src="images/img_vector_16X16.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    alt="Vector"
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
                alt="image Two"
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
                    alt="Vector One"
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
                alt="image Three"
              />
              <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                <Row className="ml-[3px] w-[99%]">
                  <Img
                    src="images/img_eye_21X16.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]"
                    alt="eye Three"
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
                    alt="Vector Two"
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
            <Column className="bg-gray_52 border border-red_100 border-solid lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 w-[100%]">
              <Img
                src="images/img_image_12.png"
                className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                alt="image Four"
              />
              <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                <Row className="ml-[3px] w-[99%]">
                  <Img
                    src="images/img_eye_21X16.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]"
                    alt="eye Four"
                  />
                  <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    2861 62nd Ave, Oakland, CA 94605
                  </Text>
                </Row>
                <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[80%]">
                  <Img
                    src="images/img_bookmark.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[1px] w-[8%]"
                    alt="bookmark Three"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    3 Bed Room
                  </Text>
                  <Img
                    src="images/img_ticket_16X18.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                    alt="ticket Three"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    1 Bath
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                  <Img
                    src="images/img_vector_1.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    alt="Vector Three"
                  />
                  <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    1,032 sqft
                  </Text>
                  <Radio
                    value="Family"
                    className="font-semibold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    checked={false}
                    name="FamilyThree"
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
                src="images/img_image_13.png"
                className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                alt="image Five"
              />
              <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                <Row className="ml-[3px] w-[99%]">
                  <Img
                    src="images/img_eye_21X16.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]"
                    alt="eye Five"
                  />
                  <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    2861 62nd Ave, Oakland, CA 94605
                  </Text>
                </Row>
                <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[80%]">
                  <Img
                    src="images/img_bookmark.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[1px] w-[8%]"
                    alt="bookmark Four"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    3 Bed Room
                  </Text>
                  <Img
                    src="images/img_ticket_16X18.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                    alt="ticket Four"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    1 Bath
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                  <Img
                    src="images/img_vector_1.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    alt="Vector Four"
                  />
                  <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    1,032 sqft
                  </Text>
                  <Radio
                    value="Family"
                    className="font-semibold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    checked={false}
                    name="FamilyFour"
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
                src="images/img_image_14.png"
                className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                alt="image Six"
              />
              <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                <Row className="ml-[3px] w-[99%]">
                  <Img
                    src="images/img_eye_21X16.svg"
                    className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]"
                    alt="eye Six"
                  />
                  <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    2861 62nd Ave, Oakland, CA 94605
                  </Text>
                </Row>
                <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[80%]">
                  <Img
                    src="images/img_bookmark.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[1px] w-[8%]"
                    alt="bookmark Five"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    3 Bed Room
                  </Text>
                  <Img
                    src="images/img_ticket_16X18.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                    alt="ticket Five"
                  />
                  <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    1 Bath
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                  <Img
                    src="images/img_vector_1.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                    alt="Vector Five"
                  />
                  <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                    1,032 sqft
                  </Text>
                  <Radio
                    value="Family"
                    className="font-semibold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                    inputClassName="mr-[5px] w-[undefinedpx]"
                    checked={false}
                    name="FamilyFive"
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
          </Grid>
          <Column className="bg-gray_52 items-center justify-end lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] xl:p-[106px] 2xl:p-[120px] 3xl:p-[144px] lg:p-[93px] w-[100%]">
            <Row className="items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="w-[51%]">
                <Text className="font-extrabold leading-[140.00%] ml-[1px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[57%]">
                  Simple & easy way to find your dream Appointment
                </Text>
                <Text className="font-normal leading-[180.00%] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[74%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, when our power of choice
                  is untrammelled and when nothing prevents our being able to do
                  what we like best, every pleasure is to be welcomed.
                </Text>
                <Button className="font-semibold ml-[1px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[23%]">
                  Get Started
                </Button>
              </Column>
              <Row className="items-center justify-between w-[49%]">
                <Column className="items-center w-[48%]">
                  <Img
                    src="images/img_rectangle18.png"
                    className="lg:h-[255px] xl:h-[291px] 2xl:h-[328px] 3xl:h-[393px] rounded-radius10 w-[100%]"
                    alt="RectangleEighteen"
                  />
                  <Img
                    src="images/img_rectangle21.png"
                    className="lg:h-[170px] xl:h-[194px] 2xl:h-[219px] 3xl:h-[262px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius10 w-[100%]"
                    alt="RectangleTwentyOne"
                  />
                </Column>
                <Column className="items-center w-[48%]">
                  <Img
                    src="images/img_rectangle19.png"
                    className="lg:h-[170px] xl:h-[194px] 2xl:h-[219px] 3xl:h-[262px] rounded-radius10 w-[100%]"
                    alt="RectangleNineteen"
                  />
                  <Img
                    src="images/img_rectangle20_327X284.png"
                    className="lg:h-[255px] xl:h-[291px] 2xl:h-[328px] 3xl:h-[393px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] rounded-radius10 w-[100%]"
                    alt="RectangleTwenty"
                  />
                </Column>
              </Row>
            </Row>
            <Row className="justify-between lg:mt-[116px] xl:mt-[133px] 2xl:mt-[150px] 3xl:mt-[180px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[9px] w-[100%]">
              <Stack className="lg:h-[502px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] w-[49%]">
                <div className="absolute bg-orange_A700 bottom-[0] lg:h-[463px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] left-[0] rounded-radius10 w-[88%]"></div>
                <Img
                  src="images/img_rectangle20_1.png"
                  className="absolute lg:h-[459px] xl:h-[524px] 2xl:h-[590px] 3xl:h-[708px] right-[0] rounded-radius10 top-[0] w-[91%]"
                  alt="RectangleTwenty One"
                />
              </Stack>
              <Column className="lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[37%]">
                <Text className="font-extrabold leading-[140.00%] ml-[1px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[74%]">
                  Best rated host on popular rental sites
                </Text>
                <Text className="font-normal leading-[180.00%] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[100%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. In a free hour, when our power of choice
                  is untrammelled.
                </Text>
                <Row className="ml-[1px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] pl-[2px] py-[2px] w-[47%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] ml-[1px] my-[1px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="checkmark"
                  />
                  <Text className="font-semibold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    Find excellent deals
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pl-[1px] py-[1px] w-[63%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] ml-[2px] my-[2px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="checkmark One"
                  />
                  <Text className="font-semibold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    Friendly host & Fast support
                  </Text>
                </Row>
                <Row className="ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] pl-[1px] py-[1px] w-[55%]">
                  <Img
                    src="images/img_checkmark.svg"
                    className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] ml-[2px] my-[2px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                    alt="checkmark Two"
                  />
                  <Text className="font-semibold lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    Secure payment system
                  </Text>
                </Row>
                <Button className="font-semibold ml-[1px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[30%]">
                  Learn more
                </Button>
              </Column>
            </Row>
          </Column>
          <Row className="items-center justify-center lg:mt-[142px] xl:mt-[162px] 2xl:mt-[183px] 3xl:mt-[219px] lg:pr-[20px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] w-[70%]">
            <Img
              src="images/img_rectangle5591.png"
              className="lg:h-[313px] xl:h-[358px] 2xl:h-[403px] 3xl:h-[483px] rounded-radius8 w-[39%]"
              alt="Rectangle5591"
            />
            <Column className="lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] w-[53%]">
              <Row className="w-[79%]">
                <Column className="mt-[2px] w-[83%]">
                  <Text className="font-extrabold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                    Taylor Wilson
                  </Text>
                  <Text className="font-semibold lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    Product Manager - Static Mania
                  </Text>
                </Column>
                <Img
                  src="images/img_shape.svg"
                  className="lg:h-[40px] xl:h-[46px] 2xl:h-[52px] 3xl:h-[62px] w-[17%]"
                  alt="shape"
                />
              </Row>
              <Text className="font-semibold leading-[165.00%] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_700 w-[100%]">
                Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis
                proin sodales. Turpis viverra diam porttitor mattis morbi ac
                amet. Euismod commodo. We get you customer relationships that
                last.{" "}
              </Text>
              <Row className="lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] p-[1px] w-[41%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] ml-[2px] mt-[3px] w-[8%]"
                  alt="arrowleft"
                />
                <Text className="font-bold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_603 w-[auto]">
                  Previews
                </Text>
                <Text className="font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] mt-[3px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-orange_A700 w-[auto]">
                  Next
                </Text>
                <Img
                  src="images/img_arrowright_1.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[3px] w-[8%]"
                  alt="arrowright One"
                />
              </Row>
            </Column>
          </Row>
          <Column className="bg-gray_900 items-center justify-end 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] xl:p-[106px] 2xl:p-[120px] 3xl:p-[144px] lg:p-[93px] w-[100%]">
            <Row className="items-center lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] pr-[3px] w-[100%]">
              <Text className="font-extrabold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-white_A700 tracking-ls1 w-[auto]">
                News & Consult
              </Text>
              <Text className="font-bold lg:ml-[629px] xl:ml-[719px] 2xl:ml-[809px] 3xl:ml-[971px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-deep_orange_400 w-[auto]">
                Explore All
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[1%]"
                alt="arrowright Two"
              />
            </Row>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[100%]"
              orientation="horizontal"
            >
              <Column className="w-[100%]">
                <Img
                  src="images/img_image.png"
                  className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius10 w-[100%]"
                  alt="image Thirteen"
                />
                <Text className="font-bold leading-[135.00%] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 tracking-ls1 w-[95%]">
                  9 Easy-to-Ambitious DIY Projects to Improve Your Home
                </Text>
                <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[3px] py-[3px] w-[45%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-deep_orange_400 w-[auto]">
                    Read the Article
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                    alt="arrowright Three"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Img
                  src="images/img_image_350X384.png"
                  className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius10 w-[100%]"
                  alt="image Fourteen"
                />
                <Text className="font-bold leading-[135.00%] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 tracking-ls1 w-[92%]">
                  Serie Shophouse Launch In July, Opportunity For Investors
                </Text>
                <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[3px] py-[3px] w-[45%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-deep_orange_400 w-[auto]">
                    Read the Article
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                    alt="arrowright Four"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Img
                  src="images/img_image_1.png"
                  className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius10 w-[100%]"
                  alt="image Fifteen"
                />
                <Text className="font-bold leading-[135.00%] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-white_A700 tracking-ls1 w-[97%]">
                  Looking for a New Place? Use This Time to Create Your Wishlist
                </Text>
                <Row className="items-center lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pr-[3px] py-[3px] w-[45%]">
                  <Text className="font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-deep_orange_400 w-[auto]">
                    Read the Article
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                    alt="arrowright Five"
                  />
                </Row>
              </Column>
            </List>
            <Column className="bg-gray_400 items-center justify-end xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[58%]">
              <Text className="font-extrabold lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                For Recent Update, News.
              </Text>
              <Text className="font-normal leading-[180.00%] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_900 w-[74%]">
                We helps businesses customize, automate and scale up their ad
                production and delivery.
              </Text>
              <Row className="items-center justify-center lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[64%]">
                <Input
                  className="font-semibold p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                  wrapClassName="w-[65%]"
                  type="email"
                  name="input"
                  placeholder="Enter your Email"
                  shape="RoundedBorder10"
                  size="sm"
                  variant="FillGray51"
                ></Input>
                <Button className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[32%]">
                  Subscribe
                </Button>
              </Row>
            </Column>
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
                    59 Bervely Hill Ave, Brooklyn Town,  New York, NY 5630, CA,
                    US
                  </Text>
                  <Text className="font-manrope font-semibold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    +056 686 56 56 98 info@staticmania.com
                  </Text>
                  <Img
                    src="images/img_socialmedia_5.svg"
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

export default LandingPagePage;
