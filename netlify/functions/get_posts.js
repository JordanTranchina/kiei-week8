let firebase = require('./firebase')

exports.handler = async function (event) {
  let queryStringUserId = event.queryStringParameters.userId
  console.log(event);
  let postsData = []
  console.log("ladies and gentlemen we have a backend");

  let db = firebase.firestore()

  let querySnapshot = await db.collection('posts').get()
  let postsList = querySnapshot.docs //language of firebase

  for (let i = 0; i < postsList.length; i++) {
    let postId = postsList[i].id
    let post = postsList[i].data() //translate into user friendly lanaguag of JSON
    console.log(post);
    let username = post.username
    let imageUrl = post.imageUrl
    postsData.push({
      id: postId,
      username: username,
      imageUrl: imageUrl
    })
  }
  console.log(postsList);


  // Retrieve posts from Firestore; for each post, construct
  // a new Object that contains the post's id, username, imageUrl,
  // and number of likes. Add the newly created Object to the
  // postsData Array.

  return {
    statusCode: 200,
    body: JSON.stringify(postsData)
  }
}