build:
	rm -rf dist
	esbuild src/index.ts src/**/*.ts* --outdir=dist --format=esm
	tsc --declaration --emitDeclarationOnly --outDir dist
