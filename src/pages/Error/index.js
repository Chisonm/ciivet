import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const ErrorPage = () => {
  return (
    <>
      <Column className="bg-gray_52 font-manrope items-center mx-[auto] lg:p-[13px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[20px] w-[100%]">
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
            <Text className="cursor-pointer font-bold font-manrope hover:font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 hover:text-orange_A700 w-[auto]">
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
        <Img
          src="images/img_illustration.svg"
          className="lg:h-[374px] xl:h-[427px] 2xl:h-[481px] 3xl:h-[577px] lg:mt-[105px] xl:mt-[120px] 2xl:mt-[135px] 3xl:mt-[162px] w-[33%]"
          alt="illustration"
        />
        <Text className="font-extrabold lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
          Something wrong!
        </Text>
        <Button
          className="2xl:mb-[178px] 2xl:mt-[24px] 3xl:mb-[213px] 3xl:mt-[28px] flex items-center justify-center lg:mb-[138px] lg:mt-[18px] text-center w-[11%] xl:mb-[158px] xl:mt-[21px]"
          rightIcon={
            <Img
              src="images/img_arrowright_gray_900.svg"
              className="text-center lg:w-[4px] lg:ml-[14px] xl:w-[5px] xl:ml-[16px] 2xl:w-[6px] 2xl:ml-[18px] 3xl:w-[7px] 3xl:ml-[21px]"
              alt="arrow_right"
            />
          }
          size="xl"
          variant="OutlineGray600"
        >
          <div className="bg-transparent font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
            Homepage
          </div>
        </Button>
      </Column>
    </>
  );
};

export default ErrorPage;
