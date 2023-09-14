# shellcheck shell=bash

task.prettier:check() {
	./node_modules/.bin/prettier --check "${@:-.}"
}

task.prettier:fix() {
	./node_modules/.bin/prettier --write "${@:-.}"
}
