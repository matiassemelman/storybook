import Dropdown from './Dropdown'

export default {
  title: 'Dropdown',
  component: Dropdown,
 
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    text: "Change me"
};

