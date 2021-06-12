enum Theme {
    DARK = 'theme-dark',
    LIGHT = 'theme-light',
    TWILIGHT = 'theme-twilight',
}

const CALCULATOR_THEME = 'calculator-theme';

export class Toggler {
    toggleDark: HTMLElement = document.querySelector('#toggle-dark') as HTMLElement;
    toggleLight: HTMLElement = document.querySelector('#toggle-light') as HTMLElement;
    toggleTwilight: HTMLElement = document.querySelector('#toggle-twilight') as HTMLElement;

    constructor(public elem: HTMLElement) {
        this.toggleDark.addEventListener('click', this.useDarkTheme);
        this.toggleLight.addEventListener('click', this.useLightTheme);
        this.toggleTwilight.addEventListener('click', this.useTwilightTheme);

        this.setInitialTheme();
    }

    setInitialTheme = (): void => {
        const storedTheme = localStorage.getItem(CALCULATOR_THEME);

        // set initial theme to previous user selection, prefers-color-scheme,
        // or default to dark
        if (storedTheme === Theme.TWILIGHT) {
            this.toggleTwilight.click();
        } else if (
            storedTheme === Theme.LIGHT ||
            (!storedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)
        ) {
            this.toggleLight.click();
        } else {
            this.toggleDark.click();
        }
    };

    updateTheme = (): void => {
        this.elem.classList.remove(Theme.DARK);
        this.elem.classList.remove(Theme.LIGHT);
        this.elem.classList.remove(Theme.TWILIGHT);

        this.elem.classList.add(localStorage.getItem(CALCULATOR_THEME) ?? Theme.DARK);
    };

    useDarkTheme = (): void => {
        localStorage.setItem(CALCULATOR_THEME, Theme.DARK);
        this.updateTheme();
    };

    useLightTheme = (): void => {
        localStorage.setItem(CALCULATOR_THEME, Theme.LIGHT);
        this.updateTheme();
    };

    useTwilightTheme = (): void => {
        localStorage.setItem(CALCULATOR_THEME, Theme.TWILIGHT);
        this.updateTheme();
    };
}
