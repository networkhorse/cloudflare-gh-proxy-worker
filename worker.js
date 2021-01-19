addEventListener('fetch', event => {
  let request = event.request
  let url = new URL(request.url)
  
  // Determine the GitHub repository based on the host requested
  let repository = url.host;
  if (repository === "gh-proxy.networkhorse.workers.dev") {
    repository = "www.preprocess.uk"
  }

  // If the host starts with "www." then we remove that
  if (repository.startsWith("www.")) {
    repository = repository.substring(4)
    console.log("rewriting", "www." + repository, "to", repository)
  }

  // Maintain the path if it's there, else use /
  // (to ensure we access the GH Directory)
  let path = (url.pathname ? url.pathname : "/")
  console.log(repository, path)

  // Create the full github.io URL
  let fetchUrl = "https://networkhorse.github.io/" + repository + path
  console.log(fetchUrl)

  // Respond with the content from github.io
  event.respondWith(
    fetch(fetchUrl)
  )
})
