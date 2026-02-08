This project uses a design token system defined in variables.css to keep styles consistent and make theming easier.

## Token Layers ##

Primitive tokens store raw values and are not used directly in components:

Colors (e.g. neutral shades, accent color)

Semantic tokens describe how a value is used in the UI:

--color-bg

--color-text

--color-border

--color-accent

--nav-bg

--surface-glass

Components reference semantic tokens so they automatically adapt to theme changes.

## Light & Dark Themes ##

Themes are controlled using a data-theme attribute on the <html> element:

:root[data-theme="light"] { ... }
:root[data-theme="dark"] { ... }


Light theme is the default

Dark theme overrides only semantic tokens

Components update automatically without duplicated styles

Spacing & Typography Tokens

Spacing tokens use rem units for responsive scaling:

--space-xs through --space-xxxl

Typography tokens define global font usage:

--font-display (Playfair Display)

--font-body (Inter)

Benefits

Consistent design across pages

Simple light/dark theme switching

Easier maintenance and scalability

Clear separation of design intent and implementation

♿ Reduced Motion Support

The site respects user motion preferences using:

@media (prefers-reduced-motion: reduce)


Decorative animations and transitions are reduced or removed, while functional motion (focus states and keyboard navigation) is preserved.


## Theme Dropdown ##
* What does viewBox="0 0 24 24" control?

The view box controls the width and height of the drawing. It can scale to any size.

* Why is currentColor more flexible than hard coded colors?

Because as a variable, the SVG can change color easily in the different modes and states without needing a bunch of duplicates.

* If you used path, what does the d attribute describe?

The d attribute is made up of commands that describe how to draw the image like M to move to position, L to draw a straight line, and Z to close path

* Icon design Why does your System icon look the way it does? What idea is it communicating?

I chose my icons because they are commonly used and understood. The sun icon indicates bright = light mode. The moon indicates dark = dark mode. The split indicates either = OS preference.

* System logic Explain how your code handles System differently from Light and Dark.

Light and Dark directly sets the site theme, while System dynamically applies light or dark based on the user’s operating system preference and updates automatically if that preference changes.

* Unexpected learning One thing that surprised you about SVGs or dropdown behavior.

The fact that SVGs can take variables as colors??? So cool. I really like that I don't need to have the image in every color saved in my assets folder.
