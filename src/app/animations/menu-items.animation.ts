import {
  trigger,
  transition,
  style,
  query,
  stagger,
  animate,
  keyframes
} from '@angular/animations';

export function menuItemAnimation() {
  return trigger('menuListAnimation', [
    transition(':enter', [
      query('li', style({ opacity: 0 })),
      query(
        'li',
        stagger('150ms', [
          animate(
            '0.4s 500ms ease-out',
            keyframes([
              style({ opacity: 0, transform: 'translateY(75px)', offset: 0 }),
              style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
            ])
          )
        ])
      )
    ]),
    transition(':leave', [
      query('li', style({ opacity: 1 })),
      query(
        'li',
        stagger('100ms', [
          animate(
            '0.25s ease-out',
            keyframes([
              style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
              style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 })
            ])
          )
        ])
      )
    ])
  ]);
}
