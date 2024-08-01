import React, { useContext } from 'react'
import Dropdown from '../../../utils/Dropdown'
import SearchBar from '../../../utils/SearchBar'
import const_data from '../../../../config/constant'
import AddButton from '../../../utils/Buttons/AddButton'
import { useNavigate } from 'react-router-dom'
import { BatchContext } from '../../../context/BatchContext'


function Filters({ onAddBatchClick }) {
  const Batches = useContext(BatchContext)

  let batchProps = Batches.batch.map((each) => ({ title: each }))
  let hubProps = []
  let perfomanceProps = [{ title: "Pro" }, { title: "Intermediete" }, { title: "Begginer" }]

  const navigate = useNavigate()
  const navigate_addStudent = () => {
    navigate('/admin/student/add')
  }
  return (
    <div className='block lg:flex ' >
      <div className='sm:flex block  gap-2 w-full lg:w-3/5'>
        <div className="flex gap-2 justify-between ">
          <Dropdown title={"Batch"} onClick={() => { }} items={batchProps} />
          <Dropdown title={"Hub"} onClick={() => { }} items={hubProps} />
          <Dropdown title={"Hub"} onClick={() => { }} items={perfomanceProps} />
        </div>
        <div className='sm:mt-0 mt-2'>
          <SearchBar />
        </div>
      </div>
      <div className='w-full lg:w-2/5'>
        <div className='lg:flex justify-end items-center mt-3 lg:mt-0'>
          <div className='sm:flex grid gap-2'>
            <AddButton title={"Add Student"} onClick={navigate_addStudent} />
            <AddButton title={"Add Batch"} onClick={() => { onAddBatchClick() }} />
            <AddButton title={"Add Hub"} onClick={() => { }} />
          </div>
        </div>
      </div>


    </div>
  )
}

export default Filters
