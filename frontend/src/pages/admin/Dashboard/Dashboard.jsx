import React, { useEffect, useState } from 'react'
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
import { getAllStudentProfile } from '../../../apis/firebase/student_details'
import Data_Section from '../../../components/data_section/Data_Section'

function Dashboard() {

  const icons = [
    {
      className: "h-9 w-9",
      title: 'github',
      src: "/assets/github.png",
    },
    {
      className: "h-9 w-8",
      title: 'leetcode',
      src: "/assets/LeetCode_logo_white.png",
    },
    {
      className: "h-9 w-9 object-cover rounded-full",
      title: 'monkeytype',
      src: "/assets/monkeytype.png",
    }
  ]


  let [isBatchModelOpen, setBatchModelOpen] = useState(false)
  let [isSpinnerOpen, setSpinnerOpen] = useState(false)
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [currentIcon, setCurrentIcon] = useState(icons[currentIconIndex])
  const [student_details, setStudent_details] = useState([])


  useEffect(() => {
    getAllStudentProfile().then((data) => {
      console.log(data);

      const transformData = data.student_list.map(student => ({
        "": {
          classList: 'p-5'
        },
        name: {
          type: "string",
          data: student.firstName + student.lastName,
          classList: 'relative font-medium capitalize text-gray-900 whitespace-nowrap dark:text-zinc-50'
        },
        batch: {
          type: "string",
          data: student.batch
        },
        data: {
          type: "element",
          data: <Data_Section icon={currentIcon.title} data={student} />
        }
      }));

      console.log("The data");
      console.log(transformData);

      setStudent_details(transformData)

    }).catch((e) => {
      console.log(e.status, e.msg)
    })
  }, [])

  function addBatchSuccess() {
    toast.success("Batch added success")
    setSpinnerOpen(false)
  }

  function onError(err) {
    toast.error(err)
    setSpinnerOpen(false)
  }



  const handeIconClick = () => {
    // setCurrentIcon(icons[currentIcon + 1] % icons.length)
    setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length)
  }





  let studentTableHeaders = [
    {
      title: "",
      class: []
    },
    {
      title: "Student name",
      class: []
    },
    {
      title: "Batch",
      class: []
    },
    {
      title: <div onClick={handeIconClick}>
        <img
          className={currentIcon.className}
          title={currentIcon.title}
          src={currentIcon.src}
          alt={`${currentIcon.title} icon`}
        />
      </div>,
      class: ['flex', 'justify-center']
    },
  ]

  function onSearchTable() {

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
            <Filters onSearch={onSearchTable} onAddBatchClick={() => setBatchModelOpen(true)} />
          </div>
          <Table data={student_details} headers={studentTableHeaders} />
        </div>
      </Container>
      <div className='mt-10'>
        <Footer />
      </div>
    </>
  )
}

export default Dashboard
