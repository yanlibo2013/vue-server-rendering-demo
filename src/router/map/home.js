import { createListView } from './createView.js'
export default [
  {
    path: '/home',
    component: createListView(require('../../components/Home.vue'),"home"),
    children: [
    ]
  }
];
