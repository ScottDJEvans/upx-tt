import PropTypes from 'prop-types'
import TextInput from "../../../../components/common/text_input";
import {ADD_NEW_PROPERTY_DATA_MOCK} from "./constants";
import * as S from './styles'
import Button from "../../../../components/common/button";

const AddNewPropertySection = ({ handleClick }) => {
    const renderTextFields = (fields) => {
        return fields.map((field) => {
            return (
                <TextInput
                    title={field.title}
                    type={field.type}
                    options={field.options}
                    defaultValue={field.defaultValue}
                    isDisabled={field.isDisabled}
                    additionalText={field.additionalText}
                    additionalInput={field.additionalInput}
                />
            )
        })
    }
    const renderNewPropertyAddition = () => {
        return ADD_NEW_PROPERTY_DATA_MOCK.map((property) => {
            return (
                <>
                    {renderTextFields(property.fields)}
                </>
            )
        })
    }
    const renderNewPropertyButtons = () => {
        return(
            <S.NewPropertyButtonsContainer>
                <Button size='large' color='tertiary' variant='text' onClick={handleClick}>
                    Cancel
                </Button>
                <Button size='large' color='secondary' variant='contained' onClick={handleClick}>
                    Add
                </Button>
            </S.NewPropertyButtonsContainer>
        )
    }
    return (
        <S.Container>
            {renderNewPropertyAddition()}
            {renderNewPropertyButtons()}
        </S.Container>
    )
}

export default AddNewPropertySection

AddNewPropertySection.propTypes = {
    handleClick: PropTypes.func
}