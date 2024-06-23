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
        <div className='mt-5 mb-5'>
          <Filters/>
          <Table />
        </div>

      </Container>
      <Footer />
    </>
  )
}

export default Dashboard
