import Server from "./server";

class API extends Server {
  /**
   *  获取歌手信息
   *  @method get
   *  @return {promise}
   */
  async getSinger(params = {}) {
    try {
      let res = await this.axios(
        "get",
        "/proxy/singer/class&json=true",
        params
      );
      return res.list;
    } catch (error) {
      throw error;
    }
  }

  /**
   *  获取歌曲信息
   *  @method post
   *  @return {promise}
   */
  async getSong(hash) {
    try {
      let res = await this.axios("get", "/dproxy/yy/index.php?r=play/getdata", {
        params: {
          hash: hash
        }
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  /**
   *  获取歌曲信息
   *  @method get
   *  @return {promise}
   */
  async getHome() {
    try {
      let res = await this.axios("get", "/proxy/?json=true");
      return res;
    } catch (error) {
      throw error;
    }
  }

  /**
   *  搜索歌曲信息
   *  @method get
   *  @return {promise}
   */
  async search(params) {
    try {
      let res = await this.axios("get", "/sproxy/search/song?format=json", {
        params: params
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  /**
   *  搜索歌曲信息
   *  @method get
   *  @return {promise}
   */
  async getHot() {
    try {
      let res = await this.axios(
        "get",
        "/sproxy/search/hot?format=json&plat=0&count=30"
      );
      return res;
    } catch (error) {
      throw error;
    }
  }

  /**
   *  得到歌曲排名信息
   *  @method get
   *  @return {promise}
   */
  async getRank() {
    try {
      let res = await this.axios("get", "/proxy/rank/list&json=true");
      return res;
    } catch (error) {
      throw error;
    }
  }

  /**
   *  得到歌曲排名信息
   *  @method get
   *  @return {promise}
   */
  async getRankList(params = {}) {
    try {
      let res = await this.axios("get", "/proxy/rank/info/&json=true", {
        params: params
      });
      return res;
    } catch (error) {
      throw error;
    }
  }

  /**
   *  得到热门歌曲列表
   *  @method get
   *  @return {promise}
   */
  async getHotList() {
    try {
      let res = await this.axios("get", "/proxy/plist/index&json=true");
      return res;
    } catch (error) {
      throw error;
    }
  }
}

export default new API();
