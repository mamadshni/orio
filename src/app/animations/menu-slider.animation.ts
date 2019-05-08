import {
  trigger,
  transition,
  query,
  style,
  animate,
  state
} from '@angular/animations';

export function menuSliderAnimation() {
  return trigger('menuSliderAnimation', [
    state('open', style({ opacity: 0, transform: 'translateY(200px)' })),
    state('void', style({ opacity: 0, transform: 'translateY(200px)' })),
    state('close', style({ opacity: 1, transform: 'translateY(0px)' })),

    transition('* => close', [
      animate('0.4s 450ms cubic-bezier(.22,.68,.43,1.01)')
    ]),

    transition('close => open', [
      animate(
        '0.3s 100ms cubic-bezier(.56,.07,.78,.57)',
        style({ opacity: 0, transform: 'translateY(-150px)' })
      )``
    ])
  ]);
}
