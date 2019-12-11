import {
    animate,
    query,
    style,
    transition,
    trigger,
    stagger,
    sequence, animateChild, group
} from '@angular/animations';


export const ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';

const STEPS_ALL: any[] = [
    query(':enter > *', style({opacity: 0}), {
        optional: true
    }),
    query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, style({opacity: 0}), {
        optional: true
    }),
    sequence([
        query(
            ':leave > *',
            [
                style({transform: 'translateY(0%)', opacity: 1}),
                animate(
                    '0.5s ease-in-out',
                    style({transform: 'translateY(-30%)', opacity: 0})
                )
            ],
            {optional: true}
        ),
        query(
            ':enter > *',
            [
                style({
                    transform: 'translateY(-30%)',
                    opacity: 0
                }),
                animate(
                    '0.4s ease-in-out',
                    style({transform: 'translateY(0%)', opacity: 1})
                )
            ],
            {optional: true}
        )
    ]),
    query(
        ':enter .' + ROUTE_ANIMATIONS_ELEMENTS,
        stagger(75, [
            style({transform: 'translateY(30%)', opacity: 0}),
            animate(
                '0.4s ease-out',
                style({transform: 'translateY(0%)', opacity: 1})
            )
        ]),
        {optional: true}
    )
];

export const routerAnimation = trigger('routerAnimation', [
    transition(isRouteAnimationsAll, STEPS_ALL)
]);

export const subirAnimationMenu = trigger('subirAnimationMenu', [
    transition('false => true', [
        style({transform: 'translateY(30%)', opacity: 0}),
        animate(
            '0.2s ease-out',
            style({ opacity: 0})
        ),
        animate(
            '0.4s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ]),
    transition(':leave', [
        style({opacity: 0}),
    ])
]);


export const subirAnimationEsp = trigger('subirAnimationEsp', [
    transition(':enter', [
        style({transform: 'translateY(30%)', opacity: 0}),
        animate(
            '0.5s ease-out',
            style({opacity: 0})
        ),
        animate(
            '0.4s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ])
]);


export const subirAnimation = trigger('subirAnimation', [
    transition(':enter', [
        style({transform: 'translateY(30%)', opacity: 0}),
        animate(
            '0.4s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ]),
    transition(':leave', [
        style({opacity: 0}),
    ])
]);


export const subirAnimationWait = trigger('subirAnimationWait', [
    transition(':enter', [
        style({transform: 'translateY(30%)', opacity: 0}),
        animate(
            '0.6s ease-out',
            style({opacity: 0})
        ),
        animate(
            '0.4s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ]),
    transition(':leave', [
        style({opacity: 0}),
    ])
]);

export const derAIzAnimation = trigger('derAIzAnimation', [
    transition(':enter', [
        style({transform: 'translateX(-20%)', opacity: 0}),
        animate(
            '0.5s ease-out',
            style({transform: 'translateX(5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(-1%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        )
    ]),
    transition(':leave', [
        style({opacity: 0}),
    ])
]);

export const derAIzAnimationWait = trigger('derAIzAnimationWait', [
    transition(':enter', [
        style({transform: 'translateX(-20%)', opacity: 0}),
        animate(
            '0.5s ease-out',
            style({opacity: 0})
        ),
        animate(
            '0.5s ease-out',
            style({transform: 'translateX(5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(-1%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        )
    ]),
    transition(':leave', [
        style({opacity: 0}),
    ])
]);


export const IzADerAnimation = trigger('IzADerAnimation', [
    transition(':enter', [
        style({transform: 'translateX(20%)', opacity: 0}),
        animate(
            '0.5s ease-out',
            style({transform: 'translateX(-5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(1%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        )
    ]),
    transition(':leave', [
        style({opacity: 0}),
    ])
]);


export const bajarAnimation = trigger('bajarAnimation', [
    transition(':enter', [
        style({transform: 'translateY(-30%)', opacity: 0}),
        animate(
            '0.5s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ]),
    transition(':leave', [
        style({opacity: 0}),
    ])
]);


export const bajarAnimationWait = trigger('bajarAnimationWait', [
    transition(':enter', [
        style({transform: 'translateY(-30%)', opacity: 0}),
        animate(
            '0.5s ease-out',
            style({opacity: 0})
        ),
        animate(
            '0.5s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ]),
    transition(':leave', [
        style({opacity: 0}),
    ])
]);

export const derAIzAderButAnimationWait = trigger('derAIzAderButAnimationWait', [
    transition(':enter', [
        style({transform: 'translateX(0%)', opacity: 0}),
        animate(
            '0.6s ease-out',
            style({opacity: 0})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(-10%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(10%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(-5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ])
]);


export const derAIzAderButAnimation = trigger('derAIzAderButAnimation', [
    transition(':enter', [
        style({transform: 'translateX(0%)', opacity: 0}),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(-10%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(10%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(-5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ])
]);



export const derAIzAderButAnimationError = trigger('derAIzAderButAnimationError', [
    transition('false => true', [
        style({transform: 'translateX(0%)', opacity: 0}),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(-10%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(10%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(-5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ])
]);


export const IzAderAIzButAnimationError = trigger('IzAderAIzButAnimationError', [
    transition('false => true', [
        style({transform: 'translateX(0%)', opacity: 0}),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(10%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(-10%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(-5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ])
]);



export const IzAderAIzButAnimation = trigger('IzAderAIzButAnimation', [
    transition(':enter', [
        style({transform: 'translateX(0%)', opacity: 0}),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(10%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(-10%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(-5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ])
]);



export const IzAderAIzButAnimationWait = trigger('IzAderAIzButAnimationWait', [
    transition(':enter', [
        style({transform: 'translateX(0%)', opacity: 0}),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(10%)', opacity: 1})
        ),
        animate(
            '0.2s ease-out',
            style({transform: 'translateX(-10%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(-5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ])
]);


export const TitDialogAnimation = trigger('TitDialogAnimation', [
    transition(':enter', [
        style({transform: 'translateX(0%)', opacity: 0}),
        animate(
            '0.3s ease-out',
            style({transform: 'translateX(5%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateX(-5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateX(0%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(5%)', opacity: 1})
        ),
        animate(
            '0.3s ease-out',
            style({transform: 'translateY(-5%)', opacity: 1})
        ),
        animate(
            '0.1s ease-out',
            style({transform: 'translateY(0%)', opacity: 1})
        )
    ])
]);

export const HijoSubBajEspAnimation = trigger('HijoSubBajEspAnimation', [
    transition(':enter', [
        query('@subirAnimation', stagger(75, [animateChild()])),
        query('@bajarAnimation', stagger(75, [animateChild()])),

    ])
]);


export const HijoSubBajIzqAnimation = trigger('HijoSubBajIzqAnimation', [
    transition(':enter', [
        group([
            query('@subirAnimation', animateChild()),
            query('@bajarAnimation', animateChild()),
            query('@derAIzAnimation', animateChild())
        ]),

    ])
]);
export const HijoBajIzqAnimationWait = trigger('HijoBajIzqAnimationWait', [
    transition(':enter', [
        group([
            query('@bajarAnimationWait', animateChild()),
            query('@derAIzAnimationWait', animateChild())
        ]),

    ])
]);

export const HijoBajIzqAnimation = trigger('HijoBajIzqAnimation', [
    transition(':enter', [
        group([
            query('@bajarAnimation', animateChild()),
            query('@derAIzAnimation', animateChild())
        ]),

    ])
]);

export const HijoBajIzqButtAnimation = trigger('HijoBajIzqButtAnimation', [
    transition(':enter', [
        group([
            query('@bajarAnimation', animateChild()),
            query('@derAIzAderButAnimation', animateChild())
        ]),

    ])
]);

export const HijoBajIzqDerButtAnimation = trigger('HijoBajIzqDerButtAnimation', [
    transition(':enter', [
        group([
            query('@bajarAnimation', animateChild()),
            query('@derAIzAderButAnimation', animateChild()),
            query('@IzAderAIzButAnimation', animateChild())
        ]),

    ])
]);


export const HijoSubDerButtAnimation = trigger('HijoSubDerButtAnimation', [
    transition(':enter', [
        group([
            query('@subirAnimation', animateChild()),
            query('@IzAderAIzButAnimation', animateChild())
        ]),

    ])
]);

export const HijoSubIzqButtAnimation = trigger('HijoSubIzqButtAnimation', [
    transition(':enter', [
        group([
            query('@subirAnimation', animateChild()),
            query('@derAIzAderButAnimation', animateChild())
        ]),

    ])
]);

export const HijoSubIzqButtAnimationWait = trigger('HijoSubIzqButtAnimationWait', [
    transition(':enter', [
        group([
            query('@subirAnimationWait', animateChild()),
            query('@derAIzAderButAnimationWait', animateChild())
        ]),

    ])
]);

export const HijoSubIzqAnimationWait = trigger('HijoSubIzqAnimationWait', [
    transition(':enter', [
        group([
            query('@subirAnimationWait', animateChild()),
            query('@derAIzAnimationWait', animateChild())
        ]),

    ])
]);

export const transpAnimation = trigger('transpAnimation', [
    transition(
        ':enter',
        [
            style({opacity: 0}),
            animate('2s ease-out',
                style({opacity: 1}))
        ]
    ),
    transition(
        ':leave',
        [
            style({opacity: 1}),
            animate('2s ease-in',
                style({opacity: 0}))
        ]
    )
]);


export function isRouteAnimationsAll() {
    return true;
}

