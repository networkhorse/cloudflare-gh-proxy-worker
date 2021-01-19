# Cloudflare GitHub Proxy Worker
This repository handles the proxying process from Cloudflare to GitHub.io.

## The problem
This was essential since I am trying to eliminate the need to host my own websites, and GitHub will only let you sit on one subdomain at `<username>.github.io`.

## The solution
GitHub lets you have `<username>.github.io/<repository>/*`, such as `networkhorse.github.io/preprocess.uk/index.html`.

My solution involves reading the requested host within a [Cloudflare Worker](https://workers.cloudflare.com/), slapping it in the repository name section, and then again slapping the path at the end.

If you plan on using this too, you'll need to set up some Worker Routes for your domain.
![Example Cloudflare Worker Routes](https://raw.githubusercontent.com/networkhorse/cloudflare-gh-proxy-worker/main/cloudflare-worker-routes-example.png)

## The result
Go take a look at https://preprocess.uk/ (which will proxy to https://networkhorse.github.io/preprocess.uk/).
