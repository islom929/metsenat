import { createStore } from 'vuex'
// import { useRouter } from 'vue-router'

// const router = useRouter()

export default createStore({
  state: {
    user: {
      role: 'physical'
    },
    user_info: {
      role: 'physical'
    },
    auth: {
      user_name: 'metsenatadmin',
      password: 'uF9aH1vZ3bV2kN2y',
      access_token: '',
      isSuccessful: false
    },
    dashboard: [
      {
        title: 'Jami to‘langan summa',
        color: '#4C6FFF'
      },
      {
        title: 'Jami so‘ralgan summa',
        color: '#EDC700'
      },
      {
        title: 'To‘lanishi kerak summa',
        color: '#ED7200'
      },

    ],
    sponsor_list: {},
    sponsor_filter: {},
    sponsor_page: 1,
    student_page: 1,
    student_list: {},
    student: {},
    student_type: [
      {
        name: 'Bakalavr',
        id: 1
      },
      {
        name:'Magistr',
        id: 2
      },
      {
        name: 'Asperant',
        id: 3
      }
    ],
    university_list: [],
    admin_status: true,
    isSubmitted: false,
    adminActive: 'students',
    adminInfo_active: '',
    admin_info: {},
    filter_clear: false,
    auth_status: false
  },
  getters: {
  },
  mutations: {
  },
  watch: {
  },
  actions: {
    async postUserData () {
      await fetch('https://club.metsenat.uz/api/v1/sponsor-create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "full_name": this.state.user.full_name,
          "phone": this.state.user.phone,
          "sum": this.state.user.payment,
          "payment_type": [
            '44'
          ],
          "firm": this.state.user.organization
        })
      })
    },
    async postLogin () {
      const response = await fetch('https://club.metsenat.uz/api/v1/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.auth.user_name,
          password: this.state.auth.password
        })
      })
      if(response?.status === 200) {
        this.state.auth_status = true
      }
    },
    async postCreateStudent () {
      const response = await fetch('https://club.metsenat.uz/api/v1/student-create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "full_name": this.state.student.full_name,
          "phone": this.state.student.phone,
          "contract": this.state.student.contract,
          "type": this.state.student.type,
          "institute": this.state.student.university
        })
      })
      console.log(response);
    },
    async getDashboard () {
      this.state.admin_status = false
      const response = await fetch('https://club.metsenat.uz/api/v1/dashboard/')
      if (response.status === 200) this.state.admin_status = true
      else this.state.admin_status = false
      const data = await response.json()
      this.state.dashboard[0].price = data?.total_paid
      this.state.dashboard[1].price = data?.total_need
      this.state.dashboard[2].price = data?.total_must_pay
    },
    async getSponsorList () {
      this.state.admin_status = false
      const response = await fetch(`https://club.metsenat.uz/api/v1/sponsor-list/?page=${this.state.sponsor_page}`)
      if (response.status === 200) this.state.admin_status = true
      else this.state.admin_status = false
      const { results, count } = await response.json()
      this.state.sponsor_count = count
      this.state.sponsor_list = results
    },
    async getStudentList () {
      this.state.admin_status = false
      const response = await fetch(`https://club.metsenat.uz/api/v1/student-list/?page=${this.state.student_page}`)
      if (response.status === 200) this.state.admin_status = true
      else this.state.admin_status = false
      const { results, count } = await response.json()
      this.state.student_list = results
      this.state.student_count = count
    },
    async getUniversityList () {
      const response = await fetch('https://club.metsenat.uz/api/v1/institute-list/')
      const data = await response.json()
      this.state.university_list = await data
    }
  },
  modules: {
  },
})
