import React from 'react'
import Header from '../../components/partials/admin/Header/Header'
import Footer from '../../components/partials/admin/Footer/Footer'
import Table from '../../components/table/Table'
import Container from '../../components/utils/Container'
import GithubUser from '../../components/partials/admin/UserDatas/GithubUser'
// import Container from '../../components/utils/Container'

function Dashboard() {
  return (
    <>
      <Header />
      <Container>
        <div className='mt-5 mb-5'>
          <Table />
          <GithubUser/>
        </div>

      </Container>
      <Footer />
    </>
  )
}

export default Dashboard
