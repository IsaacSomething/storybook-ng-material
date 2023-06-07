import { Component } from '@angular/core';

@Component({
  selector: 'storybook-docs',
  standalone: true,
  imports: [],
  template: `
    <div class="padding">
      <p>
        This is a test story to try out documentation techniques in storybook.
        Click the "docs" tab above and check the "Overview" mdx file
      </p>
    </div>
  `,
})
export default class Docs {}
