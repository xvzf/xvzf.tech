# My personal landing page
[![Docker Repository on Quay](https://quay.io/repository/xvzf/xvzf.tech/status "Docker Repository on Quay")](https://quay.io/repository/xvzf/xvzf.tech)

The UserInterface is based on [vuejs](https://vuejs.org/) and served using the http server integrated in [Golang](https://golang.org/).
Everything is compiled (even static files!) into a single binary using [Packr](https://github.com/gobuffalo/packr)!

## Infrastructure
The single binary is packed into a small Docker image (~15Mbytes total) which gets deployed to [Kubernetes](https://kubernetes.io/)
