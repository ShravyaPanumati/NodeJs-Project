The developer commits Node JS code to GitHub, webhook triggers the Jenkins pipeline, and Jenkins creates the docker image and pushes it to the GitHub Jenkins pipeline. The Jenkins creates the docker image and pushes it to the DockerHub. Now this  docker image is again pulled and deployed in another EC2 server and then finally post-deployment testing is done.
