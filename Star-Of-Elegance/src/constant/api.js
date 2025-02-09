const url = "https://starofelegance.pythonanywhere.com/"

const Api = {
    GET: {
        SERVICELIST: url+'api/services/',
        RATESLIST: url+'api/rates/',
        PROJECTSLIST: url+'api/projects',
        MESSAGELIST: url+'api/messages/',
        ORDERLIST: url+'api/requests/'
    },
    POST: {
        CREATESERVICE: url+'api/services/create/',
        CREATERATE: url+'api/rates/create/',
        CREATEPROJECT: url+'api/projects/create',
        CREATEPROJECTBEFORPIC: url+'/api/projects/1/upload-before-pictures/',
        CREATEPROJECTAFTERPIC: url+'/api/projects/1/upload-after-pictures/',
        CREATEMESSAGE: url+'api/messages/create/',
        CREATEORDER: url+'api/requests/create/'

    },
    PUT: {
        UPDATESERVICE: url+'api/services/1/update/',
        UPDATERATE: url+'api/rates/1/update',
        UPDATEPROJECT: url+'api/projects/1/update',
        UPDATEMESSAGE: url+'api/messages/1/update/',
        UPDATEORDER: url+'api/requests/1/update/'
    },
    DELETE :{
        DELETESERVICE: url+'api/services/1/delete/',
        DELETERATE: url+'api/rates/1/delete',
        DELETEPROJECT: url+'api/projects/1/delete/',
        DELETEMESSAGE: url+'api/messages/1/delete/',
        DELETEORDER: url+'api/requests/1/delete/'
    }
}


export default Api;