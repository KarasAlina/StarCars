export default {
	build: {
		html: "build",
		scripts: "build/media/js/",
		styles: "build/media/css/",
		images: "build/media/img/",
		fonts: "build/media/fonts/",
		sprites: "build/media/img/sprites/",
		svg: "build/media/svg/",
		videos: "build/media/video/"
	},
	src: {
		templates: "./src/templates/",
		nunj: "src/templates/pages/**/*.nunj",
		scripts: "src/media/js/index.js",
		styles: "src/media/sass/screen.sass",
		images: "src/media/img/**/*.*",
		imagesInline: "src/media/img/inline/",
		fonts: "src/media/fonts/**/*.*",
		sprites: "src/media/img/sprites/*.png",
		svg: "src/media/svg/**/*.svg",
		videos: "src/media/video/**/*.*"
	},
	watch: {
		nunj: ["src/templates/**/*.nunj", "global-data.json"],
		scripts: "src/media/js/**/*.js",
		styles: "src/**/*.sass",
		images: "src/media/img/**/*.*",
		fonts: "src/media/fonts/**/*.*",
		sprites: "src/media/img/sprites/*.png",
		svg: "src/media/svg/**/*.svg"
	},
	clean: "build/"
};
