export function fetchArticles() {
  // simulating an api call
  return new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 5) 
    num === 5 ? reject("server not loaded") : resolve("server loaded")

})
}
