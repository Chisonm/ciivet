import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Input,
  SelectBox,
  Grid,
} from "components";
import { CloseSVG } from "../../assets/images/index.js";

const BlogPagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 font-manrope items-center mx-[auto] w-[100%]">
        <Column className="bg-gray_52 lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
          <header className="2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] w-[85%]">
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
          <Text className="font-extrabold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
            Real Estate News & Blogs
          </Text>
          <Row className="items-center 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[53%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
              wrapClassName="flex w-[56%]"
              name="TextFieldLa"
              placeholder="Enter your address"
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    className="cursor-pointer mr-[1px] lg:w-[14px] lg:h-[14px] lg:ml-[27px] xl:w-[16px] xl:h-[17px] xl:ml-[31px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[35px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[42px] my-[auto]"
                    onClick={() => setInputvalue("")}
                    color="#6e6e6e"
                  />
                ) : (
                  <Img
                    src="images/img_search_gray_600.svg"
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
              className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[21%]"
              placeholderClassName="text-gray_600"
              name="DropdownLarg"
              placeholder="Category"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_gray_600.svg"
                  className="lg:w-[11px] lg:h-[6px] lg:mr-[15px] xl:w-[13px] xl:h-[7px] xl:mr-[17px] 2xl:w-[15px] 2xl:h-[8px] 2xl:mr-[20px] 3xl:w-[18px] 3xl:h-[9px] 3xl:mr-[24px]"
                  alt="arrow_down"
                />
              }
              size="lg"
            ></SelectBox>
            <SelectBox
              className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[19%]"
              placeholderClassName="text-gray_600"
              name="DropdownLarg One"
              placeholder="Popular"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Img
                  src="images/img_arrowdown_gray_600.svg"
                  className="lg:w-[11px] lg:h-[6px] lg:mr-[15px] xl:w-[13px] xl:h-[7px] xl:mr-[17px] 2xl:w-[15px] 2xl:h-[8px] 2xl:mr-[20px] 3xl:w-[18px] 3xl:h-[9px] 3xl:mr-[24px]"
                  alt="arrow_down"
                />
              }
              size="lg"
            ></SelectBox>
          </Row>
          <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[85%]">
            <Column className="w-[100%]">
              <Img
                src="images/img_rectangle5617.png"
                className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius8 w-[100%]"
                alt="Rectangle5617"
              />
              <Button
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[23%]"
                size="md"
                variant="OutlineBluegray100"
              >
                Business
              </Button>
              <Text className="font-bold leading-[135.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[93%]">
                10 Delightful Dining Room Decor Trends for Spring
              </Text>
              <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  July 20, 2022
                </Text>
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  7 min read
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[49%]">
                <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  Continue Reading
                </Text>
                <Img
                  src="images/img_arrowright_13X16.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                  alt="arrowright"
                />
              </Row>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_rectangle5617.png"
                className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius8 w-[100%]"
                alt="Rectangle5617 One"
              />
              <Button
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[23%]"
                size="md"
                variant="OutlineBluegray100"
              >
                Business
              </Button>
              <Text className="font-bold leading-[135.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[93%]">
                10 Delightful Dining Room Decor Trends for Spring
              </Text>
              <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  July 20, 2022
                </Text>
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  7 min read
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[49%]">
                <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  Continue Reading
                </Text>
                <Img
                  src="images/img_arrowright_13X16.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                  alt="arrowright One"
                />
              </Row>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_rectangle5617.png"
                className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius8 w-[100%]"
                alt="Rectangle5617 Two"
              />
              <Button
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[23%]"
                size="md"
                variant="OutlineBluegray100"
              >
                Business
              </Button>
              <Text className="font-bold leading-[135.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[93%]">
                10 Delightful Dining Room Decor Trends for Spring
              </Text>
              <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  July 20, 2022
                </Text>
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  7 min read
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[49%]">
                <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  Continue Reading
                </Text>
                <Img
                  src="images/img_arrowright_13X16.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                  alt="arrowright Two"
                />
              </Row>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_rectangle5617.png"
                className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius8 w-[100%]"
                alt="Rectangle5617 Three"
              />
              <Button
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[23%]"
                size="md"
                variant="OutlineBluegray100"
              >
                Business
              </Button>
              <Text className="font-bold leading-[135.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[93%]">
                10 Delightful Dining Room Decor Trends for Spring
              </Text>
              <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  July 20, 2022
                </Text>
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  7 min read
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[49%]">
                <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  Continue Reading
                </Text>
                <Img
                  src="images/img_arrowright_13X16.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                  alt="arrowright Three"
                />
              </Row>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_rectangle5617.png"
                className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius8 w-[100%]"
                alt="Rectangle5617 Four"
              />
              <Button
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[23%]"
                size="md"
                variant="OutlineBluegray100"
              >
                Business
              </Button>
              <Text className="font-bold leading-[135.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[93%]">
                10 Delightful Dining Room Decor Trends for Spring
              </Text>
              <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  July 20, 2022
                </Text>
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  7 min read
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[49%]">
                <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  Continue Reading
                </Text>
                <Img
                  src="images/img_arrowright_13X16.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                  alt="arrowright Four"
                />
              </Row>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_rectangle5617.png"
                className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius8 w-[100%]"
                alt="Rectangle5617 Five"
              />
              <Button
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[23%]"
                size="md"
                variant="OutlineBluegray100"
              >
                Business
              </Button>
              <Text className="font-bold leading-[135.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[93%]">
                10 Delightful Dining Room Decor Trends for Spring
              </Text>
              <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  July 20, 2022
                </Text>
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  7 min read
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[49%]">
                <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  Continue Reading
                </Text>
                <Img
                  src="images/img_arrowright_13X16.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                  alt="arrowright Five"
                />
              </Row>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_rectangle5617.png"
                className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius8 w-[100%]"
                alt="Rectangle5617 Six"
              />
              <Button
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[23%]"
                size="md"
                variant="OutlineBluegray100"
              >
                Business
              </Button>
              <Text className="font-bold leading-[135.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[93%]">
                10 Delightful Dining Room Decor Trends for Spring
              </Text>
              <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  July 20, 2022
                </Text>
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  7 min read
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[49%]">
                <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  Continue Reading
                </Text>
                <Img
                  src="images/img_arrowright_13X16.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                  alt="arrowright Six"
                />
              </Row>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_rectangle5617.png"
                className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius8 w-[100%]"
                alt="Rectangle5617 Seven"
              />
              <Button
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[23%]"
                size="md"
                variant="OutlineBluegray100"
              >
                Business
              </Button>
              <Text className="font-bold leading-[135.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[93%]">
                10 Delightful Dining Room Decor Trends for Spring
              </Text>
              <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  July 20, 2022
                </Text>
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  7 min read
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[49%]">
                <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  Continue Reading
                </Text>
                <Img
                  src="images/img_arrowright_13X16.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                  alt="arrowright Seven"
                />
              </Row>
            </Column>
            <Column className="w-[100%]">
              <Img
                src="images/img_rectangle5617.png"
                className="lg:h-[273px] xl:h-[312px] 2xl:h-[351px] 3xl:h-[421px] rounded-radius8 w-[100%]"
                alt="Rectangle5617 Eight"
              />
              <Button
                className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[23%]"
                size="md"
                variant="OutlineBluegray100"
              >
                Business
              </Button>
              <Text className="font-bold leading-[135.00%] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[93%]">
                10 Delightful Dining Room Decor Trends for Spring
              </Text>
              <Row className="items-center lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] pt-[3px] w-[47%]">
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  July 20, 2022
                </Text>
                <div className="bg-bluegray_100 lg:h-[4px] xl:h-[5px] 2xl:h-[6px] 3xl:h-[7px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[3px] xl:w-[4px] 2xl:w-[5px] 3xl:w-[6px]"></div>
                <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_600 w-[auto]">
                  7 min read
                </Text>
              </Row>
              <Row className="items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] pr-[1px] py-[1px] w-[49%]">
                <Text className="font-bold mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  Continue Reading
                </Text>
                <Img
                  src="images/img_arrowright_13X16.svg"
                  className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] w-[9%]"
                  alt="arrowright Eight"
                />
              </Row>
            </Column>
          </Grid>
          <Row className="items-center 2xl:mb-[106px] 3xl:mb-[127px] lg:mb-[82px] xl:mb-[94px] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[85%]">
            <Button
              className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
              variant="OutlineGray600"
            >
              1
            </Button>
            <Button
              className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
              variant="OutlineGray51"
            >
              2
            </Button>
            <Button
              className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
              variant="OutlineGray51"
            >
              3
            </Button>
            <Button
              className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
              variant="OutlineGray51"
            >
              4
            </Button>
            <Button
              className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
              variant="OutlineGray51"
            >
              5
            </Button>
            <Button
              className="2xl:ml-[808px] 3xl:ml-[970px] flex items-center justify-center lg:ml-[628px] text-center w-[12%] xl:ml-[718px]"
              rightIcon={
                <Img
                  src="images/img_arrowright_gray_900.svg"
                  className="text-center lg:w-[3px] lg:ml-[7px] xl:w-[4px] xl:ml-[8px] 2xl:w-[5px] 2xl:ml-[9px] 3xl:w-[6px] 3xl:ml-[10px]"
                  alt="arrow_right"
                />
              }
              variant="OutlineGray600"
            >
              <div className="bg-transparent font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                Next Page
              </div>
            </Button>
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
                  src="images/img_socialmedia_4.svg"
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

export default BlogPagePage;
