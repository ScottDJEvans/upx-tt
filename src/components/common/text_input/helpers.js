export function isContainerSingleLine(type) {
    return (type === 'standard' || type === 'dropdown')
}

export function hasAdditionalTextOnly(additionalText, additionalInput) {
    return additionalText && !additionalInput
}