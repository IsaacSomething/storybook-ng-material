import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SBHeaderModule } from '../../shared/sb-header';

@Component({
  selector: 'app-typography',
  standalone: true,
  imports: [CommonModule, SBHeaderModule],
  styles: [],
  template: `
    <sb-header title="Typography" />

    <div class="mx-4">
      <h1 class="text-{{ color }}">[h1] abcdefghijklmnopqrstuvwxyz</h1>
      <h2 class="text-{{ color }}">[h2] abcdefghijklmnopqrstuvwxyz</h2>
      <h3 class="text-{{ color }}">[h3] abcdefghijklmnopqrstuvwxyz</h3>
      <h4 class="text-{{ color }}">[h4] abcdefghijklmnopqrstuvwxyz</h4>
      <h5 class="text-{{ color }}">[h5] abcdefghijklmnopqrstuvwxyz</h5>
      <h6 class="text-{{ color }}">[h6] abcdefghijklmnopqrstuvwxyz</h6>

      <p class="text-{{ color }}">
        [p] abcdefghijklmnopqrstuvwxyz Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, aspernatur excepturi nostrum
        pariatur quam natus dicta exercitationem vel consectetur, culpa inventore adipisci numquam eum deserunt ipsa iure ad, corporis
        explicabo?
      </p>

      <label class="text-{{ color }}">[label] abcdefghijklmnopqrstuvwxyz</label>
      <br />
      <small class="text-{{ color }}">[small] abcdefghijklmnopqrstuvwxyz</small>
    </div>
  `
})
export class TypographyModule {
  @Input() color!: ThemePalette | 'default';
}
