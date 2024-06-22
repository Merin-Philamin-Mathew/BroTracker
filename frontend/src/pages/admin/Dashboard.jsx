import React from 'react'
import Header from '../../components/partials/admin/Header/Header'
import Footer from '../../components/partials/admin/Footer/Footer'
import Table from '../../components/table/Table'
import Container from '../../components/utils/Container'
// import Container from '../../components/utils/Container'

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <Table />

      </Container>
      <Footer />
    </>
  )
}

export default Dashboard
