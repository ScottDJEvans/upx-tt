export function shouldOpenFromTitleClick(isOpen, focusRipple) {
    return !isOpen && focusRipple
}

export function shouldCloseDisabledProperty(isDisabled, focusRipple) {
    return isDisabled && focusRipple
}
