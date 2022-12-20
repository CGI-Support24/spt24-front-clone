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
        name: '%%지원',
        to: '/base/SPno1',
      },
      {
        component: 'CNavItem',
        name: '@@지원',
        to: '/base/SPno2',
      },
      {
        component: 'CNavItem',
        name: '정부지원',
        to: '/base/SPno3',
      },
      {
        component: 'CNavItem',
        name: '인력지원',
        to: '/base/SPper',
      },
      {
        component: 'CNavItem',
        name: '장소지원',
        to: '/base/SPplace',
      },
      {
        component: 'CNavItem',
        name: '기술지원',
        to: '/base/SPtec',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: '맞춤지원사업',
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
