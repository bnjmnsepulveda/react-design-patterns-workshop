REACT_WORKSHOP_BACKEND=react-workshop-backend

run:
	npm run start

set-node12:
	nvm use 12

install-server:
	npm install -g json-server

run-server:
	json-server --watch db.json

push-to-master:
	git checkout master
	git pull origin master
	git merge $(b)
	git push origin master
	git checkout $(b)

build-server:
	docker build -t $(REACT_WORKSHOP_BACKEND) .

docker-run:
	docker run -d --rm -p 3000:3000 --name $(REACT_WORKSHOP_BACKEND) $(REACT_WORKSHOP_BACKEND)
	docker ps

stop-container:
	docker stop $(REACT_WORKSHOP_BACKEND)

test-docker: stop-container build-server docker-run