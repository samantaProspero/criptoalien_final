import 'styled-components';
import theme from './theme';

// Define que nosso tema global irá sobrescrever o tema do styled component

declare module 'styled-components'{
  type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType{}
}