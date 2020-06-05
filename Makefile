.PHONY: start-api
run-api:
	yarn install; yarn run json-server --watch db.json --fks _id


.PHONY: start-admin
run-admin:
	cd admin; yarn install; yarn run start

.PHONY: run-cypress
run-cypress:
	yarn install; yarn run cypress run --headed