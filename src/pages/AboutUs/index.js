import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  List,
  Stack,
  Grid,
  Input,
} from "components";

const AboutUsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center justify-end mx-[auto] lg:pt-[13px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[100%]">
        <Column className="items-center w-[83%]">
          <header className="w-[100%]">
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
          <Text className="font-extrabold leading-[140.00%] 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] 3xl:text-[64px] text-center text-gray_900 tracking-ls1 w-[55%]">
            Reimagining real estate to make it easier to unlock.
          </Text>
          <Text className="font-normal leading-[180.00%] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-gray_700 w-[61%]">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble.
          </Text>
          <Row className="items-center justify-between lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] w-[100%]">
            <Img
              src="images/img_rectangle5592.png"
              className="lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] rounded-radius10 w-[66%]"
              alt="Rectangle5592"
            />
            <Img
              src="images/img_rectangle5593.png"
              className="lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] rounded-radius10 w-[32%]"
              alt="Rectangle5593"
            />
          </Row>
          <Row className="items-center justify-between lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
            <Img
              src="images/img_rectangle5595.png"
              className="lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] rounded-radius10 w-[32%]"
              alt="Rectangle5595"
            />
            <Img
              src="images/img_rectangle5594.png"
              className="lg:h-[312px] xl:h-[356px] 2xl:h-[401px] 3xl:h-[481px] rounded-radius10 w-[66%]"
              alt="Rectangle5594"
            />
          </Row>
        </Column>
        <Column className="items-center 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] w-[100%]">
          <Row className="bg-gray_50 justify-between lg:p-[38px] xl:p-[44px] 2xl:p-[50px] 3xl:p-[60px] w-[100%]">
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
                  alt="search One"
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
          <Row className="items-center 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[9px] w-[83%]">
            <Column className="pb-[4px] pr-[4px] w-[51%]">
              <Text className="font-extrabold leading-[140.00%] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[43%]">
                A note from our founders.
              </Text>
              <Text className="font-normal leading-[180.00%] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[72%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. In a free hour,
              </Text>
              <Row className="items-center lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[43%]">
                <Text className="border-2 border-gray_900 border-solid flex font-extrabold items-center xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[9px] rounded-radius50 lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  1
                </Text>
                <Text className="font-bold lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 tracking-ls1 w-[auto]">
                  It all started in 1995
                </Text>
              </Row>
              <Text className="font-normal leading-[180.00%] lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[73%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. In a free hour, On the other hand, we denounce with
                righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment.
              </Text>
              <Row className="items-center lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[52%]">
                <Text className="border-2 border-gray_900 border-solid flex font-extrabold items-center 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] rounded-radius50 lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  2
                </Text>
                <Text className="font-bold lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 tracking-ls1 w-[auto]">
                  Donate launches in 2007
                </Text>
              </Row>
              <Text className="font-normal leading-[180.00%] lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[73%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. In a free hour, On the other hand, we denounce with
                righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment.
              </Text>
              <Row className="items-end lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[91%]">
                <Text className="border-2 border-gray_900 border-solid flex font-extrabold items-center 2xl:px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] rounded-radius50 lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  3
                </Text>
                <Text className="font-bold mb-[2px] lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:text-[17px] xl:text-[19px] 2xl:text-[22px] 3xl:text-[26px] text-gray_900 tracking-ls1 w-[auto]">
                  RealStatic holds its initial public offering in 2008
                </Text>
              </Row>
              <Text className="font-normal leading-[180.00%] lg:ml-[47px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[73%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. In a free hour, On the other hand, we denounce with
                righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment.
              </Text>
            </Column>
            <Stack className="lg:h-[502px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] rotate-[180deg] w-[49%]">
              <div className="absolute bg-orange_A700 bottom-[0] lg:h-[463px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] right-[0] rounded-radius10 w-[88%]"></div>
              <Img
                src="images/img_rectangle20.png"
                className="absolute lg:h-[459px] xl:h-[524px] 2xl:h-[590px] 3xl:h-[708px] left-[0] rounded-radius10 top-[0] w-[91%]"
                alt="RectangleTwenty"
              />
            </Stack>
          </Row>
          <Row className="items-center justify-between 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] 2xl:pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] w-[83%]">
            <Stack className="lg:h-[502px] xl:h-[574px] 2xl:h-[646px] 3xl:h-[775px] w-[49%]">
              <div className="absolute bg-orange_A700 bottom-[0] lg:h-[463px] xl:h-[530px] 2xl:h-[596px] 3xl:h-[715px] left-[0] rounded-radius10 w-[88%]"></div>
              <Img
                src="images/img_rectangle20_589X537.png"
                className="absolute lg:h-[459px] xl:h-[524px] 2xl:h-[590px] 3xl:h-[708px] right-[0] rounded-radius10 top-[0] w-[91%]"
                alt="RectangleTwenty One"
              />
            </Stack>
            <Column className="w-[37%]">
              <Text className="font-extrabold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
                Our vision is simple.
              </Text>
              <Text className="font-normal leading-[180.00%] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[100%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. In a free hour, On the other hand, we denounce with
                righteous indignation and dislike men who are so beguiled and
                demoralized by the charms of pleasure of the moment.
                <br />
                In a free hour, On the other hand, we denounce with righteous
                indignation and dislike men .
              </Text>
              <Text className="font-semibold lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Kausar Pial
              </Text>
              <Text className="font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                CEO at Static Mania
              </Text>
            </Column>
          </Row>
          <Text className="font-extrabold 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
            RealStatic Team members
          </Text>
          <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-4 lg:mt-[50px] xl:mt-[57px] 2xl:mt-[65px] 3xl:mt-[78px] w-[83%]">
            <Column className="lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] w-[100%]">
              <Img
                src="images/img_rectangle5596.png"
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                alt="Rectangle5596"
              />
              <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Kausar Pial
              </Text>
              <Text className="font-normal 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                CEO
              </Text>
            </Column>
            <Column className="lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] w-[100%]">
              <Img
                src="images/img_rectangle5597.png"
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                alt="Rectangle5597"
              />
              <Text className="font-semibold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Floyd Miles
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                President of Sales
              </Text>
            </Column>
            <Column className="pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle5598.png"
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                alt="Rectangle5598"
              />
              <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Darlene Robertson
              </Text>
              <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                Marketing Coordinator
              </Text>
            </Column>
            <Column className="pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle5599.png"
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                alt="Rectangle5599"
              />
              <Text className="font-semibold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Guy Hawkins
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                Marketing Coordinator
              </Text>
            </Column>
            <Column className="pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle5600.png"
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                alt="Rectangle5600"
              />
              <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Jerome Bell
              </Text>
              <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                Marketing Coordinator
              </Text>
            </Column>
            <Column className="pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle5601.png"
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                alt="Rectangle5601"
              />
              <Text className="font-semibold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Ralph Edwards
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                Marketing Coordinator
              </Text>
            </Column>
            <Column className="pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle5602.png"
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                alt="Rectangle5602"
              />
              <Text className="font-semibold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Arlene McCoy
              </Text>
              <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                Marketing Coordinator
              </Text>
            </Column>
            <Column className="pb-[4px] w-[100%]">
              <Img
                src="images/img_rectangle5603.png"
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                alt="Rectangle5603"
              />
              <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Devon Lane
              </Text>
              <Text className="font-normal xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                Marketing Coordinator
              </Text>
            </Column>
          </Grid>
          <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[83%]">
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] w-[75%]"
              orientation="horizontal"
            >
              <Column className="pb-[4px] w-[100%]">
                <Img
                  src="images/img_rectangle5604.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5604"
                />
                <Text className="font-semibold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  Courtney Henry
                </Text>
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                  Marketing Coordinator
                </Text>
              </Column>
              <Column className="pb-[4px] w-[100%]">
                <Img
                  src="images/img_rectangle5605.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5605"
                />
                <Text className="font-semibold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  Bessie Cooper
                </Text>
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                  Marketing Coordinator
                </Text>
              </Column>
              <Column className="pb-[4px] w-[100%]">
                <Img
                  src="images/img_rectangle5606.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5606"
                />
                <Text className="font-semibold lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  Cody Fisher
                </Text>
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                  Marketing Coordinator
                </Text>
              </Column>
            </List>
            <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] pb-[4px] w-[24%]">
              <Img
                src="images/img_rectangle5607.png"
                className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-radius10 lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                alt="Rectangle5607"
              />
              <Column className="lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[67%]">
                <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                  Cody Fisher
                </Text>
                <Text className="font-normal 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]">
                  Marketing Coordinator
                </Text>
              </Column>
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
                alt="arrowright"
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
                  alt="image Eighteen"
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
                    alt="arrowright One"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Img
                  src="images/img_image_350X384.png"
                  className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius10 w-[100%]"
                  alt="image Nineteen"
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
                    alt="arrowright Two"
                  />
                </Row>
              </Column>
              <Column className="w-[100%]">
                <Img
                  src="images/img_image_1.png"
                  className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius10 w-[100%]"
                  alt="image Twenty"
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
                    alt="arrowright Three"
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
                    src="images/img_socialmedia.svg"
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

export default AboutUsPage;
