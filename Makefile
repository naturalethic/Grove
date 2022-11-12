kit-build:
	rm -rf package/kit/dist
	esbuild package/kit/src/index.ts package/kit/src/**/*.ts* --outdir=package/kit/dist --format=esm
	tsc -p package/kit --declaration --emitDeclarationOnly --outDir package/kit/dist

cms-dev:
	cd package/cms && npx tangerine dev
