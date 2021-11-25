run:
	npm run start

set-node12:
	nvm use 12

run-server:
	json-server --watch db.json

push-to-master:
	git checkout master
	git pull origin master
	git merge $(b)
	git push origin master