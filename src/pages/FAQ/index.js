import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Input, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const FAQPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }
  function handleNavigate2() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }
  function handleNavigate3() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

  const [inputvalue, setInputvalue] = React.useState("");

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
        <Text className="font-extrabold 2xl:mt-[103px] 3xl:mt-[123px] lg:mt-[80px] xl:mt-[91px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] 3xl:text-[55px] text-gray_900 tracking-ls1 w-[auto]">
          Search Property / Anything
        </Text>
        <Column className="items-center lg:mb-[150px] xl:mb-[171px] 2xl:mb-[193px] 3xl:mb-[231px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[56%]">
          <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center 3xl:p-[10px] lg:p-[7px] xl:p-[8px] 2xl:p-[9px] rounded-radius10 w-[100%]">
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
              wrapClassName="2xl:ml-[9px] 3xl:ml-[10px] flex lg:ml-[7px] mt-[2px] w-[90%] xl:ml-[8px]"
              name="FrameSeventeen"
              placeholder="Search Property / Anything"
              prefix={
                <Img
                  src="images/img_search_gray_600.svg"
                  className="cursor-pointer ml-[2px] lg:w-[13px] lg:mr-[13px] xl:w-[15px] xl:mr-[15px] 2xl:w-[17px] 2xl:mr-[17px] 3xl:w-[20px] 3xl:mr-[20px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#6e6e6e"
                    className="cursor-pointer lg:w-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              size="smSrc"
              variant="srcFillWhiteA700"
            ></Input>
            <Line className="bg-bluegray_100 lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] w-[1px]" />
            <Img
              src="images/img_settings.svg"
              className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[2%]"
              alt="settings"
            />
          </Row>
          <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-center lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius10 w-[100%]">
            <Text className="font-semibold lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
              You're viewing sample results.
            </Text>
            <a
              href={"https://staticmania.com"}
              target="_blank"
              className="common-pointer font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]"
              onClick={handleNavigate3}
              rel="noreferrer"
            >
              https://staticmania.com
            </a>
            <Text className="font-normal leading-[150.00%] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600 w-[86%]">
              Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam
              autem suscipit culpa perspiciatis. Exercitationem dolorum dolore
              perferendis praesen…
            </Text>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            <Text className="font-semibold lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
              Add CMS or Business Hosting and index your site to see real search
              results!
            </Text>
            <Text
              className="common-pointer font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]"
              onClick={handleNavigate2}
            >
              https://staticmania.com
            </Text>
            <Text className="font-normal leading-[150.00%] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600 w-[86%]">
              Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam
              autem suscipit culpa perspiciatis. Exercitationem dolorum dolore
              perferendis praesen…
            </Text>
            <Line className="bg-bluegray_100 h-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]" />
            <Text className="font-semibold lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
              You're viewing sample results.
            </Text>
            <Text
              className="common-pointer font-semibold lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]"
              onClick={handleNavigate1}
            >
              https://staticmania.com
            </Text>
            <Text className="font-normal leading-[150.00%] mb-[2px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_600 w-[86%]">
              Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam
              autem suscipit culpa perspiciatis. Exercitationem dolorum dolore
              perferendis praesen…
            </Text>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FAQPage;
