import $ from './jquery'
$.ajax({
    url: '/api/users',
    success(res){
        console.log('res: ', res);
    }
})