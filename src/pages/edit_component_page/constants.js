export const PROPERTIES_DATA_MOCK = [
    {
        title: 'Color',
        tooltips: {
          visibility: 'Hide property',
          delete: 'Delete property'
        },
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'Color'
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
                options: [{ value: 'select', label: 'select' }]
            },
            {
                title: 'Options',
                type: 'list',
                defaultValue: 'default, inherit, primary, secondary',
                additionalText: '(list options separared by comma)'
            },
            {
                title: 'Default value',
                type: 'dropdown',
                options: [
                    { value: 'primary', label: 'primary'},
                    { value: 'secondary', label: 'secondary' }
                ],
                defaultValue: 'primary'
            }
        ],
    },
    {
        title: 'Children',
        tooltips: {
            visibility: 'Hide property',
            delete: 'Delete property'
        },
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'Children'
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
                options: [{ value: 'node', label: 'node' }]
            },
            {
                title: 'Property control',
                type: 'dropdown',
                options: [{ value: 'textarea', label: 'textarea' }],
                additionalInput: true,
                additionalText: 'Rows'
            },
            {
                title: 'Default value',
                type: 'list'
            }
        ],
    },
    {
        title: 'Disabled',
        tooltips: {
            visibility: 'Hide property',
            delete: 'Delete property'
        },
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'Disabled'
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
                options: [{ value: 'boolean', label: 'boolean' }]
            },
            {
                title: 'Default value',
                type: 'toggle',
                options: [
                    { value: 'true', label: 'true'},
                    { value: 'false', label: 'false' }
                ],
                defaultValue: 'true'
            }
        ],
    },
    {
        title: 'Disable focus ripple',
        tooltips: {
            visibility: 'Hide property',
            delete: 'Delete property'
        },
        isDisabled: true,
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'Disable focus ripple',
                isDisabled: true
            },
            {
                title: 'Display name',
                type: 'standard',
                isDisabled: true
            },
            {
                title: 'Description',
                type: 'large',
                isDisabled: true
            },
            {
                title: 'Property type',
                type: 'dropdown',
                options: [{ value: 'boolean', label: 'boolean' }],
                isDisabled: true
            },
            {
                title: 'Default value',
                type: 'toggle',
                options: [
                    { value: 'true', label: 'true'},
                    { value: 'false', label: 'false' }
                ],
                defaultValue: 'true',
                isDisabled: true
            }
        ],
    },
    {
        title: 'Disable ripple',
        tooltips: {
            visibility: 'Hide property',
            delete: 'Delete property'
        },
        isDisabled: true,
        focusRipple: false,
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'Color',
                isDisabled: true
            },
            {
                title: 'Display name',
                type: 'standard',
                isDisabled: true
            },
            {
                title: 'Description',
                type: 'large',
                isDisabled: true
            },
            {
                title: 'Property type',
                type: 'dropdown',
                options: [{ value: 'boolean', label: 'boolean' }],
                isDisabled: true
            },
            {
                title: 'Default value',
                type: 'toggle',
                options: [
                    { value: 'true', label: 'true'},
                    { value: 'false', label: 'false' }
                ],
                defaultValue: 'true',
                isDisabled: true
            }
        ],
    },
    {
        title: 'Full width',
        tooltips: {
            visibility: 'Hide property',
            delete: 'Delete property'
        },
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'Full width'
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
                options: [{ value: 'boolean', label: 'boolean' }]
            },
            {
                title: 'Default value',
                type: 'toggle',
                options: [
                    { value: 'true', label: 'true'},
                    { value: 'false', label: 'false' }
                ],
                defaultValue: 'true'
            }
        ],
    },
    {
        title: 'Mini',
        tooltips: {
            visibility: 'Hide property',
            delete: 'Delete property'
        },
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'Mini'
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
                options: [{ value: 'boolean', label: 'boolean' }]
            },
            {
                title: 'Default value',
                type: 'toggle',
                options: [
                    { value: 'true', label: 'true'},
                    { value: 'false', label: 'false' }
                ],
                defaultValue: 'true'
            }
        ],
    },
    {
        title: 'New Property',
        tooltips: {
            visibility: 'Hide property',
            delete: 'Delete property'
        },
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'New property'
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
                options: [{ value: 'boolean', label: 'boolean' }]
            },
            {
                title: 'Default value',
                type: 'toggle',
                options: [
                    { value: 'true', label: 'true'},
                    { value: 'false', label: 'false' }
                ],
                defaultValue: 'true'
            }
        ],
    },
    {
        title: 'Size',
        tooltips: {
            visibility: 'Hide property',
            delete: 'Delete property'
        },
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'Size'
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
                options: [{value: 'one of', label: 'one of'}]
            },
            {
                title: 'Property control',
                type: 'dropdown',
                options: [{value: 'select', label: 'select'}]
            },
            {
                title: 'Options',
                type: 'list',
                defaultValue: 'default, small, medium, large',
                additionalText: '(list options separared by comma)'
            },
            {
                title: 'Default value',
                type: 'dropdown',
                options: [
                    {value: 'primary', label: 'primary'},
                    {value: 'secondary', label: 'secondary'}
                ],
                defaultValue: 'primary'
            },
        ]
    },
    {
        title: 'Variant',
        tooltips: {
            visibility: 'Hide property',
            delete: 'Delete property'
        },
        fields: [
            {
                title: 'Property name',
                type: 'standard',
                defaultValue: 'Variant'
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
                options: [{ value: 'select', label: 'select' }]
            },
            {
                title: 'Options',
                type: 'list',
                defaultValue: 'default, text, outlained, contained',
                additionalText: '(list options separared by comma)'
            },
            {
                title: 'Default value',
                type: 'dropdown',
                options: [
                    { value: 'contained', label: 'contained'},
                    { value: 'secondary', label: 'secondary' }
                ],
                defaultValue: 'contained'
            }
        ],
    }
]
