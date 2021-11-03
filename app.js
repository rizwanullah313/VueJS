

//  code 8 computed distributed
// new Vue({
//   el:'#vue-app',
//    data: {
//      age: 20,
//      a: 0,
//      b: 0
//    },
//
//    methods: {
//      // AddToA: function(){
//      //   console.log("AddToA");
//      //   return this.a + this.age;
//      // },
//      // AddToB: function(){
//      //   console.log("AddToB");
//      //   return this.b + this.age ;
//      // },
//      // before computed property run both if click once result in console.log();
//    },
//  computed:{
//    AddToA: function(){
//      console.log("AddToA");
//      return this.a + this.age;
//    },
//    AddToB: function(){
//      console.log("AddToB");
//      return this.b + this.age ;
//    },
//  }
// });



// code 7
// Vue.component('greeting',{
//   template: '<p> Hey there, I am a re-usable {{name}}.<button v-on:click="changeName">Change Name</button></p>',
//   data: function(){
//     return {
//       name: 'Karachi'
//     }
//   },
//   methods: {
//     changeName: function(){
//       this.name = 'Mario';
//     }
//   }
// });
//
// new Vue({
//   el: '#vue-app-one'
// });
//
// new Vue({
//   el: '#vue-app-two'
// });




// code 6
// var one = new Vue({
//   el:'#vue-app-one',
//   data:{
//      title: 'Vue App One'
//   },
//   methods:{
//
//   },
//   computed:{
//      greet: function(){
//        return 'Hello from app one:)';
//      }
//   }
// });
//
// var two = new Vue({
//   el:'#vue-app-two',
//   data:{
//      title: 'Vue App two'
//   },
//   methods:{
//      changeTitle: function(){
//        one.title = "Title changed"
//      }
//   },
//   computed:{
//     greet: function(){
//       return 'Yo dudes, this is app 2 speaking to ya:)';
//     }
//   }
// });
// two.title = "Change from Outside";
//
//


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
