/**
 * Created by Administrator on 2018/4/13.
 */
import {
    get
} from '../api/fetchAPI';
import {
    server
} from '../config/serverAddress';

let actions = {
    initArticle: () => (dispatch, getState) => {
        
        get(`${server}/get_category/`).then(categroy => categroy['category']).then(r => dispatch(actions._initCategory(r)));
        get(`${server}/get_tags/`).then(tags => tags['tags']).then(r => dispatch(actions._initTag(r)));
        get(`${server}/get_tagJson/`).then(tags => tags['res']).then(r => dispatch(actions._initTagJson(r)));
    },
    initArticleList:(param={page:1}) => (dispatch, getState) => {
        if(param.tag===undefined){
            dispatch(actions._selectTag(undefined));
            get(`${server}/get_articleList/`,param).then(r => dispatch(actions._initArticle(r)));
        }else{
            dispatch(actions._selectTag(param.tag));
            get(`${server}/get_articleList_tag/`,param).then(r => dispatch(actions._initArticle(r)));
        }
    },
    loadMore_article:(param={page:1}) => (dispatch, getState) => {
        dispatch(actions._beginLoad());
        console.log(new Date().getTime());
        if(param.tag===undefined){
            get(`${server}/get_articleList/`,param).then(r => dispatch(actions._loadMoreArticle(r)));
        }else{
            get(`${server}/get_articleList_tag/`,param).then(r => dispatch(actions._loadMoreArticle(r)));
        }
    },
    _beginLoad: ()=>({
        type: 'BEGIN_LOAD',
    }),
    _selectTag:(tag)=>({
        type: 'SELECT_TAG',
        tag: tag,
    }),
    _initArticle: (resp) => ({
        type: 'INIT_ARTICLE_LIST',
        articleList: resp.articleList,
        loadMoreFlag: resp.loadMoreFlag,
    }),
    _loadMoreArticle: (resp) => ({
        type: 'LOADMORE_ARTICLE',
        articleList: resp.articleList,
        loadMoreFlag: resp.loadMoreFlag,
    }),
    _initTag: (tags) => ({
        type: 'INIT_TAG',
        tags: tags
    }),
    _initCategory: (category) => ({
        type: 'INIT_CATEGORY',
        category: category
    }),
    _initTagJson: (tagJson)=>({
        type: 'INIT_TAGJSON',
        tagJson: tagJson,
    })
}
export default actions;