// // // Object literals
// // // let x;

// // // const todo = { id: 1, name: 'buy milk', completed: false };

// // // // const person = {
// // // //   address: {
// // // //     coords: {
// // // //       lat: 42.2342,
// // // //       lng: 23.23423,
// // // //     }
// // // //   }
// // // // }

// // // //! spread operatore and object
// // // const obj1 = { a: 1, b: 2 };

// // // const obj2 = { c: 3, d: 4 };

// // // const obj3 = { ...obj1, ...obj2 };
// // // const obj4 = Object.assign({}, obj1, obj2);
// // // x = obj3;

// // // const todos = [
// // //   { id: 1, name: 'lkjlkjN' },
// // //   { id: 2, name: 'ljljlj' },
// // //   { id: 3, name: 'lkj;ljkl ljklkj' },
// // // ];

// // // x = todos[2].name; // accessing the propertyies with dot and bracket notation

// // // x = Object.keys(todo); // Object. key methode values and entries

// // // x = Object.keys(todo).length;

// // // x = Object.values(obj1); // Object.values

// // // x = Object.entries(todos); // Object.entries

// // // x = todo.hasOwnProperty('name'); // hasOwnProperty // to check if a property exists on the object directly, not inherited
// // // console.log(x);

// // //! Destructuring & Naming

// // const firstName = 'John';
// // const lastName = 'Doe';
// // const age = 30;

// // const person = {
// //   firstName,
// //   lastName,
// //   age,
// // };

// // // console.log(person.age);

// // // // Destructuring
// // // const { firstName: fn, lastName: ln } = person;
// // // console.log(fn, ln);

// // const post = {
// //   id: 1,
// //   title: 'title',
// //   body: 'this is a body',
// //   author: 'John',
// // };

// // const x = JSON.stringify(post);
// // const s = JSON.parse(x);
// // console.log(s, x);

// const gitHub = {
//   login: 'ibrahimdevop21',
//   id: 142365595,
//   node_id: 'U_kgDOCHxTmw',
//   avatar_url: 'https://avatars.githubusercontent.com/u/142365595?v=4',
//   gravatar_id: '',
//   url: 'https://api.github.com/users/ibrahimdevop21',
//   html_url: 'https://github.com/ibrahimdevop21',
//   followers_url: 'https://api.github.com/users/ibrahimdevop21/followers',
//   following_url:
//     'https://api.github.com/users/ibrahimdevop21/following{/other_user}',
//   gists_url: 'https://api.github.com/users/ibrahimdevop21/gists{/gist_id}',
//   starred_url:
//     'https://api.github.com/users/ibrahimdevop21/starred{/owner}{/repo}',
//   subscriptions_url:
//     'https://api.github.com/users/ibrahimdevop21/subscriptions',
//   organizations_url: 'https://api.github.com/users/ibrahimdevop21/orgs',
//   repos_url: 'https://api.github.com/users/ibrahimdevop21/repos',
//   events_url: 'https://api.github.com/users/ibrahimdevop21/events{/privacy}',
//   received_events_url:
//     'https://api.github.com/users/ibrahimdevop21/received_events',
//   type: 'User',
//   site_admin: false,
//   name: 'Ibrahimdevop21',
//   company: null,
//   blog: 'https://ibrahimdevop21.github.io/portfolio/index.html',
//   location: null,
//   email: null,
//   hireable: null,
//   bio: '👋 Aspiring Web Dev | Retail-Wholesale Pro 🛍️ turned web development enthusiast.\r\n💻 Self-learner, coding explorer.\r\n🌐 Bridging retail ops and web',
//   twitter_username: 'ibrahimdevop212',
//   public_repos: 13,
//   public_gists: 0,
//   followers: 3,
//   following: 15,
//   created_at: '2023-08-16T01:19:59Z',
//   updated_at: '2024-02-27T22:22:50Z',
// };

// const str = JSON.stringify(gitHub);
// const obj = JSON.parse(str);
// // console.log(obj);
// console.log(str);

// todo: step 1: create an array of objects
const library = [
  {
    title: 'The JS way',
    author: 'John Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The CSS way',
    author: 'Jane Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The HTML way',
    author: 'Jack Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
// todostep 2 change the values of the status object ro read
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// this is more efficient
for (let i = 0; i < library.length; i++) {
  library[i].status.read = true;
}
// console.log(library[0].status.own);

// todo: step 3: get the title of the first book variable and change it to the title of the first book
const { title: firstBook } = library[0];

// ! note that worked but it did not altered the original library

// console.log(library);

//todo: step 4 turn the library array into a string

const str = JSON.stringify(library);

console.log(str);
