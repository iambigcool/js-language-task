// 1.The first one uses finally to execute the code after try...catch :
// try {
//   work work
// } catch (err) {
//   handle errors
// } finally {
//   cleanup the working space
// }
// 2.The second fragment puts the cleaning right after try...catch:
// try {
//   work work
//  } catch (err) {
//    handle errors
//  }
// cleanup the working space
// We definitely need the cleanup after the work, doesn’t matter if there was an error or not.
// Is there an advantage here in using finally or both code fragments are equal? If there is such an advantage, then give an example when it matters.
// answer: finally can help jump out the try...catch
