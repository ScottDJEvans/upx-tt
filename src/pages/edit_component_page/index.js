import React, { useState } from 'react'
import Title from "../../components/common/title";
import Subtitle from "../../components/common/subtitle";
import InteractiveIcon from "../../components/common/interactive_icon";
import VisibilityVisibleIcon from '../../assets/icons/visibility-visible.svg'
import VisibilityHiddenIcon from '../../assets/icons/visibility-hidden.svg'
import GearIcon from '../../assets/icons/gear.svg'
import PlusIcon from '../../assets/icons/plus-icon.svg'
import PropertyDropdown from "../../components/property_dropdown";
import * as S from './styles'
import TextInput from "../../components/common/text_input";
import AddNewPropertySection from './children/add_new_property_section'
import {PROPERTIES_DATA_MOCK } from "./constants";
import Button from "../../components/common/button";

const EditComponentPage = () => {
    const [isAddingProperty, setIsAddingProperty] = useState(false)

    const renderTitleSection = () => {
        return(
            <S.TitleContainer>
                <Title text='Button' />
                <InteractiveIcon
                    enabledIcon={VisibilityVisibleIcon}
                    disabledIcon={VisibilityHiddenIcon}
                    tooltipDescription='Toggle component visibility in library'
                />
                <InteractiveIcon enabledIcon={GearIcon} tooltipDescription='Component settings' />
            </S.TitleContainer>
        )
    }
    const renderPreviewSection = () => {
        return(
            <S.PreviewSectionContainer>
                <Subtitle text='Component Preview' />
                <Button color={'primary'} fullWidth variant='contained' size='large'>
                    SIGN UP
                </Button>
            </S.PreviewSectionContainer>
        )
    }
    const renderTextFields = (fields) => {
        return fields.map((field, index) => {
            return (
                <TextInput
                    key={`text-field-${index}`}
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
    const renderTextFieldsFromData = () => {
        return PROPERTIES_DATA_MOCK.map((property, index) => {
            return(
                <PropertyDropdown
                    title={property.title}
                    isDisabled={property.isDisabled}
                    focusRipple={property.focusRipple}
                    key={`property-dropdown-${index}`}
                    tooltips={property.tooltips}
                >
                    {renderTextFields(property.fields)}
                </PropertyDropdown>
            )
        })
    }
    const renderNewPropertyAddition = () => {
        if(!isAddingProperty) return null
        return (
            <S.NewPropertyContainer>
                <AddNewPropertySection handleClick={() => setIsAddingProperty(false)} />
            </S.NewPropertyContainer>
        )
    }
    const renderPropertiesSectionHeader = () => {
        return(
            <S.PropertiesHeaderContainer>
                <Subtitle text='Properties' />
                <Button
                    color='secondary'
                    variant='text'
                    size='large'
                    onClick={()=> setIsAddingProperty(true)}>
                    <img src={PlusIcon} /> Add new property
                </Button>
            </S.PropertiesHeaderContainer>
        )
    }
    const renderPropertiesSection = () => {
        return(
            <>
                { renderPropertiesSectionHeader() }
                { renderNewPropertyAddition() }
                { renderTextFieldsFromData() }
            </>
        )
    }
    return(
        <S.Container>
            <S.ContentContainer>
                { renderTitleSection() }
                { renderPreviewSection() }
                { renderPropertiesSection() }
            </S.ContentContainer>
        </S.Container>
    )
}
export default EditComponentPage