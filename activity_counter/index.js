import React from 'react'
import { render } from 'react-dom'
// import { SkiDayCount } from './components/ski_day_count'
// import { SkiDayList } from './components/ski_day_list'
import { App } from './components/app_es6'
// import { Oops404 } from './components/oops_404'
import './style/global.scss'

window.React = React

// const days = [
//   {
//     resort: 'Squaw Valley',
//     date: new Date('2017/03/21'),
//     powder: true,
//     backcountry: false
//   },
//   {
//     resort: 'Kirkwood',
//     date: new Date('2017/04/09'),
//     powder: false,
//     backcountry: false
//   },
//   {
//     resort: 'Mt. Tallac',
//     date: new Date('2017/07/11'),
//     powder: true,
//     backcountry: true
//   }
// ]

render(
  <App />,
  document.getElementById('root')
)
