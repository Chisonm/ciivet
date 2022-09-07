import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  Stack,
  Radio,
  Grid,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const ListingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

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
          <Column className="bg-gray_52 lg:p-[56px] xl:p-[64px] 2xl:p-[72px] 3xl:p-[86px] w-[100%]">
            <Text className="font-extrabold lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
              Find Property
            </Text>
            <Row className="items-center lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[92%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_700 text-gray_700 w-[100%]"
                wrapClassName="flex w-[35%]"
                name="TextFieldLa"
                placeholder="Enter your address"
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer mr-[1px] lg:w-[14px] lg:h-[14px] lg:ml-[27px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                      onClick={() => setInputvalue("")}
                      color="#626262"
                    />
                  ) : (
                    <Img
                      src="images/img_search_gray_700.svg"
                      className="cursor-pointer mr-[1px] lg:w-[14px] lg:h-[14px] lg:ml-[27px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                      alt="search"
                    />
                  )
                }
                shape="srcRoundedBorder10"
                size="mdSrc"
                variant="srcOutlineBluegray100"
              ></Input>
              <SelectBox
                className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[9%]"
                placeholderClassName="text-gray_700"
                name="DropdownLarg"
                placeholder="Buy"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_gray_700.svg"
                    className="lg:w-[11px] lg:h-[6px] lg:mr-[15px] xl:w-[13px] xl:h-[7px] xl:mr-[17px] 2xl:w-[15px] 2xl:h-[8px] 2xl:mr-[20px] 3xl:w-[18px] 3xl:h-[9px] 3xl:mr-[24px]"
                    alt="arrow_down"
                  />
                }
                size="lg"
              ></SelectBox>
              <SelectBox
                className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[18%]"
                placeholderClassName="text-gray_700"
                name="price"
                placeholder="$15000 - $18000"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_gray_700.svg"
                    className="lg:w-[11px] lg:h-[6px] lg:mr-[15px] xl:w-[13px] xl:h-[7px] xl:mr-[17px] 2xl:w-[15px] 2xl:h-[8px] 2xl:mr-[20px] 3xl:w-[18px] 3xl:h-[9px] 3xl:mr-[24px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[11%]"
                placeholderClassName="text-gray_700"
                name="DropdownLarg One"
                placeholder="Bed - 3"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_gray_700.svg"
                    className="lg:w-[11px] lg:h-[6px] lg:mr-[15px] xl:w-[13px] xl:h-[7px] xl:mr-[17px] 2xl:w-[15px] 2xl:h-[8px] 2xl:mr-[20px] 3xl:w-[18px] 3xl:h-[9px] 3xl:mr-[24px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Button
                className="2xl:ml-[16px] 3xl:ml-[19px] flex items-center justify-center lg:ml-[12px] text-center w-[10%] xl:ml-[14px]"
                rightIcon={
                  <Img
                    src="images/img_plus.svg"
                    className="text-center lg:w-[12px] lg:h-[13px] lg:ml-[11px] xl:w-[14px] xl:h-[15px] xl:ml-[13px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[15px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[18px]"
                    alt="plus"
                  />
                }
                size="xl"
                variant="OutlineBluegray1001_2"
              >
                <div className="bg-transparent font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  More
                </div>
              </Button>
              <Button
                className="2xl:ml-[16px] 3xl:ml-[19px] flex items-center justify-center lg:ml-[12px] text-center w-[11%] xl:ml-[14px]"
                rightIcon={
                  <Img
                    src="images/img_search_white_A700.svg"
                    className="text-center lg:w-[11px] lg:h-[12px] lg:ml-[9px] xl:w-[13px] xl:h-[14px] xl:ml-[10px] 2xl:w-[15px] 2xl:h-[16px] 2xl:ml-[12px] 3xl:w-[18px] 3xl:h-[19px] 3xl:ml-[14px]"
                    alt="search"
                  />
                }
                size="xl"
              >
                <div className="bg-transparent font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                  Search
                </div>
              </Button>
            </Row>
            <Row className="items-center lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[71%]">
              <Row className="border border-bluegray_100 border-solid items-center 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[16%]">
                <Text className="font-semibold ml-[3px] my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                  Bathrooms
                </Text>
                <Text className="font-semibold mb-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  2+
                </Text>
                <Img
                  src="images/img_close_9X9.svg"
                  className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] 3xl:w-[10px] lg:w-[7px] xl:w-[8px] 2xl:w-[9px]"
                  alt="close"
                />
              </Row>
              <Row className="border border-bluegray_100 border-solid justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[8px] rounded-radius10 w-[27%]">
                <Text className="font-semibold lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                  Square Feet
                </Text>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  750 - 2000 sq. ft
                </Text>
                <Img
                  src="images/img_close_9X9.svg"
                  className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] 3xl:w-[10px] lg:w-[7px] xl:w-[8px] 2xl:w-[9px]"
                  alt="close One"
                />
              </Row>
              <Row className="border border-bluegray_100 border-solid items-center justify-center 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] 2xl:p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius10 w-[17%]">
                <Text className="font-semibold ml-[3px] my-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                  Year Built
                </Text>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                  5 - 15
                </Text>
                <Img
                  src="images/img_close_9X9.svg"
                  className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mr-[2px] 3xl:w-[10px] lg:w-[7px] xl:w-[8px] 2xl:w-[9px]"
                  alt="close Two"
                />
              </Row>
              <Button
                className="2xl:ml-[10px] 3xl:ml-[12px] flex items-center justify-center lg:ml-[7px] text-center w-[18%] xl:ml-[8px]"
                rightIcon={
                  <Img
                    src="images/img_close_9X9.svg"
                    className="text-center lg:w-[7px] lg:h-[7px] lg:ml-[10px] xl:w-[8px] xl:h-[9px] xl:ml-[11px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[13px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[15px]"
                    alt="close"
                  />
                }
                size="sm"
                variant="OutlineBluegray100"
              >
                <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  For Sale By Agent
                </div>
              </Button>
              <Button
                className="2xl:ml-[10px] 3xl:ml-[12px] flex items-center justify-center lg:ml-[7px] text-center w-[19%] xl:ml-[8px]"
                rightIcon={
                  <Img
                    src="images/img_close_9X9.svg"
                    className="text-center lg:w-[7px] lg:h-[7px] lg:ml-[10px] xl:w-[8px] xl:h-[9px] xl:ml-[11px] 2xl:w-[9px] 2xl:h-[10px] 2xl:ml-[13px] 3xl:w-[10px] 3xl:h-[11px] 3xl:ml-[15px]"
                    alt="close"
                  />
                }
                size="sm"
                variant="OutlineBluegray100"
              >
                <div className="bg-transparent font-semibold lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                  New Construction
                </div>
              </Button>
            </Row>
            <Row className="lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[93%]">
              <Column
                className="bg-cover bg-repeat justify-center lg:p-[21px] xl:p-[24px] 2xl:p-[28px] 3xl:p-[33px] rounded-radius10 w-[32%]"
                style={{
                  backgroundImage:
                    "url('images/img_group100000142_400X712.png')",
                }}
              >
                <Img
                  src="images/img_location_43X33.svg"
                  className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] lg:mr-[93px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[10%]"
                  alt="location"
                />
                <Stack className="lg:h-[286px] xl:h-[327px] 2xl:h-[368px] 3xl:h-[441px] lg:mb-[19px] xl:mb-[22px] 2xl:mb-[25px] 3xl:mb-[30px] lg:mr-[4px] xl:mr-[5px] 2xl:mr-[6px] 3xl:mr-[7px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[98%]">
                  <Column className="absolute right-[0] w-[93%]">
                    <Row className="justify-end ml-[auto] w-[96%]">
                      <Img
                        src="images/img_location_43X33.svg"
                        className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:mb-[23px] xl:mb-[26px] 2xl:mb-[30px] 3xl:mb-[36px] w-[12%]"
                        alt="location One"
                      />
                      <Img
                        src="images/img_location_43X33.svg"
                        className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[170px] xl:ml-[194px] 2xl:ml-[219px] 3xl:ml-[262px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[12%]"
                        alt="location Two"
                      />
                    </Row>
                    <Row className="lg:mt-[185px] xl:mt-[212px] 2xl:mt-[239px] 3xl:mt-[286px] w-[92%]">
                      <Img
                        src="images/img_location_43X33.svg"
                        className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] 2xl:mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] w-[12%]"
                        alt="location Three"
                      />
                      <Img
                        src="images/img_location_43X33.svg"
                        className="lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] lg:ml-[161px] xl:ml-[184px] 2xl:ml-[207px] 3xl:ml-[248px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[12%]"
                        alt="location Four"
                      />
                    </Row>
                  </Column>
                  <Column className="absolute bg-white_A700 border border-bluegray_100 border-solid justify-center left-[0] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 top-[16%] w-[93%]">
                    <Row className="items-end ml-[3px] mt-[1px] w-[98%]">
                      <Img
                        src="images/img_eye.svg"
                        className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] mb-[1px] w-[6%]"
                        alt="eye"
                      />
                      <Text className="font-semibold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_900 w-[auto]">
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[90%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[1px] w-[8%]"
                        alt="bookmark"
                      />
                      <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] lg:ml-[40px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[62px] w-[8%]"
                        alt="ticket"
                      />
                      <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[3px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[91%]">
                      <Img
                        src="images/img_vector_16X16.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                        alt="Vector"
                      />
                      <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]">
                        1,032 sqft
                      </Text>
                      <Radio
                        value="Family"
                        className="font-semibold lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] lg:pl-[10px] xl:pl-[12px] 2xl:pl-[14px] 3xl:pl-[16px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        checked={false}
                        name="Family"
                        label="Family"
                        size="md"
                      ></Radio>
                    </Row>
                    <Text className="font-bold mb-[3px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                      $649,900
                    </Text>
                  </Column>
                </Stack>
              </Column>
              <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-2 lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[66%]">
                <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_image_260X384.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye.svg"
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
                        src="images/img_ticket.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket One"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_16X16.svg"
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
                <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_image_2.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image One"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye.svg"
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
                        src="images/img_ticket.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket Two"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_16X16.svg"
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
                      <Text className="font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_image_3.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Two"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye.svg"
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
                        alt="bookmark Three"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket Three"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_16X16.svg"
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
                    <Row className="items-center justify-between ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]">
                        View Details
                      </Button>
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_image_4.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Three"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye.svg"
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
                        alt="bookmark Four"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket Four"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_16X16.svg"
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
                    <Row className="items-center justify-between ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button
                        className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]"
                        variant="FillGray700"
                      >
                        View Details
                      </Button>
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_image_5.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Four"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye.svg"
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
                        alt="bookmark Five"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket Five"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_16X16.svg"
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
                <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_image_6.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Five"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye.svg"
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
                        alt="bookmark Six"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket Six"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_16X16.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                        alt="Vector Six"
                      />
                      <Text className="font-semibold lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] mt-[2px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1,032 sqft
                      </Text>
                      <Radio
                        value="Family"
                        className="font-semibold lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700"
                        inputClassName="mr-[5px] w-[undefinedpx]"
                        checked={false}
                        name="FamilySix"
                        label="Family"
                      ></Radio>
                    </Row>
                    <Row className="items-center ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]">
                        View Details
                      </Button>
                      <Text className="font-bold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_image_7.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Six"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye.svg"
                        className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]"
                        alt="eye Seven"
                      />
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[80%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[1px] w-[8%]"
                        alt="bookmark Seven"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket Seven"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_16X16.svg"
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
                        name="FamilySeven"
                        label="Family"
                      ></Radio>
                    </Row>
                    <Row className="items-center justify-between ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]">
                        View Details
                      </Button>
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid hover:cursor-pointer lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 hover:shadow-bs1 hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_image_8.png"
                    className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                    alt="image Seven"
                  />
                  <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[77%]">
                    <Row className="ml-[3px] w-[99%]">
                      <Img
                        src="images/img_eye.svg"
                        className="lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[5%]"
                        alt="eye Eight"
                      />
                      <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[3px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                        2861 62nd Ave, Oakland, CA 94605
                      </Text>
                    </Row>
                    <Row className="lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[80%]">
                      <Img
                        src="images/img_bookmark.svg"
                        className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] mt-[1px] w-[8%]"
                        alt="bookmark Eight"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        3 Bed Room
                      </Text>
                      <Img
                        src="images/img_ticket.svg"
                        className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] mt-[1px] w-[8%]"
                        alt="ticket Eight"
                      />
                      <Text className="font-semibold mb-[1px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_700 w-[auto]">
                        1 Bath
                      </Text>
                    </Row>
                    <Row className="ml-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[81%]">
                      <Img
                        src="images/img_vector_16X16.svg"
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
                        name="FamilyEight"
                        label="Family"
                      ></Radio>
                    </Row>
                    <Row className="items-center justify-between ml-[1px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[95%]">
                      <Button className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[50%]">
                        View Details
                      </Button>
                      <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                        $649,900
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Grid>
            </Row>
            <Row className="items-center justify-end lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] ml-[auto] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[61%]">
              <Button
                className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[5%]"
                variant="OutlineGray700"
              >
                1
              </Button>
              <Button
                className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
                variant="OutlineBluegray101"
              >
                2
              </Button>
              <Button
                className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
                variant="OutlineBluegray101"
              >
                3
              </Button>
              <Button
                className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
                variant="OutlineBluegray101"
              >
                4
              </Button>
              <Button
                className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[6%]"
                variant="OutlineBluegray101"
              >
                5
              </Button>
              <Button
                className="2xl:ml-[405px] 3xl:ml-[486px] flex items-center justify-center lg:ml-[315px] text-center w-[18%] xl:ml-[360px]"
                rightIcon={
                  <Img
                    src="images/img_arrowright_gray_900.svg"
                    className="text-center lg:w-[3px] lg:ml-[7px] xl:w-[4px] xl:ml-[8px] 2xl:w-[5px] 2xl:ml-[9px] 3xl:w-[6px] 3xl:ml-[10px]"
                    alt="arrow_right"
                  />
                }
                variant="OutlineBluegray101"
              >
                <div className="bg-transparent font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Next Page
                </div>
              </Button>
            </Row>
          </Column>
          <footer className="bg-white_A700 xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
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
                    src="images/img_socialmedia_9.svg"
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

export default ListingPage;
