import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Stack,
  Grid,
  Radio,
  Line,
  List,
  SelectBox,
} from "components";

const AgentProfilePage = () => {
  const navigate = useNavigate();

  function handleNavigate4() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

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
          <Stack className="lg:h-[3143px] xl:h-[3594px] 2xl:h-[4043px] 3xl:h-[4851px] w-[100%]">
            <Column className="absolute items-center w-[100%]">
              <Img
                src="images/img_coverimage.png"
                className="lg:h-[195px] xl:h-[223px] 2xl:h-[251px] 3xl:h-[301px] w-[100%]"
                alt="CoverImage"
              />
              <Column className="bg-gray_52 justify-end lg:p-[52px] xl:p-[59px] 2xl:p-[67px] 3xl:p-[80px] w-[100%]">
                <Row className="items-center lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] mr-[auto] 2xl:mt-[109px] 3xl:mt-[130px] lg:mt-[84px] xl:mt-[96px] w-[38%]">
                  <Button className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[24%]">
                    For rent
                  </Button>
                  <Button
                    className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[24%]"
                    variant="OutlineGray600"
                  >
                    For sale
                  </Button>
                  <Button
                    className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
                    variant="OutlineGray600"
                  >
                    About
                  </Button>
                  <Button
                    className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[23%]"
                    variant="OutlineGray600"
                  >
                    Review
                  </Button>
                </Row>
                <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[92%]">
                  <Column className="bg-gray_52 border border-red_100 border-solid lg:pb-[23px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius10 w-[100%]">
                    <Img
                      src="images/img_image_260X384.png"
                      className="lg:h-[203px] xl:h-[232px] 2xl:h-[261px] 3xl:h-[313px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]"
                      alt="image"
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
                      src="images/img_image_260X384.png"
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
                      src="images/img_image_10.png"
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
                <Row className="items-center lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[92%]">
                  <Button
                    className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
                    variant="OutlineGray600"
                  >
                    1
                  </Button>
                  <Button
                    className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
                    variant="OutlineBluegray101"
                  >
                    2
                  </Button>
                  <Button
                    className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
                    variant="OutlineBluegray101"
                  >
                    3
                  </Button>
                  <Button
                    className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
                    variant="OutlineBluegray101"
                  >
                    4
                  </Button>
                  <Button
                    className="font-semibold lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[4%]"
                    variant="OutlineBluegray101"
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
                    variant="OutlineBluegray101"
                  >
                    <div className="bg-transparent font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                      Next Page
                    </div>
                  </Button>
                </Row>
                <Row className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] 2xl:mt-[100px] 3xl:mt-[120px] lg:mt-[77px] xl:mt-[88px] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[92%]">
                  <Column className="lg:mb-[15px] xl:mb-[17px] 2xl:mb-[20px] 3xl:mb-[24px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[60%]">
                    <Row className="w-[68%]">
                      <Img
                        src="images/img_rectangle5599.png"
                        className="lg:h-[142px] xl:h-[162px] 2xl:h-[183px] 3xl:h-[219px] rounded-radius10 lg:w-[141px] xl:w-[161px] 2xl:w-[182px] 3xl:w-[218px]"
                        alt="Rectangle5616"
                      />
                      <Column className="lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] pb-[4px] w-[54%]">
                        <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                          Bruno Fernandes
                        </Text>
                        <Row className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] pl-[1px] pt-[1px] w-[77%]">
                          <Img
                            src="images/img_vector.svg"
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                            alt="Vector Six"
                          />
                          <Img
                            src="images/img_vector.svg"
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] w-[7%]"
                            alt="Vector Seven"
                          />
                          <Img
                            src="images/img_vector.svg"
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] w-[7%]"
                            alt="Vector Eight"
                          />
                          <Img
                            src="images/img_vector.svg"
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] w-[7%]"
                            alt="Vector Nine"
                          />
                          <Img
                            src="images/img_vector_gray_600.svg"
                            className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] mt-[1px] w-[7%]"
                            alt="Vector Ten"
                          />
                          <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                            4.5 review
                          </Text>
                        </Row>
                        <Row className="ml-[3px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[67%]">
                          <Img
                            src="images/img_vector_gray_900.svg"
                            className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px]"
                            alt="Vector Eleven"
                          />
                          <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                            (302) 555-0107
                          </Text>
                        </Row>
                        <Row className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] pl-[1px] py-[1px] w-[100%]">
                          <Img
                            src="images/img_mail_16X18.svg"
                            className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] ml-[2px] mt-[2px] w-[7%]"
                            alt="mail"
                          />
                          <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                            staticmania@gmail.com
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Text className="font-normal leading-[180.00%] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[85%]">
                      A slider is great way to display a slideshow featuring
                      images or videos, usually on your homepage.
                      <br />
                      Adding sliders to your site is no longer difficult. You
                      don’t have to know coding anymore. Just use a slider
                      widget and it will automatically insert the slider on your
                      web page.
                      <br />
                      One of the best ways to add beautiful sliders with
                      excellent responsiveness and advanced options.{" "}
                    </Text>
                    <Button className="font-semibold lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[17%]">
                      Contact
                    </Button>
                  </Column>
                  <Line className="bg-bluegray_100 lg:h-[398px] xl:h-[455px] 2xl:h-[512px] 3xl:h-[614px] w-[1px]" />
                  <Column className="lg:ml-[38px] xl:ml-[43px] 2xl:ml-[49px] 3xl:ml-[58px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[8px] w-[33%]">
                    <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                      Experiences
                    </Text>
                    <Text className="font-semibold lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                      15+ years experience
                    </Text>
                    <Text className="font-semibold lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                      Property Types
                    </Text>
                    <Text className="font-semibold lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                      Private House, Villa, Townhouse, Apartment
                    </Text>
                    <Text className="font-semibold lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                      Area
                    </Text>
                    <Text className="font-semibold lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                      <span className="text-gray_900 font-manrope">
                        California
                      </span>
                      <span className="text-gray_600 font-manrope">, </span>
                      <span className="text-gray_600 font-manrope">
                        San Jose
                      </span>
                      <span className="text-gray_600 font-manrope">
                        , Miami
                      </span>
                    </Text>
                    <Text className="font-semibold lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                      Address
                    </Text>
                    <Text className="font-semibold lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                      59 Orchard, NY 5005, US
                    </Text>
                    <Row className="items-center lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[95%]">
                      <Column className="mb-[1px] w-[46%]">
                        <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                          License No
                        </Text>
                        <Text className="font-semibold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                          BF-0535
                        </Text>
                      </Column>
                      <Column className="w-[54%]">
                        <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                          Website
                        </Text>
                        <Text
                          className="common-pointer font-semibold lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]"
                          onClick={handleNavigate4}
                        >
                          www.staticmania.com
                        </Text>
                      </Column>
                    </Row>
                    <Text className="font-semibold lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                      Social
                    </Text>
                    <Img
                      src="images/img_socailicons.svg"
                      className="lg:h-[24px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[58%]"
                      alt="Socailicons"
                    />
                  </Column>
                </Row>
                <Column className="bg-white_A700 border border-bluegray_100 border-solid items-center lg:ml-[41px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] xl:mt-[110px] 2xl:mt-[124px] 3xl:mt-[148px] lg:mt-[96px] lg:py-[23px] xl:py-[26px] 2xl:py-[30px] 3xl:py-[36px] rounded-radius10 w-[92%]">
                  <Row className="items-center justify-between w-[93%]">
                    <Text className="font-extrabold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                      Clients Review
                    </Text>
                    <Button
                      className="flex items-center justify-center text-center w-[17%]"
                      rightIcon={
                        <Img
                          src="images/img_plus_13X13.svg"
                          className="text-center lg:w-[10px] lg:h-[11px] lg:ml-[10px] xl:w-[11px] xl:h-[12px] xl:ml-[11px] 2xl:w-[13px] 2xl:h-[14px] 2xl:ml-[13px] 3xl:w-[15px] 3xl:h-[16px] 3xl:ml-[15px]"
                          alt="plus"
                        />
                      }
                      size="xl"
                    >
                      <div className="bg-transparent font-bold lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px]">
                        Write a Reveiw
                      </div>
                    </Button>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] w-[100%]" />
                  <Column className="2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[92%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 w-[100%]">
                        <Text className="font-semibold leading-[165.00%] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_600 w-[89%]">
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                        <Row className="ml-[2px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[38%]">
                          <Img
                            src="images/img_vector_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[5%]"
                            alt="Vector Twelve"
                          />
                          <Img
                            src="images/img_vector_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[5%]"
                            alt="Vector One"
                          />
                          <Img
                            src="images/img_vector_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[5%]"
                            alt="Vector Two"
                          />
                          <Img
                            src="images/img_vector_gray_900_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[5%]"
                            alt="Vector Three"
                          />
                          <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
                            4.5 review
                          </Text>
                          <Text className="font-semibold lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] my-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
                            02 June 2022
                          </Text>
                        </Row>
                        <Row className="items-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] ml-[4px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[35%]">
                          <Img
                            src="images/img_rectangle5614.png"
                            className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                            alt="Ellipse2695"
                          />
                          <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[74%]">
                            <Text className="font-extrabold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                              Taylor Wilson
                            </Text>
                            <Text className="font-semibold lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                              Product Manager - Static Mania
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-bluegray_100 border-solid xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 w-[100%]">
                        <Text className="font-semibold leading-[165.00%] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_600 w-[89%]">
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                        <Row className="ml-[2px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[38%]">
                          <Img
                            src="images/img_vector_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[5%]"
                            alt="Vector Thirteen"
                          />
                          <Img
                            src="images/img_vector_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[5%]"
                            alt="Vector One One"
                          />
                          <Img
                            src="images/img_vector_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[5%]"
                            alt="Vector Two One"
                          />
                          <Img
                            src="images/img_vector_gray_900_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[5%]"
                            alt="Vector Three One"
                          />
                          <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
                            4.5 review
                          </Text>
                          <Text className="font-semibold lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] my-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
                            02 June 2022
                          </Text>
                        </Row>
                        <Row className="items-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] ml-[4px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[35%]">
                          <Img
                            src="images/img_rectangle5614.png"
                            className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                            alt="Ellipse2696"
                          />
                          <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[74%]">
                            <Text className="font-extrabold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                              Taylor Wilson
                            </Text>
                            <Text className="font-semibold lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                              Product Manager - Static Mania
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                      <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-end xl:my-[10px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[9px] lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] rounded-radius20 w-[100%]">
                        <Text className="font-semibold leading-[165.00%] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_600 w-[89%]">
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                        <Row className="ml-[2px] mr-[auto] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[38%]">
                          <Img
                            src="images/img_vector_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] w-[5%]"
                            alt="Vector Fourteen"
                          />
                          <Img
                            src="images/img_vector_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[5%]"
                            alt="Vector One Two"
                          />
                          <Img
                            src="images/img_vector_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[5%]"
                            alt="Vector Two Two"
                          />
                          <Img
                            src="images/img_vector_gray_900_18X19.svg"
                            className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[5%]"
                            alt="Vector Three Two"
                          />
                          <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
                            4.5 review
                          </Text>
                          <Text className="font-semibold lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] my-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_600 tracking-ls1 w-[auto]">
                            02 June 2022
                          </Text>
                        </Row>
                        <Row className="items-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] ml-[4px] mr-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[35%]">
                          <Img
                            src="images/img_rectangle5614.png"
                            className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                            alt="Ellipse2697"
                          />
                          <Column className="lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[74%]">
                            <Text className="font-extrabold lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
                              Taylor Wilson
                            </Text>
                            <Text className="font-semibold lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                              Product Manager - Static Mania
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </List>
                    <SelectBox
                      className="font-semibold lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[12%]"
                      placeholderClassName="text-gray_900"
                      name="ButtonMedium"
                      placeholder="See more"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_gray_900.svg"
                          className="lg:w-[7px] lg:h-[4px] lg:mr-[16px] xl:w-[8px] xl:h-[5px] xl:mr-[18px] 2xl:w-[10px] 2xl:h-[6px] 2xl:mr-[21px] 3xl:w-[12px] 3xl:h-[7px] 3xl:mr-[25px]"
                          alt="arrow_down"
                        />
                      }
                      size="sm"
                      variant="OutlineGray600"
                    ></SelectBox>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Row className="absolute inset-x-[0] mx-[auto] top-[5%] w-[80%]">
              <Img
                src="images/img_rectangle5599.png"
                className="lg:h-[117px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] rounded-radius10 lg:w-[116px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"
                alt="Rectangle5599"
              />
              <Column className="lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] pr-[1px] py-[1px] w-[72%]">
                <Row className="items-end w-[52%]">
                  <Text className="font-bold mb-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Img
                    src="images/img_vector_gray_900.svg"
                    className="lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] lg:ml-[64px] xl:ml-[73px] 2xl:ml-[83px] 3xl:ml-[99px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[20px]"
                    alt="Vector Fifteen"
                  />
                  <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    (302) 555-0107
                  </Text>
                </Row>
                <Row className="mb-[3px] ml-[1px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[61%]">
                  <Img
                    src="images/img_vector.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[3%]"
                    alt="Vector Sixteen"
                  />
                  <Img
                    src="images/img_vector.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[3%]"
                    alt="Vector Seventeen"
                  />
                  <Img
                    src="images/img_vector.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[3%]"
                    alt="Vector Eighteen"
                  />
                  <Img
                    src="images/img_vector.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[3%]"
                    alt="Vector Nineteen"
                  />
                  <Img
                    src="images/img_vector_gray_600.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[3%]"
                    alt="Vector Twenty"
                  />
                  <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[4px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    4.5 review
                  </Text>
                  <Img
                    src="images/img_mail_16X18.svg"
                    className="lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[103px] lg:ml-[66px] xl:ml-[76px] 2xl:ml-[86px] w-[4%]"
                    alt="mail One"
                  />
                  <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_900 w-[auto]">
                    staticmania@gmail.com
                  </Text>
                </Row>
              </Column>
              <Button className="font-semibold lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[53px] xl:mt-[61px] 2xl:mt-[69px] 3xl:mt-[82px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]">
                Contact
              </Button>
            </Row>
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
                    src="images/img_socialmedia_3.svg"
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

export default AgentProfilePage;
