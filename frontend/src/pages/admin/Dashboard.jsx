import React from 'react'
import Header from '../../components/partials/admin/Header/Header'
import Footer from '../../components/partials/admin/Footer/Footer'
import Table from '../../components/table/Table'
import Container from '../../components/utils/Container'
import Dropdown from '../../components/utils/Dropdown'
import Filters from '../../components/partials/admin/Filter_bar/Filters'
// import Container from '../../components/utils/Container'

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <div className='text-white mt-10 mb-10'>
          <h2 className='text-3xl'>Student List</h2>
          <p>Track your student progress</p>
        </div>
        <div className='mt-5 mb-5'>
          <div className='mb-3'>
            <Filters />
          </div>
          <Table />
        </div>
      </Container>
      <div className='mt-10'>
        <Footer />
      </div>
    </>
  )
}

export default Dashboard
