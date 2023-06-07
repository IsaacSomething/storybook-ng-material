import { Story, Meta } from '@storybook/angular';
import Docs from './docs.component';

export default {
  title: 'Storybook/Docs',
  component: Docs,
} as Meta;

const Template: Story<Docs> = (args: Docs) => ({
  props: args,
});

export const Default = Template.bind({});
Default.parameters = {
  docs: {
    source: {
      code: `
        /** 
         * Typescript code example using
         *  
         *  Default.parameters = {
         *   docs: {
         *     source: {
         *       code: '[Add code here]',
         *       language: 'typescript',
         *       format: false,
         *     },
         *   },
         *  }; 
         **/
      
        open() {
          this.snackBar.open('Snackbar message', 'Okay', { duration: 1000 });
        }`,
      language: 'typescript',
      format: false,
    },
  },
};
