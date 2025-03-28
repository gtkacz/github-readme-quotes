export interface Theme {
  quote: string;
  author: string;
  background: string;
  symbol: string;
}

export interface CustomColors {
  quote?: string;
  author?: string;
  background?: string;
  symbol?: string;
}

export const themes: Record<string, Theme> = {
  default: {
    quote: '333',
    author: '2f80ed',
    background: 'fffefe',
    symbol: '4c71f2'
  },
  defaultDarkModeSupport: {
    quote: '9f9f9f',
    author: 'fff',
    background: '151515',
    symbol: '79ff97'
  },
  'chartreuse-dark': {
    quote: 'fff',
    author: '7fff00',
    background: '000',
    symbol: '00AEFF'
  },
  radical: {
    quote: 'a9fef7',
    author: 'fe428e',
    background: '141321',
    symbol: 'f8d847'
  },
  merko: {
    quote: '68b587',
    author: 'abd200',
    background: '0a0f0b',
    symbol: 'b7d364'
  },
  gruvbox: {
    quote: '8ec07c',
    author: 'fabd2f',
    background: '282828',
    symbol: 'fe8019'
  },
  tokyonight: {
    quote: '38bdae',
    author: '70a5fd',
    background: '1a1b27',
    symbol: 'bf91f3'
  },
  catppuccin: {
    quote: '96CDFB',
    author: 'D9E0EE',
    background: '161320',
    symbol: 'DDB6F2'
  },
  catppuccin_latte: {
    quote: '179299',
    author: '4c4f69',
    background: 'eff1f5',
    symbol: '8839ef'
  },
  catppuccin_frappe: {
    quote: '81c8be',
    author: 'c6d0f5',
    background: '303446',
    symbol: 'ca9ee6'
  },
  catppuccin_macchiato: {
    quote: '8bd5ca',
    author: 'cad3f5',
    background: '24273a',
    symbol: 'c6a0f6'
  },
  catppuccin_mocha: {
    quote: '94e2d5',
    author: 'cdd6f4',
    background: '1e1e2e',
    symbol: 'cba6f7'
  },
  algolia: {
    quote: '00ADFE',
    author: 'FEFEFE',
    background: '050F2C',
    symbol: '26BB85'
  },
  monokai: {
    quote: 'EA1F6A',
    author: 'CFCFC9',
    background: '272822',
    symbol: 'E18905'
  },
  dracula: {
    quote: 'F8F8F2',
    author: '6272A4',
    background: '282A36',
    symbol: 'FF79c6'
  },
  nord: {
    quote: 'D8DEE9',
    author: '4C566A',
    background: '2E3440',
    symbol: '88C0D0'
  },
  github: {
    quote: 'FFFFFF',
    author: '4C566A',
    background: '0D1117',
    symbol: '43C293'
  },
  github_dark: {
    quote: "C3D1D9",
    author: "58A6FF",
    background: "0D1117",
    symbol: "1F6FEB",
  },
  graywhite: {
    quote: '24292E',
    author: '24292E"',
    background: 'FFFFFF',
    symbol: '24292E'
  },
  moonlight: {
    quote: 'F8F8F8',
    author: 'FF757F',
    background: '222436',
    symbol: '599DFF'
  },
  hackerman: {
    quote: '00B3D6',
    author: '00B3D6',
    background: '000000',
    symbol: '00B3D6'
  },
  shadow_red: {
    quote: '9A0000',
    author: '9A0000',
    background: '151515',
    symbol: '4F0000'
  },
  shadow_green: {
      quote: '007A00',
      author: '007A00',
      background: '151515',
      symbol: '003D00'
  },
  shadow_blue: {
      quote: '00779A',
      author: '00779A',
      background: '151515',
      symbol: '004490'
  }
};

export const renderTheme = (theme: keyof typeof themes, customColors?: CustomColors) => {
  // Get base theme - check if theme exists in the themes object and is neither default light nor dark mode theme
  let baseTheme: Theme;
  if (themes[theme] && theme !== 'light' && theme !== 'dark') {
    baseTheme = themes[theme];
  } else {
    // Else, return the default (light) theme with dark mode support
    baseTheme = themes.default;
  }

  // If no custom colors are provided, return the base theme
  if (!customColors) {
    return baseTheme;
  }

  // Create a custom theme by overriding base theme with any provided custom colors
  return {
    quote: customColors.quote || baseTheme.quote,
    author: customColors.author || baseTheme.author,
    background: customColors.background || baseTheme.background,
    symbol: customColors.symbol || baseTheme.symbol
  };
};
