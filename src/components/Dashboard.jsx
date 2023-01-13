import React from 'react'
import DashboardMain from './DashboardMain'
import DashboardNav from './DashboardNav'
const Dashboard = ({user, chartData}) => {
  return (
    <>
    <DashboardNav currentuser={user} />
    <DashboardMain chartData={chartData}/>
    </>
  )
}

export default Dashboard