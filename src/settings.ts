window.addEventListener('DOMContentLoaded', () => {
	// Select the element that should be moved
	const settingsButton = document.querySelector('.app-photos .app-navigation__footer button')

	// Target Photos navigation list
	const appNavList = document.querySelector('.app-photos .app-navigation__list')

	if (!settingsButton || !appNavList) {
		return
	}

	// Create <li> element
	const entryWrapper = document.createElement('li')
	entryWrapper.classList.add('app-navigation-entry-wrapper')

	// Create wrapper <div>
	const entry = document.createElement('div')
	entry.classList.add('app-navigation-entry')

	// Move the button into the wrapper div
	entry.appendChild(settingsButton)

	// Put the wrapper div into the <li>
	entryWrapper.appendChild(entry)

	// Append the <li> to the navigation list
	appNavList.appendChild(entryWrapper)
})
