import * as yup from 'yup'

let addBatchInitialValue = {
    batch: null
}

let addBatchValidation = yup.object().shape({
    batch: yup.string("Please enter valid batch").required("Batch is required field")
})

export { addBatchInitialValue, addBatchValidation }