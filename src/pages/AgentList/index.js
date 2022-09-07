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

const AgentListPage = () => {
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
        <Column className="items-center lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[100%]">
          <Column className="bg-gray_52 lg:p-[56px] xl:p-[64px] 2xl:p-[72px] 3xl:p-[86px] w-[100%]">
            <Text className="font-extrabold lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
              Some Nearby Good Agents
            </Text>
            <Row className="items-center lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[55%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-semibold p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-gray_600 text-gray_600 w-[100%]"
                wrapClassName="flex w-[58%]"
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
                className="font-bold lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[19%]"
                placeholderClassName="text-gray_600"
                name="DropdownLarg"
                placeholder="Review"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_arrowdown_gray_600.svg"
                    className="lg:w-[11px] lg:h-[6px] lg:mr-[15px] xl:w-[13px] xl:h-[7px] xl:mr-[17px] 2xl:w-[15px] 2xl:h-[8px] 2xl:mr-[20px] 3xl:w-[18px] 3xl:h-[9px] 3xl:mr-[24px]"
                    alt="arrow_down"
                  />
                }
              ></SelectBox>
              <Button
                className="2xl:ml-[16px] 3xl:ml-[19px] flex items-center justify-center lg:ml-[12px] text-center w-[18%] xl:ml-[14px]"
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
            <Grid className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-4 lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[93%]">
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_282X282.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 One"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector One"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One One"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two One"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three One"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four One"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_1.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Two"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Two"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Two"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Two"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Two"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Two"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_2.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Three"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Three"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Three"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Three"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Three"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Three"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_3.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Four"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Four"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Four"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Four"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Four"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Four"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_4.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Five"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Five"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Five"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Five"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Five"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Five"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_5.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Six"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Six"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Six"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Six"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Six"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Six"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_6.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Seven"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Seven"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Seven"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Seven"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Seven"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Seven"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_7.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Eight"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Eight"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Eight"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Eight"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Eight"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Eight"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_8.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Nine"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Nine"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Nine"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Nine"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Nine"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Nine"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_9.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Ten"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Ten"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Ten"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Ten"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Ten"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Ten"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_100 border-solid lg:pb-[15px] xl:pb-[17px] 2xl:pb-[20px] 3xl:pb-[24px] rounded-radius10 w-[100%]">
                <Img
                  src="images/img_rectangle5614_10.png"
                  className="lg:h-[220px] xl:h-[251px] 2xl:h-[283px] 3xl:h-[339px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:w-[219px] xl:w-[250px] 2xl:w-[282px] 3xl:w-[338px]"
                  alt="Rectangle5614 Eleven"
                />
                <Column className="lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[66%]">
                  <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                    Bruno Fernandes
                  </Text>
                  <Row className="justify-between 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] ml-[1px] mt-[1px] w-[7%]"
                      alt="Vector Eleven"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector One Eleven"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Two Eleven"
                    />
                    <Img
                      src="images/img_vector.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Three Eleven"
                    />
                    <Img
                      src="images/img_vector_gray_600.svg"
                      className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] mt-[1px] w-[7%]"
                      alt="Vector Four Eleven"
                    />
                    <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                      4.5 review
                    </Text>
                  </Row>
                  <Button
                    className="font-semibold lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[74%]"
                    variant="OutlineBluegray100"
                  >
                    View Profile
                  </Button>
                </Column>
              </Column>
            </Grid>
            <Row className="items-center lg:mb-[36px] xl:mb-[41px] 2xl:mb-[47px] 3xl:mb-[56px] lg:ml-[36px] xl:ml-[41px] 2xl:ml-[47px] 3xl:ml-[56px] lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[92%]">
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
                variant="OutlineBluegray100"
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
                    59 Bervely Hill Ave, Brooklyn Town,  New York, NY 5630, CA,
                    US
                  </Text>
                  <Text className="font-manrope font-semibold lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
                    +056 686 56 56 98 info@staticmania.com
                  </Text>
                  <Img
                    src="images/img_socialmedia_30X198.svg"
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

export default AgentListPage;
