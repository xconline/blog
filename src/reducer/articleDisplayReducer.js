const initState = {
    article: {},
    imageId: 1,
    imageUrl: '',
    publishCommentRes: false,
    commentList: [],
    error: {
        isNew: false
    },
    success: {
        isNew: false
    }
}
const articleDisplayReducer = (state = initState, action) => {
    let newState = null;
    switch (action.type) {
        case 'BEGIN_GET_ARTICLE_CONTENT':
            newState = Object.assign({}, state, {article: {}});
            return newState;
        case 'GET_ARTICLE_CONTENT':
            newState = Object.assign({}, state, {article: action.article});
            return newState;
        case 'CLEAR_ARTICLE_CONTENT':
            newState = Object.assign({}, state, {article: {}});
            return newState;
        case 'GET_IMAGE':
            newState = Object.assign({}, state, {
                imageId: action.image.imageId,
                imageUrl: action.image.imageUrl
            });
            return newState;
        case 'PUBLISH_COMMENT':
            newState = Object.assign({}, state, {
                commentList: Object.assign([],state.commentList,[
                    ...state.commentList,
                    {
                        image: state.imageUrl,
                        website: action.resp.website,
                        name: action.resp.name,
                        content: action.resp.comment,
                        date_publish: new Date().toLocaleDateString().replace(/\//g,"-"),
                    }
                ]),
            });
            return newState;
        case 'GET_COMMENTLIST':
            newState = Object.assign({}, state, {
                commentList: action.payload
            })
            return newState;
        case 'UPDATE_CLICKCOUNT':
            newState = Object.assign({},state, {
                article :  Object.assign({},state.article, {
                    click_count: action.payload,
                })
            })
            return newState;
        case 'ERROR':
            newState = Object.assign({}, state, {
                error: {
                    isNew: true,
                    message: action.payload.message
                }
            });
            return newState;
        case 'SUCCESS':
            newState = Object.assign({}, state, {
                success: {
                    isNew: true,
                    message: action.payload.message
                }
            });
            return newState;
        case 'RESET_TIP':
            newState = Object.assign({}, state, {
                error: {
                    isNew: false
                },
                success: {
                    isNew: false
                }
            });
            return newState;
        default:
            return state;
    }
}

export default articleDisplayReducer;