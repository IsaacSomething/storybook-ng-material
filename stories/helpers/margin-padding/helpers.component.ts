import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'storybook-helpers',
  standalone: true,
  imports: [],
  providers: [],
  styles: [
    `
      .container {
        display: inline;
      }
      .box-outer,
      .box-outer-2 {
        border: 2px dashed #f3f3f3;
        height: 230px;
        width: 230px;
        display: block;
        > div {
          background: #f3f3f3;
          height: 50px;
          width: 50px;
          display: block;
        }
      }

      .box-outer-2 {
        margin-top: 16px;
        > div {
          float: right;
        }
      }
    `,
  ],
  template: `
    <div class="padding">
      <div class="container">
        <div class="box-outer">
          <div
            class="padding-{{ padding }} padding-left-{{
              paddingLeft
            }} padding-right-{{ paddingRight }} margin-{{
              margin
            }} margin-left-{{ marginLeft }} margin-right-{{ marginRight }}"
          ></div>
        </div>

        <div class="box-outer-2">
          <div
            class="padding-{{ padding }} padding-left-{{
              paddingLeft
            }} padding-right-{{ paddingRight }} margin-{{
              margin
            }} margin-left-{{ marginLeft }} margin-right-{{ marginRight }}"
          ></div>
        </div>
      </div>
      <br />

      <code>.padding-{{ padding }}</code>
      <br />
      <code>.padding-left-{{ paddingLeft }}</code>
      <br />
      <code>.padding-right-{{ paddingRight }}</code>
      <br />
      <code>.margin-{{ margin }}</code>
      <br />
      <code>.margin-left-{{ marginLeft }}</code>
      <br />
      <code>.margin-right-{{ marginRight }}</code>
      <br />
    </div>
  `,
})
export default class Helpers implements OnChanges {
  @Input() padding: number = 0;
  @Input() margin: number = 0;
  @Input() paddingRight: number = 0;
  @Input() paddingLeft: number = 0;
  @Input() marginRight: number = 0;
  @Input() marginLeft: number = 0;
  code!: string;

  ngOnChanges() {
    this.code = `<div class="padding-${this.padding} padding-left-${this.paddingLeft} padding-right-${this.paddingRight} margin-${this.margin} margin-left-${this.marginLeft} margin-right-${this.marginRight}"> </div>`;
  }
}
