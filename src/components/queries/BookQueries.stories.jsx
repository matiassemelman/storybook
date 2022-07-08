import BookQueries from "./BookQueries";
export default {
  title: 'BookQueries',
  component: BookQueries,
 
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BookQueries {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    text: "Change me"
};

