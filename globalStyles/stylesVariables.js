export const colors = {
  main: '#89b0ae', // bone
  black: '#111111', // black
  white: '#fafaff',
  second: '#ffd6ba',
	third: '#555b6e',
	main_light: '#bee3db',
	grey_light: '#f2f2f2'
}

export const fonts = {
  font_system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
	font_mono: 'jetbrains mono, monaco, helvetica',
	h1: '36px',
	h2: '24px',
	h3: '18px',
	p: '14px',
	small: '12px',
}

// media queries
const mediaSize = {
	mobile: '420px',
	tablet: '620px',
	miniDesktop: '920px',
	littleDesktop: '1315px',
	desktop: '1440px',
};

export const mediaQueries = {
	mobile: `(max-width: ${mediaSize.mobile})`,
	tablet: `(max-width: ${mediaSize.tablet})`,
	miniDesktop: `(max-width: ${mediaSize.miniDesktop})`,
	littleDesktop: `(max-width: ${mediaSize.littleDesktop})`,
	desktop: `(max-width: ${mediaSize.desktop})`,
};

export const width = {
	normal: '370px',
	mobile: '165px'
};