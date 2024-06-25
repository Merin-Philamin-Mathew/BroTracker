import * as Yup from 'yup'

let userRegForm_Data = {
    INITIAL_VALUES: {
        firstName:'hhh',
        lastName: 'ghghdf',
        email: 'mrnmthw19@gmail.com',
        phoneNumber: 'ghghgfh',
        batch: 'ferer',
        githubUsername:'Merin-Philamin-Mathew',
        leetcodeUsername: 'MerinMathew19',
        monkeytypingUsername: 'merinmathew19',
        githubDetails: {
          push: '',
          pull: '',
          commits: '',
          active_days: []
        },
        leetcodeDetails: {
          problems : {
            hard: '',
            medium: '',
            easy: '',
          },
          badges : '',
          active_days: []
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
        // phoneNumber: Yup.number()
        // .test('length', 'Must be 10 characters',(val)=>val && val.toString().length == 10),
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
      })
}

export {userRegForm_Data}