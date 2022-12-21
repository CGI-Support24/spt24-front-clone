export default [
  {
    component: 'CNavTitle',
    name: '지원사업분류',
  },
  {
    component: 'CNavGroup',
    name: '지원 사업 종류',
    to: '/base',
    icon: 'cilMenu',
    items: [
      {
        component: 'CNavItem',
        name: '인력지원',
        to: '/base/SPno1',
      },
      {
        component: 'CNavItem',
        name: '경영지원',
        to: '/base/SPno2',
      },
      {
        component: 'CNavItem',
        name: '기술지원',
        to: '/base/SPno3',
      },
      {
        component: 'CNavItem',
        name: '금융지원',
        to: '/base/SPno4',
      },
      {
        component: 'CNavItem',
        name: '창업지원',
        to: '/base/SPno5',
      },
      {
        component: 'CNavItem',
        name: '내수지원',
        to: '/base/SPno6',
      },
      {
        component: 'CNavItem',
        name: '수출지원',
        to: '/base/SPno7',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: '사용자추천지원사업',
    to: '/custom/supportex',
    icon: 'cilCheck',
  },
  {
    component: 'CNavGroup',
    name: '문의사항',
    to: '/icons',
    icon: 'cilPeople',
    items: [
      {
        component: 'CNavItem',
        name: '자주묻는질문',
        to: '/Question/ManyQnA',
        badge: {
          color: 'info',
          text: 'QnA',
        },
      },
      {
        component: 'CNavItem',
        name: '지원금지원',
        to: '/Question/none',
      },
    ],
  },
]
