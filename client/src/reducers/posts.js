export default (posts = [], action) => {
    if(action.type = 'CREATE'){
        switch (action.type) {
            case 'FETCH_ALL':
                return posts;
            case 'CREATE':   
                return [...posts, action.payload];
            default:
                return posts;
        }
    }
}