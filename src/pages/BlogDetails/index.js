import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Line, List } from "components";

const BlogDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate5() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }
  function handleNavigate6() {
    //TODO: You had integrated navigation action, since you've not selected the target page,
    // you will have to update navigation code manually.
    navigate("");
  }

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
          <Text className="font-extrabold leading-[140.00%] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[39%]">
            10 Delightful Dining Room Decor Trends for Spring
          </Text>
          <Img
            src="images/img_rectangle5618.png"
            className="lg:h-[428px] xl:h-[490px] 2xl:h-[551px] 3xl:h-[661px] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] rounded-radius10 w-[78%]"
            alt="Rectangle5618"
          />
          <Row className="2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[85%]">
            <Text className="font-normal leading-[180.00%] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[83%]">
              What a time we are living in! A lot of things are coming back,
              bringing back nostalgia. Wondering why I am talking about
              nostalgia and all? Especially when it is supposed to be an article
              on websites! Well, because some old famous website technology is
              coming back too. Yes, I am talking about static websites.
              <br />
              <br />
              Long ago, almost all websites were used to be static sites during
              the early days of the internet. Then dynamic sites came and blew
              the space. A lot of websites shifted to it. Obviously dynamic
              sites have their advantages. But static sites are making a
              comeback. And it’s coming stronger than before. In this article,
              you will cover the basics of static websites like what is a static
              website, what are the advantages, and when you should use a static
              website. Let’s kick things off.
            </Text>
            <Column className="lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] w-[10%]">
              <Img
                src="images/img_facebook.svg"
                className="common-pointer lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                onClick={handleNavigate5}
                alt="facebook"
              />
              <Row className="items-center justify-evenly lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] w-[100%]">
                <Img
                  src="images/img_volume.svg"
                  className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                  alt="volume"
                />
                <Column
                  className="bg-cover bg-repeat items-end lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] w-[71%]"
                  style={{ backgroundImage: "url('images/img_share.svg')" }}
                >
                  <Text className="font-semibold mr-[2px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                    Share this
                  </Text>
                </Column>
              </Row>
              <Img
                src="images/img_twitter.svg"
                className="common-pointer lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                onClick={handleNavigate6}
                alt="twitter"
              />
              <Img
                src="images/img_reddit.svg"
                className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                alt="reddit"
              />
            </Column>
          </Row>
          <Text className="font-extrabold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[73px] 3xl:mt-[87px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
            Blockquotes
          </Text>
          <Text className="font-normal 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
            {
              "Blockquotes can be nested. Add a >> in front of the paragraph you want to nest."
            }
          </Text>
          <Row className="bg-white_A700 border border-bluegray_100 border-solid 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] 3xl:pr-[103px] lg:pr-[66px] xl:pr-[76px] 2xl:pr-[86px] rounded-radius10 w-[60%]">
            <Line className="bg-bluegray_100 lg:h-[237px] xl:h-[271px] 2xl:h-[305px] 3xl:h-[366px] w-[6px]" />
            <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] w-[96%]">
              <Text className="font-semibold lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
                Performance: Faster Loading Speed
              </Text>
              <Column className="items-center lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[97%]">
                <Row className="w-[100%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal leading-[180.00%] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[97%]">
                    Static websites are way faster than dynamic ones. As they
                    don’t have a back-end system, there is no time loss due to
                    database connection. Instead, the lightweight, pre-rendered
                    HTML files load incredibly fast.
                  </Text>
                </Row>
                <Row className="lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[96%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal leading-[180.00%] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[97%]">
                    But why fast loading is important? According to Neil Patel,
                    47% of people on the internet expect a web page to load in
                    less than 2 seconds.
                  </Text>
                </Row>
              </Column>
            </Column>
          </Row>
          <Column className="bg-white_A700 border border-bluegray_100 border-solid 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:p-[35px] xl:p-[40px] 2xl:p-[46px] 3xl:p-[55px] rounded-radius10 w-[71%]">
            <Text className="font-semibold ml-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
              Performance: Faster Loading Speed
            </Text>
            <Row className="items-center ml-[4px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[80%]">
              <Line className="bg-bluegray_100 lg:h-[156px] xl:h-[178px] 2xl:h-[201px] 3xl:h-[241px] w-[4px]" />
              <Column className="items-center lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] w-[97%]">
                <Row className="w-[100%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal leading-[180.00%] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[97%]">
                    Static websites are way faster than dynamic ones. As they
                    don’t have a back-end system, there is no time loss due to
                    database connection. Instead, the lightweight, pre-rendered
                    HTML files load incredibly fast.
                  </Text>
                </Row>
                <Row className="lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[96%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal leading-[180.00%] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[97%]">
                    But why fast loading is important? According to Neil Patel,
                    47% of people on the internet expect a web page to load in
                    less than 2 seconds.
                  </Text>
                </Row>
              </Column>
            </Row>
            <Text className="font-semibold ml-[4px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-gray_900 tracking-ls1 w-[auto]">
              Flexibility: More Freedom to Develop Websites
            </Text>
            <Row className="items-end ml-[4px] 2xl:my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] w-[80%]">
              <Line className="bg-bluegray_100 lg:h-[149px] xl:h-[170px] 2xl:h-[192px] 3xl:h-[230px] w-[4px]" />
              <Column className="justify-end mb-[1px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] pr-[4px] py-[4px] w-[97%]">
                <Row className="mr-[auto] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[92%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal leading-[180.00%] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[97%]">
                    Dynamic site CMS like WordPress has a greater dependency.
                    They require an operating system like Linux
                  </Text>
                </Row>
                <Row className="mr-[auto] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[92%]">
                  <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal leading-[180.00%] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[97%]">
                    Unlike dynamic websites, you don’t have to depend on plugins
                    to add functionalities to your static site. Instead, you can
                    create or include features directly into files. Or, you can
                    insert widgets using a snippet.
                  </Text>
                </Row>
              </Column>
            </Row>
          </Column>
          <Text className="font-extrabold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] 3xl:mt-[106px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
            Images
          </Text>
          <Text className="font-normal leading-[180.00%] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[69%]">
            Being a fast loading and more secure website, you can choose a
            static website for beginner to medium level workload. Hopefully, you
            have got the answer to what is a static website and why should you
            use it. Decide carefully does static sites are enough for your need.
          </Text>
          <Img
            src="images/img_rectangle5619.png"
            className="lg:h-[414px] xl:h-[474px] 2xl:h-[533px] 3xl:h-[639px] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] rounded-radius10 w-[71%]"
            alt="Rectangle5619"
          />
          <Text className="font-extrabold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
            Lists
          </Text>
          <Text className="font-normal leading-[180.00%] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[69%]">
            Being a fast loading and more secure website, you can choose a
            static website for beginner to medium level workload. Hopefully, you
            have got the answer to what is a static website and why should you
            use it. Decide carefully does static sites are enough for your need.
          </Text>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[29px] xl:mt-[33px] 2xl:mt-[38px] 3xl:mt-[45px] w-[23%]">
            <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Performance: Faster Loading Speed
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[21%]">
            <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Less Server-side Dependencies
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[30%]">
            <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Flexibility: More Freedom to Develop Websites
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[21%]">
            <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Security: A More Secure Website
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[30%]">
            <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Scalability: Capability to Handle Massive Traffic
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[31%]">
            <div className="bg-gray_600 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] mt-[3px] rounded-radius50 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
            <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Hosting and Pricing: Saves Your Budget For Good
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[55px] xl:mt-[63px] 2xl:mt-[71px] 3xl:mt-[85px] w-[25%]">
            <Text className="font-bold mb-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
              01.
            </Text>
            <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Performance: Faster Loading Speed
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[22%]">
            <Text className="font-bold mb-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
              02.
            </Text>
            <Text className="font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Less Server-side Dependencies
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[31%]">
            <Text className="font-bold mb-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
              03.
            </Text>
            <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Flexibility: More Freedom to Develop Websites
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[23%]">
            <Text className="font-bold mb-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
              04.
            </Text>
            <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Security: A More Secure Website
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[32%]">
            <Text className="font-bold mb-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
              05.
            </Text>
            <Text className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Scalability: Capability to Handle Massive Traffic
            </Text>
          </Row>
          <Row className="xl:ml-[108px] 2xl:ml-[122px] 3xl:ml-[146px] lg:ml-[94px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[32%]">
            <Text className="font-bold mb-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
              06.
            </Text>
            <Text className="font-semibold 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] mt-[2px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 underline w-[auto]">
              Hosting and Pricing: Saves Your Budget For Good
            </Text>
          </Row>
          <Text className="font-extrabold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
            Code
          </Text>
          <Text className="font-normal 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
            Being a fast loading and more secure website, you can choose a
            static website.
          </Text>
          <Row className="bg-white_A700 border border-bluegray_100 border-solid justify-end 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] lg:p-[15px] xl:p-[17px] 2xl:p-[20px] 3xl:p-[24px] rounded-radius10 w-[60%]">
            <Text className="font-normal lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_100 w-[auto]">
              1 2 3 4 5 6 7 8 9 10 11 12
            </Text>
            <Column className="lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[81%]">
              <Column className="w-[49%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  {"<html>"}
                </Text>
                <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  {"<body>"}
                </Text>
                <Text className="font-normal lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  {"<h2>JavaScript While Loop</h2>"}
                </Text>
              </Column>
              <Column className="lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] w-[43%]">
                <Text className="font-normal not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  {"<script>"}
                </Text>
                <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  {`let text = ""; let i = 0;`}
                  <br />
                  {" while (i < 10) {"}
                  <br />
                  {`  text += "<br>The number is " + i;   i++;`}
                </Text>
                <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                  {"<script>"}
                </Text>
              </Column>
              <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[14px] 3xl:mt-[16px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                {"<body>"}
              </Text>
              <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                {"<html>"}
              </Text>
            </Column>
            <Button
              className="2xl:ml-[8px] 2xl:mt-[10px] 3xl:ml-[9px] 3xl:mt-[12px] flex items-center justify-center lg:ml-[6px] lg:mt-[7px] text-center w-[12%] xl:ml-[7px] xl:mt-[8px]"
              leftIcon={
                <Img
                  src="images/img_camera_11X11.svg"
                  className="text-center lg:w-[8px] lg:h-[9px] lg:mr-[4px] xl:w-[9px] xl:h-[10px] xl:mr-[5px] 2xl:w-[11px] 2xl:h-[12px] 2xl:mr-[6px] 3xl:w-[13px] 3xl:h-[14px] 3xl:mr-[7px]"
                  alt="camera"
                />
              }
              size="md"
              variant="OutlineGray600"
            >
              <div className="bg-transparent font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                Copy
              </div>
            </Button>
          </Row>
          <Text className="font-extrabold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
            Link
          </Text>
          <Text className="font-normal leading-[180.00%] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[69%]">
            <span className="text-gray_600 font-manrope">
              Yes, a static website may have all its benefits, but is it
              suitable for you? That’s a big question. It depends on why you are
              going to build a website, what purpose it will{" "}
            </span>
            <span className="text-gray_900 font-manrope font-semibold underline">
              serve
            </span>
            <span className="text-gray_600 font-manrope">
              . That’s why you must when you should use a static website.
              <br />
              <br />
              The followings are the common applications where using the static
              website is the best choice. -{" "}
            </span>
            <span className="text-gray_900 font-manrope font-semibold underline">
              Blog sites
            </span>
            <span className="text-gray_600 font-manrope">
              - - Small business websites - Websites Under-Development -
              Personal Portfolio sites - Websites that contain basic information
            </span>
          </Text>
          <Text className="font-extrabold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] 3xl:mt-[108px] lg:mt-[70px] xl:mt-[80px] 2xl:mt-[90px] lg:text-[21px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[33px] text-gray_900 tracking-ls1 w-[auto]">
            Tables
          </Text>
          <Text className="font-normal leading-[180.00%] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[48%]">
            The followings are the common applications where using the static
            website is the best choice. - Blog sites- - Small business websites.
          </Text>
          <Column className="bg-white_A700 border border-bluegray_100 border-solid justify-center 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:p-[31px] xl:p-[35px] 2xl:p-[40px] 3xl:p-[48px] rounded-radius10 w-[64%]">
            <Row className="items-center lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[91%]">
              <Text className="font-semibold mb-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                Full Name
              </Text>
              <Text className="font-semibold mb-[1px] lg:ml-[111px] xl:ml-[127px] 2xl:ml-[143px] 3xl:ml-[171px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                Title
              </Text>
              <Text className="font-semibold mb-[1px] lg:ml-[133px] xl:ml-[153px] 2xl:ml-[172px] 3xl:ml-[206px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                Email Address
              </Text>
              <Text className="font-semibold lg:ml-[135px] xl:ml-[154px] 2xl:ml-[174px] 3xl:ml-[208px] mt-[1px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-gray_900 w-[auto]">
                Phone Number
              </Text>
            </Row>
            <List
              className="gap-[0] 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] min-h-[auto] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[96%]"
              orientation="vertical"
            >
              <Row className="justify-between lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Zakir Hossen
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  UI, UX Designer
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  dezakir.uix@gmail.com
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  +88 222 5554 444
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="justify-between lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Zakir Hossen
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  UI, UX Designer
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  dezakir.uix@gmail.com
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  +88 222 5554 444
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="justify-between lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Zakir Hossen
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  UI, UX Designer
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  dezakir.uix@gmail.com
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  +88 222 5554 444
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="justify-between lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Zakir Hossen
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  UI, UX Designer
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  dezakir.uix@gmail.com
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  +88 222 5554 444
                </Text>
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="justify-between lg:my-[16px] xl:my-[18px] 2xl:my-[20px] 3xl:my-[25px] w-[100%]">
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  Zakir Hossen
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  UI, UX Designer
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  dezakir.uix@gmail.com
                </Text>
                <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                  +88 222 5554 444
                </Text>
              </Row>
            </List>
          </Column>
          <Text className="font-bold 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] 2xl:mt-[107px] 3xl:mt-[128px] lg:mt-[83px] xl:mt-[95px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
            Write by
          </Text>
          <Row className="2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[34%]">
            <Img
              src="images/img_profilepicture.png"
              className="2xl:h-[101px] 3xl:h-[121px] lg:h-[78px] xl:h-[89px] rounded-radius50 2xl:w-[100px] 3xl:w-[120px] lg:w-[77px] xl:w-[88px]"
              alt="profilepicture"
            />
            <Column className="lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[37%]">
              <Text className="font-bold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
                Kristin Watson
              </Text>
              <Text className="font-semibold 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                Co-founder and CDO
              </Text>
            </Column>
            <Line className="bg-bluegray_100 lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[1px]" />
            <div className="bg-bluegray_100 3xl:h-[10px] lg:h-[7px] xl:h-[8px] 2xl:h-[9px] lg:ml-[30px] xl:ml-[34px] 2xl:ml-[39px] 3xl:ml-[46px] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] rounded-radius50 lg:w-[6px] xl:w-[7px] 2xl:w-[8px] 3xl:w-[9px]"></div>
            <Text className="font-semibold lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
              July 20, 2022
            </Text>
          </Row>
          <Text className="font-extrabold 2xl:ml-[105px] 3xl:ml-[126px] lg:ml-[81px] xl:ml-[93px] 2xl:mt-[108px] 3xl:mt-[129px] lg:mt-[84px] xl:mt-[96px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-gray_900 tracking-ls1 w-[auto]">
            Recent News
          </Text>
          <List
            className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 lg:mb-[125px] xl:mb-[143px] 2xl:mb-[161px] 3xl:mb-[193px] min-h-[auto] 2xl:ml-[102px] 3xl:ml-[122px] lg:ml-[79px] xl:ml-[90px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[45px] 3xl:mt-[54px] w-[85%]"
            orientation="horizontal"
          >
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
          </List>
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
                  src="images/img_socialmedia_11.svg"
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

export default BlogDetailsPage;
