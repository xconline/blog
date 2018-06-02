
const initState = {
    articleList: [],
    tags: [],
    categorys: [],
    tagJson: [], // tag和文章数量的hash数组
    selectedTag: undefined,
    page: 1,
    loadMoreFlag: false, // 是否已经加载完
    finishLoadFlag: false,
    loading: false,
}
const articleReducer = (state = initState, action) => {
    let newState = null;
    switch (action.type) {
        case 'INIT_ARTICLE_LIST':
            newState = Object.assign({}, state, {
                articleList: action.articleList,
                page: action.loadMoreFlag ? state.page : 2,
                loadMoreFlag: action.loadMoreFlag,
            });
            return newState;
        case 'LOADMORE_ARTICLE':
            if(action.articleList){
                newState = Object.assign({}, state, {
                    articleList: Object.assign([], state.articleList, [
                        ...state.articleList,
                        ...action.articleList
                    ]),
                    page: action.loadMoreFlag ? state.page : state.page + 1,
                    loadMoreFlag: action.loadMoreFlag,
                    loading: false,
                });
                return newState;
            }else{
                return state;
            }
        case 'SELECT_TAG':
            newState = Object.assign({}, state, {
                selectedTag: action.tag,
                loadMoreFlag: false,
                finishLoadFlag: !state.finishLoadFlag,
            })
            return newState;
        case 'BEGIN_LOAD':
            newState = Object.assign({}, state, {
                loading: true,
            })
            return newState;
        case 'INIT_TAG':
            newState = Object.assign({}, state, {
                tags: action.tags===undefined?state.tags:action.tags,
            });
            return newState;
        case 'INIT_CATEGORY':
            newState = Object.assign({}, state, {
                categorys: action.category===undefined?state.category:action.category,
            });
            return newState;
        case 'INIT_TAGJSON':
            newState = Object.assign({}, state, {
                tagJson: action.tagJson===undefined?state.tagJson:action.tagJson,
            })
            return newState;
        default:
            return state;
    }
}

export default articleReducer;