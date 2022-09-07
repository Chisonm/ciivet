import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Column className="bg-gray_52 font-manrope items-center justify-end mx-[auto] lg:pt-[13px] xl:pt-[15px] 2xl:pt-[17px] 3xl:pt-[20px] w-[100%]">
        <Column className="w-[83%]">
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
          <Text className="font-extrabold ml-[3px] 2xl:mt-[103px] 3xl:mt-[123px] lg:mt-[80px] xl:mt-[91px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] 3xl:text-[55px] text-gray_900 tracking-ls1 w-[auto]">
            Privacy Policy
          </Text>
          <Text className="font-normal lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
            Last updated: January 2020
          </Text>
          <Text className="font-normal leading-[180.00%] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[81%]">
            Hi, welcome to our privacy policy which applies to our customers.
            This policy sets out how if you are a StaticMania.com user or
            visitor to our site, we treat your personal information.
            <br />
            <br />
            Last updated on March 01, 2020.
          </Text>
          <Text className="font-bold lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
            1. The type of personal information we collect
          </Text>
          <Text className="font-normal leading-[180.00%] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[81%]">
            Hi, welcome to our privacy policy which applies to our customers.
            This policy sets out how if you are a StaticMania.com user or
            visitor to our site, we treat your personal information.
            <br />
            <br />
            Last updated on March 01, 2020.
          </Text>
          <Text className="font-bold lg:mt-[40px] xl:mt-[46px] 2xl:mt-[52px] 3xl:mt-[62px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
            2. Cookies and web analytics
          </Text>
          <Text className="font-normal leading-[180.00%] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[82%]">
            We use cookies to recognize and monitor users, their on-site
            behavior, and their preferences for accessing their website. These
            cookies include the IP and time of visits by visitors. Visitors to
            StaticMania that do not want cookies put on their browsers should
            configure their browsers to reject cookies before using the
            StaticMania website.
          </Text>
          <Text className="font-bold lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
            3. When do we need to update this policy?
          </Text>
          <Text className="font-normal leading-[180.00%] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[80%]">
            We will need to update this policy from time to time to ensure that
            it remains up-to-date with the latest legal requirements and any
            improvements to our privacy management practices.
            <br />
            When we change the policy, we will make sure that we inform you, if
            any, of such changes. A copy of this policy’s latest version will
            always be available at this page.
          </Text>
          <Text className="font-bold lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
            4. Registration
          </Text>
          <Text className="font-normal leading-[180.00%] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[87%]">
            To use our Service you will need to create an account and complete
            the registration process at https://staticmania.com/signup
            (Registration). 
            <br />
            At Registration, you will select logon credentials for each user of
            the Service, which may be an employee of the Subscriber or other
            individuals authorised by the Subscriber to use the Service
            (Authorised User). Logon details should only be used by the
            Authorised User to whom they are assigned and cannot be shared with
            any third parties (including another Authorised User). You are
            solely responsible for the confidentiality and use of all logon
            details for your account and those assigned to Authorised Users, as
            well as for any use or misuse of the Service using Subscriber’s or
            any Authorised Users’ logon details. You shall notify us immediately
            if you become aware of any loss, theft or unauthorised use of any
            logon details, and we reserve the right to delete or change them at
            any time and for any reason.
            <br /> <br />
            You warrant and represent to us that the details you provide to us
            during Registration are accurate, complete and up-to-date. We will
            hold and treat such information in accordance with the terms of our
            Privacy Policy.
            <br />
            <br />
            If you or your Participants use a mobile telephone to access our
            Service, we may need to send SMS messages. You may opt out of this
            service by replying STOP to the SMS message or by contacting us at
            support@staticmania.com.
          </Text>
          <Text className="font-bold lg:mt-[39px] xl:mt-[45px] 2xl:mt-[51px] 3xl:mt-[61px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 tracking-ls1 w-[auto]">
            5. Marketing Choices regarding your personal data
          </Text>
          <Text className="font-normal leading-[180.00%] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_600 w-[80%]">
            Where we have your permission to do so (e.g. if you subscribed to
            one of our email lists or indicated that you are interested in
            receiving deals or information from us), we will send you email
            marketing messages about products and services which we feel may be
            of interest to you. You can ‘opt-out’ of such communications if you
            would prefer not to receive them in the future by using the
            “unsubscribe” facility provided in the communication itself.
          </Text>
        </Column>
        <footer className="bg-white_A700 3xl:mt-[106px] lg:mt-[69px] xl:mt-[79px] 2xl:mt-[89px] w-[100%]">
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
                  src="images/img_socialmedia_2.svg"
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

export default PrivacyPolicyPage;
