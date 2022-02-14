export const ADD_NEW_PROPERTY_DATA_MOCK = [
    {
        title: 'Color',
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                additionalText: '(name of the proerty given in code)'
            },
            {
                title: 'Display name',
                type: 'standard'
            },
            {
                title: 'Description',
                type: 'large'
            },
            {
                title: 'Property type',
                type: 'dropdown',
                options: [{ value: 'one of', label: 'one of' }]
            },
            {
                title: 'Property control',
                type: 'dropdown',
                options: [{ value: 'select', label: 'select' }],
                additionalText: 'type of control displayed in editor\'s properties panel.  Learn more about control types)'
            },
            {
                title: 'Options',
                type: 'list',
                defaultValue: 'default, inherit, primary, secondary',
                additionalText: '(list options sepafared by comma)'
            },
            {
                title: 'Default value',
                type: 'dropdown',
                options: [
                    { value: 'primary', label: 'primary'},
                    { value: 'secondary', label: 'secondary' }
                ],
                defaultValue: 'primary',
                isDisabled: false,
                additionalInput: true,
                additionalText: 'Rows'
            }
        ],
    }
]
