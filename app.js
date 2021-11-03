



// code 5
// new Vue({
//    el:'#vue-app',
//     data:{
//       name: "rizwanullah",
//       characters: ["rizwan", "shaan", "haris", "haroon"],
//       names:[
//         {name: "haris", age: 24},
//         {name: "adil", age: 546},
//         {name: "ali", age: 56},
//         {name: "baba", age: 657}
//       ]
//     },
//     methods: {
//
//     }
//  });



// code 4
// new Vue({
//     el:'#vue-app',
//    data:{
//      health: 100,
//      ended: false
//    },
//    methods:{
//      punch: function(){
//        this.health -= 10;
//        if(this.health <= 0){
//          this.ended = true;
//        }
//      },
//      restart: function(){
//        this.health = 100;
//        this.ended = false;
//      }
//    },
//    computed: {
//
//    }
// });


// Code 3
// new Vue({
//    el:'#vue-app',
//     data:{
//       name: "",
//       age: ""
//     },
//     methods: {
//
//     }
//  });



// Code 2
// new Vue({
//    el:'#vue-app',
//        data:{
//            age: 45,
//            x: 0,
//            y: 0
//            },
//            methods:{
//              addage: function(inc){
//                 this.age += inc;
//              },
//              remage: function(dec){
//                 this.age -= dec;
//              },
//              aget: function(event){
//                 this.age += event.offsetX;
//              },
//              agem: function(event){
//                 this.age -= event.offsetY;
//              }
//            }
//  });






// Code 1
// new Vue({
//     el:'#vue-app',
//     data:{
//       name: "RizwanUllah",
//       website: "https://github.com/rizwanullah313?tab=repositories",
//       websiteTag: '<a href="https://atom.io/packages/atom-live-server">Atom Live Server</a>'
//     },
//     methods: {
//       greet: function(time){
//         return "Good "+time;
//       }
//     }
//
// });
