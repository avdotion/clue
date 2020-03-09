# Component System

## Component System major rules
* All reusable components should be located in `components` directory
* Each component must be independent of a widget and must solve a common abstract problem
* Component styles must avoid positional properties, nevertheless it is recommended to use the _Grid_ component
* Component styles must avoid font properties, nevertheless it is recommended to use the _Typo_ component
* Reusable components may be expanded and modified at any moment
* Components should not have outer margins in common cases, opposite the ones should be considered on a higher level
* Custom indents or colours should not be used at all, it is recommended to use the read-only sets
* Each component should have `Readme.md` in English describing behaviour, goal and examples
