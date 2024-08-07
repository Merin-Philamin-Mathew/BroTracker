import * as Yup from 'yup'

let userRegForm_Data = {
    INITIAL_VALUES: {
        firstName:'',
        lastName: '',
        email: '',
        phoneNumber: '',
        batch: '',
        githubUsername:'',
        leetcodeUsername: '',
        monkeytypingUsername: '',
        githubDetails: {
          push: '',
          pull: '',
          commits: '',
          active_days: [],
          repos: ''
        },
        leetcodeDetails: {
          problems : {
            solvedProblem: '',
            hardSolved: '',
            mediumSolved: '',
            easySolved: '',
          },
          badges : '',
          active_days: ''
        },
        monkeytypeDetails: {
          consistency: '',
          accuracy: '',
          typing_speed: '',
        },
    },

    VALIDATION_SCHEMA: Yup.object().shape({
        firstName: Yup.string()
          .max(20, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address')
          .required('Required'),
        phoneNumber: Yup.number()
        .test('length', 'Must be 10 characters',(val)=>val && val.toString().length == 10),
        githubUsername: Yup.string()
            .max(30, 'Must be 20 characters or less')
            .required('Required'),
        batch: Yup.string()
            .required('Required'),
        leetcodeUsername: Yup.string()
            .max(30, 'Must be 20 characters or less')
            .required('Required'),
        monkeytypingUsername: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
      }),

      CREDENTIALS:{
        email:'',
        password:'',
      },
      CREDENTIALS_VALIDATION_SCHEMA: Yup.object().shape({
        email: Yup.string().email('Invalid email address')
          .required('Required'),
          password: Yup.string()
          .required('Required')
      })
}

export {userRegForm_Data}