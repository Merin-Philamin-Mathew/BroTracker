import React, { useContext, useEffect, useState } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addStudent } from '../../apis/firebase/student_details';
import { getBatch } from '../../apis/firebase/batch_details';
import { userRegForm_Data } from './data';
import { accountValidator, credUniqueValidator } from '../../apis/firebase/account_validator';
import { GIT_URL_INSTANCE, LEETCODE_URL_INSTANCE, MONKEYTYPE_URL_INSTANCE } from '../../apis/axios_instance';
import const_data from '../../config/constant';
import URLS from '../../apis/urls';
import { leetcodeDetails } from '../../apis/firebase/leetcode_details';
import { BatchContext } from '../../components/context/BatchContext';
import SpinnerLoading from '../../components/utils/SpinnerLoading';
import { toast } from 'react-toastify';


function UserRegisterForm() {

    const batches = useContext(BatchContext)
    let [spinnerData, setSpinner] = useState({
        isShow: false,
        msg: "Please wait...."
    })

    return (
        <div>
            <SpinnerLoading isShow={spinnerData?.isShow ?? false} title={spinnerData?.msg} />
            <Formik
                initialValues={userRegForm_Data.INITIAL_VALUES}
                validationSchema={userRegForm_Data.VALIDATION_SCHEMA}
                onSubmit={async (val, { resetForm }) => {
                    setSpinner({ isShow: true, msg: "Please wait" })
                    try {

                        setSpinner({ isShow: true, msg: "Fetching github details" })
                        const git_details = await accountValidator(GIT_URL_INSTANCE, URLS.GIT.events(val.githubUsername))
                        setSpinner({ isShow: true, msg: "Fetching leetcode details" })
                        const leetCode_details = await accountValidator(LEETCODE_URL_INSTANCE, URLS.LEETCODE.calender(val.leetcodeUsername))
                        setSpinner({ isShow: true, msg: "Fetching monkeytype details" })
                        const monkeyType_details = await accountValidator(MONKEYTYPE_URL_INSTANCE, URLS.MONKEYTYPE.profile(val.monkeytypingUsername))

                        setSpinner({ isShow: true, msg: "Fetching validation details" })
                        const uniqueValidation = await credUniqueValidator(val.phoneNumber, val.email)
                        console.log(uniqueValidation);

                        if (!uniqueValidation?.status) {
                            toast.error(uniqueValidation.msg)
                        }

                        if (!git_details.status) {
                            toast.error("no git user")
                        }
                        else if (leetCode_details?.data?.errors) {
                            toast.error("no leet user")
                        } else if (!monkeyType_details.status) {
                            toast.error("no mt user")
                        }
                        else {

                            console.log(val)
                            console.log("git", git_details);
                            console.log("leet", leetCode_details.data.submissionCalendar);
                            console.log("mt", monkeyType_details.data.data.personalBests.time);

                            // github
                            let userStatus = {
                                push: 0,
                                pull: 0,
                                commits: 0
                            }
                            git_details.data.forEach((each) => {
                                if (each.type == "PushEvent") {
                                    userStatus.push += each.payload.size
                                    userStatus.commits += each.payload.commits.length
                                } else if (each.type == "PullRequestEvent") {
                                    userStatus.pull++
                                }
                            })
                            val.githubDetails.pull = userStatus.pull
                            val.githubDetails.push = userStatus.push
                            val.githubDetails.commits = userStatus.commits

                            // leetcode
                            await leetcodeDetails(val, leetCode_details)

                            // monkeytype
                            const times = Object.values(monkeyType_details.data.data.personalBests.time);
                            let totalAcc = 0, totalConsistency = 0, totalWpm = 0, totalCount = 0;
                            times.forEach(timeArray => {
                                timeArray.forEach(entry => {
                                    totalAcc += entry.acc;
                                    totalConsistency += entry.consistency;
                                    totalWpm += entry.wpm;
                                    totalCount += 1;
                                });
                            });
                            val.monkeytypeDetails.accuracy = totalAcc / totalCount;
                            val.monkeytypeDetails.consistency = totalConsistency / totalCount;
                            val.monkeytypeDetails.typing_speed = totalWpm / totalCount;

                            await addStudent(val)
                            toast.success("Form has been submitted")
                            resetForm();
                        };

                    } catch (e) {
                        console.log("Error:", e)
                    }
                    setSpinner({ isShow: false })
                }}
            >
                <Form >
                    <div className="space-y-12">


                        <div className="border-b border-gray-100/10 pb-12">

                            <div className="mt-10 bg-op grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                                <div className="sm:col-span-3">
                                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-slate-400">First name</label>
                                    <div className="mt-2">
                                        <Field type="text"
                                            name="firstName"
                                            id="firstName"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage component={'div'} className='text-red-700' name='firstName'></ErrorMessage >

                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-slate-400">Last name</label>
                                    <div className="mt-2">
                                        <Field type="text"
                                            name="lastName"
                                            id="lastName"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage component={'div'} className='text-red-700' name='lastName'></ErrorMessage >

                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-slate-400">Email address</label>
                                    <div className="mt-2">
                                        <Field id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage component={'div'} className='text-red-700' name='email'></ErrorMessage >


                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-slate-400">Phone Number</label>
                                    <div className="mt-2">
                                        <Field type="text"
                                            name="phoneNumber"
                                            id="phoneNumber"
                                            autoComplete="phoneNumber"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage component={'div'} className='text-red-700' name='phoneNumber'></ErrorMessage >

                                    </div>
                                </div>



                                <div className="sm:col-span-3">
                                    <label htmlFor="batch" className="block text-sm  font-medium leading-6 text-slate-400">Batch</label>
                                    <div className="mt-2">
                                        <Field as="select" id="batch" name="batch" autoComplete="batch-name" className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:max-w-xs sm:text-sm sm:leading-6">
                                            <option className='text-base font-medium leading-6'>Select Batch</option>
                                            {batches.batch.map((batch, index) => (
                                                <option key={index} name='batch' id='batch' className='text-base  font-medium leading-6'>{batch}</option>
                                            ))}
                                        </Field>
                                        <ErrorMessage component={'div'} className='text-red-700' name='batch'></ErrorMessage >
                                    </div>
                                </div>




                                <div className="col-span-full">
                                    <label htmlFor="githubUsername" className="block text-sm font-medium leading-6 text-slate-400">GitHub Username</label>
                                    <div className="mt-2">
                                        <Field type="text"
                                            name="githubUsername"
                                            id="githubUsername"
                                            autoComplete="githubUsername"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage component={'div'} className='text-red-700' name='githubUsername'></ErrorMessage >
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="leetcodeUsername" className="block text-sm font-medium leading-6 text-slate-400">LeetCode Username</label>
                                    <div className="mt-2">
                                        <Field type="text"
                                            name="leetcodeUsername"
                                            id="leetcodeUsername"
                                            autoComplete="leetcodeUsername"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage component={'div'} className='text-red-700' name='leetcodeUsername'></ErrorMessage >
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label htmlFor="monkeytypingUsername" className="block text-sm font-medium leading-6 text-slate-400">Monkeytype Username</label>
                                    <div className="mt-2">
                                        <Field type="text"
                                            name="monkeytypingUsername"
                                            id="monkeytypingUsername"
                                            autoComplete="monkeytypingUsername"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-700 px-3 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-200 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage component={'div'} className='text-red-700' name='leetcodeUsername'></ErrorMessage >

                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-slate-400 px-3">Cancel</button>
                        <button type="submit" className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                    </div>
                </Form>
            </Formik >
        </div >
    )
}

export default UserRegisterForm
