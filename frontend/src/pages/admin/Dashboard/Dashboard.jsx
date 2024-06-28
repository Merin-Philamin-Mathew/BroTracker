import React, { useState } from 'react'
import Header from '../../../components/partials/admin/Header/Header'
import Footer from '../../../components/partials/admin/Footer/Footer'
import Table from '../../../components/table/Table'
import Container from '../../../components/utils/Container'
import Filters from '../../../components/partials/admin/Filter_bar/Filters'
import CustomeModal from '../../../components/utils/CustomeModal'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { addBatchInitialValue, addBatchValidation } from './Data'
import { toast } from 'react-toastify'
import { addBatchHandler } from './Logic'
import SpinnerLoading from '../../../components/utils/SpinnerLoading'

function Dashboard() {

  let [isBatchModelOpen, setBatchModelOpen] = useState(false)
  let [isSpinnerOpen, setSpinnerOpen] = useState(false)

  function addBatchSuccess() {
    toast.success("Batch added success")
    setSpinnerOpen(false)
  }

  function onError(err) {
    toast.error("Batch creation failed")
    setSpinnerOpen(false)
  }

  return (
    <>
      <SpinnerLoading isShow={isSpinnerOpen} />

      <CustomeModal closeOnClick={() => setBatchModelOpen(false)} isOpen={isBatchModelOpen} title={"Add new batch"}>
        <Formik initialValues={addBatchInitialValue} validationSchema={addBatchValidation} onSubmit={(val, { resetForm }) => {
          setSpinnerOpen(true)
          addBatchHandler(val, () => {
            addBatchSuccess()
            resetForm()
          }, onError)
        }}>
          <Form>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Batch name</label>
              <Field type="text" id="batch" name="batch" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a batch name..." />
              <ErrorMessage name='batch' component={"div"} className='text-red-600' />
            </div>
            <div className='flex justify-end'>
              <button type='submit' className='bg-gray-700 text-white p-3 rounded-lg px-10'>Add batch</button>
            </div>
          </Form>
        </Formik>
      </CustomeModal>

      <Header />
      <Container>
        <div className='text-white mt-10 mb-10'>
          <h2 className='text-3xl'>Student List</h2>
          <p>Track your student progress</p>
        </div>
        <div className='mt-5 mb-5'>
          <div className='mb-3'>
            <Filters onAddBatchClick={() => setBatchModelOpen(true)} />
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
