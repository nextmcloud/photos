window.addEventListener('DOMContentLoaded', () => {
    const settingsButton = document.querySelector(
        '.app-photos .app-navigation__footer button'
    )

    const appNavList = document.querySelector(
        '.app-photos .app-navigation__list'
    )

    if (!settingsButton || !appNavList) {
        return
    }

    const entryWrapper = document.createElement('li')
    entryWrapper.classList.add('app-navigation-entry-wrapper')

    const entry = document.createElement('div')
    entry.classList.add('app-navigation-entry')
    entry.appendChild(settingsButton)
    entryWrapper.appendChild(entry)
    appNavList.appendChild(entryWrapper)
})
