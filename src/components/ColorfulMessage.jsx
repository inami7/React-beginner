import React, { useState } from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props; //分割
  //css
  const contentStyle = {
    color: color, //color,でも可(省略)
    fontSize: "18px" //font-sizeじゃない
  };

  return <p style={contentStyle}>{children}</p>;
  //return <p style={contentStyle}>{props.message}</p>;でも可
};
