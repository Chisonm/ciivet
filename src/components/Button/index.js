import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder10: "rounded-radius10",
  icbCircleBorder30: "rounded-radius30",
  icbRoundedBorder16: "rounded-radius16",
  icbCircleBorder40: "rounded-radius40",
};
const variants = {
  FillGray900: "bg-gray_900 text-white_A700",
  OutlineBluegray100: "border border-bluegray_100 border-solid text-gray_900",
  OutlineGray600: "border border-gray_600 border-solid text-gray_900",
  OutlineGray51: "border border-gray_51 border-solid text-gray_900",
  OutlineBluegray1001_2:
    "bg-white_A700 border border-bluegray_100 border-solid text-gray_700",
  OutlineBluegray101: "border border-bluegray_101 border-solid text-gray_900",
  FillWhiteA700: "bg-white_A700 text-gray_600",
  FillGray300: "bg-gray_300 text-gray_900",
  FillWhiteA700ab: "bg-white_A700_ab text-gray_900",
  FillGray700: "bg-gray_700 text-white_A700",
  OutlineGray700: "border border-gray_700 border-solid text-gray_900",
  icbOutlineBluegray30033: "bg-white_A700 shadow-bs",
  icbFillGray900: "bg-gray_900",
  icbFillWhiteA700ab: "bg-white_A700_ab",
};
const sizes = {
  sm: "3xl:p-[10px] lg:p-[7px] xl:p-[8px] p-[9px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  lg: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  xl: "lg:p-[14px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  smIcn: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  mdIcn: "lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px]",
  lgIcn: "lg:p-[24px] xl:p-[27px] p-[31px] 3xl:p-[37px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "icbCircleBorder30",
    "icbRoundedBorder16",
    "icbCircleBorder40",
  ]),
  variant: PropTypes.oneOf([
    "FillGray900",
    "OutlineBluegray100",
    "OutlineGray600",
    "OutlineGray51",
    "OutlineBluegray1001_2",
    "OutlineBluegray101",
    "FillWhiteA700",
    "FillGray300",
    "FillWhiteA700ab",
    "FillGray700",
    "OutlineGray700",
    "icbOutlineBluegray30033",
    "icbFillGray900",
    "icbFillWhiteA700ab",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "FillGray900",
  size: "lg",
};

export { Button };
