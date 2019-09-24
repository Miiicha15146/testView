new Vue( {
  el: '#test1',
  data: {
    posts: []
  },
  created: function(){
    axios.get( 'http://mykt.wp.xdomain.jp/wp-json/wp/v2/posts' )
    .then( response => {
      this.posts = response.data;
    } )
    .catch( error => {
      window.alert( error );
    } );
  }
} )

new Vue ({
  el: '#app',
  data: {
    active: false,
    navi: false,
  },
  methods: {
    naviOpen: function() {
      this.active = !this.active;
      this.navi = !this.navi;
    }
  }
})
