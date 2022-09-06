export const COLORS = {
  primary: 'hsl(329, 80%, 54%)', 
  secondary: 'hsl(206, 60%, 78%)', 
  blueEsmerald: 'hsl(174, 100%, 37%)', 
  mustardYellow: 'hsl(40, 88%, 60%)',
  sandYellow: 'hsl(50, 68%, 83%)',
  sandBrown: 'hsl(50, 40%, 75%)', 
  purpleBlue: 'hsl(228, 86%, 64%)',
  orangeRed: 'hsl(8, 92%, 57%)', 
  gray: 'hsl(0, 0%, 33%)',
  black: 'hsl(0, 0%, 0%)',
  white: 'hsl(0, 0%, 100%)',
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
  desktopSmall: 1920,
}

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
  desktopAndSmaller: `(max-width: ${BREAKPOINTS.desktopSmall / 16}rem)`,
}