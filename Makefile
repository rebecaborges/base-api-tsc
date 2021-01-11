up:
	@docker-compose up -d mongo

api:
	@docker-compose up api

down:
	@docker-compose down

build:
	@docker-compose build

dev:
	npm run dev

test:
	npm run test

eslint:
	npm run eslint