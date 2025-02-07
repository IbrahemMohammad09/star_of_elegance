const url = "https://starofelegance.pythonanywhere.com/"

const Api = {
    GET: {
        SERVICELIST: url+'api/services/',
    },
    POST: {
        CREATESERVICE: url+'api/services/create/',
    },
    PUT: {
        UPDATESERVICE: url+'api/services/1/update/'
    },
    DELETE :{
        DELETESERVICE: url+'api/services/1/delete/'
    }
}


export default Api;