import axios from 'axios'
const erpApi = axios.create();
export default erpApi;

// erpApi.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     const user = localStorage.getItem('user');
//     if (401 === error.response.status && !!user) {
//         localStorage.clear();
//         location.reload();
//         Promise.reject(error);
//     } else {
//         return Promise.reject(error);
//     }
// });
// let token = document.head.querySelector('meta[name="csrf-token"]');
//
// export default axios.create({
//     headers: {
//         'X-Requested-With': 'XMLHttpRequest',
//         'X-CSRF-TOKEN': token?.content ?? ""
//     }
// })
// Todo: configurar interceptores
// reminderApi.interceptors.request.use( config => {
//     config.headers = {
//         ...config.headers,
//         'Authorization': `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`
//     }
//     return config;
// })
// window.axios.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     if (401 === error.response.status) {
//         swal({
//             title: "Session Expired",
//             text: "Your session has expired. Would you like to be redirected to the login page?",
//             type: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#DD6B55",
//             confirmButtonText: "Yes",
//             closeOnConfirm: false
//         }, function(){
//             window.location = '/login';
//         });
//     } else {
//         return Promise.reject(error);
//     }
// });
