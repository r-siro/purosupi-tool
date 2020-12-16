const app = new Vue({
    el: '#app',
    data: {
        teams: [
          { value: -1, label: 'すべて'},
          { value: 0, label: '巨人'},
          { value: 1, label: '阪神'},
          { value: 2, label: '中日'},
          { value: 3, label: 'DeNA'},
          { value: 4, label: '広島'},
          { value: 5, label: 'ヤクルト'},
          { value: 6, label: 'ソフトバンク'},
          { value: 7, label: 'ロッテ'},
          { value: 8, label: '西武'},
          { value: 9, label: '楽天'},
          { value: 10, label: '日ハム'},
          { value: 11, label: 'オリックス'}
        ],
        positions: [
          { value: -1, label: '野手'},
          { value: 0, label: '投手'}
        ],
        players: [
          {id: 0, position: '野手', name: "ソト", positionDetail: "二", ballistic: "アーチスト", 
          meet: "70" , power: "84", run: "59", mainThreeStatus: "213"}
        ],
        current: -1
    },
    methods: {
      
    },
    watch: {
      
    },
    computed: {
      computedTeams: function() {
        // データ current が -1 ならすべて
        // それ以外なら current と state が一致するものだけに絞り込む
        return this.todos.filter(function(el) {
          return this.current < 0 ? true : this.current === el.state
        }, this)
      }  
    }
})