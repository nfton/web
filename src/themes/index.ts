import { darkTheme } from "./dark"
import { lightTheme } from "./light"

// @ts-ignore
export const theme = window.Telegram.WebApp.colorScheme === 'dark' ? darkTheme : lightTheme
