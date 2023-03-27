import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AButton from "./AButton";
import "!style-loader!css-loader!postcss-loader!./AButton.scss";

export default {
  title: "ReactComponentLibrary/Button",
  component: AButton,
} as ComponentMeta<typeof AButton>;

const Template: ComponentStory<typeof AButton> = (args) => (
  <AButton {...args} />
);

export const HelloWorld = Template.bind({});

HelloWorld.args = {
  label: "Hello World!",
  color: "orange",
  size: "medium",
  outline: false,
  disabled: false,
};
