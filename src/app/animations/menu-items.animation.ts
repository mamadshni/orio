import {
  trigger,
  transition,
  style,
  query,
  stagger,
  animate
} from '@angular/animations';

export function menuItemsAnimation() {
  return trigger('menuListAnimation', [
    transition(':enter', [
      query(
        '[listItems]',
        style({ opacity: 0, transform: 'translateY(70px)' })
      ),
      query(
        '[listItems]',
        stagger('100ms', [
          animate(
            '0.3s 300ms cubic-bezier(.22,.68,.43,1.01)',
            style({ opacity: 1, transform: 'translateY(0px)' })
          )
        ])
      )
    ]),
    transition(':leave', [
      query('[listItems]', style({ opacity: 1 })),
      query(
        '[listItems]',
        stagger('50ms', [
          animate(
            '0.25s 50ms cubic-bezier(.56,.07,.78,.57)',
            style({ opacity: 0, transform: 'translateY(-80px)' })
          )
        ])
      )
    ])
  ]);
}
