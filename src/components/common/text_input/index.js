import PropTypes from 'prop-types'
import Subheading from "../subheading";
import * as S from './styles'

const TextInput = ({ title, type, defaultValue, options, isDisabled, additionalText, additionalInput }) => {
    const renderDropdownTextInput = () => {
        return(
            <>
                <S.DropdownInput title={title}>
                    {options.map((option, index) => {
                        const selected = option.value === defaultValue
                        return <option key={index} value={option.value} defaultValue={selected}>{option.label}</option>
                    })}
                </S.DropdownInput>
                { additionalInput && <S.AdditionalDropdownTextInput placeholder={additionalText}/> }
            </>
        )
    }

    const renderToggleTextInput = () => {
        return null
        // Extract out to separate child component
        return options.map((option, index) => {
            return (
                <>
                    <S.ToggleTextInput type='radio' name={option.label} value={option.value}/>
                    <p>{option.label}</p>
                </>
            )
        })
    }

    const renderAdditionalText = () => {
        if (additionalInput) return null
        return <S.AdditionalText>{additionalText}</S.AdditionalText>
    }

    const renderTextInput = () => {
        if(type === 'standard') return <S.StandardTextInput isDisabled={isDisabled}  defaultValue={defaultValue} />
        if(type === 'large') return <S.LargeTextInput isDisabled={isDisabled}  defaultValue={defaultValue} />
        if(type === 'list') return <S.ListTextInput isDisabled={isDisabled}  defaultValue={defaultValue} />
        if(type === 'dropdown') return renderDropdownTextInput()
        if(type === 'toggle') return renderToggleTextInput()
        return null
    }

    const renderTextInputWithLabel = () => {
        return(
            <S.TextInputContainer type={type} additionalText={additionalText} additionalInput={additionalInput}>
                <Subheading text={title} isDisabled={isDisabled} />
                { renderTextInput() }
            </S.TextInputContainer>
        )
    }

    return(
        <>
            { renderTextInputWithLabel() }
            { renderAdditionalText() }
        </>
    )
}

export default TextInput

TextInput.defaultProps = {
    isDisabled: false,
    additionalInput: false,
    additionalText: null
}

TextInput.propTypes = {
    defaultValue: PropTypes.string,
    isDisabled: PropTypes.bool,
    title: PropTypes.string,
    options: PropTypes.array,
    additionalText: PropTypes.string,
    additionalInput: PropTypes.bool,
    type: PropTypes.oneOf(['standard', 'large', 'list', 'dropdown', 'toggle'])
}