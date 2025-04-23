const base = {
    get() {
        return {
            url : "http://localhost:8080/zaixianshangpinjiaoyiwangzhan/",
            name: "zaixianshangpinjiaoyiwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zaixianshangpinjiaoyiwangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线商品交易平台"
        } 
    }
}
export default base
