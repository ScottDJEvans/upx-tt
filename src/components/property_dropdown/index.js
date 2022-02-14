import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Heading from "../common/heading";
import InteractiveIcon from "../common/interactive_icon";
import VisibilityVisibleIcon from '../../assets/icons/visibility-visible.svg'
import VisibilityHiddenIcon from '../../assets/icons/visibility-hidden.svg'
import TrashIcon from '../../assets/icons/trash.svg'
import PlusIcon from '../../assets/icons/plus.svg'
import CloseIcon from '../../assets/icons/action-close.svg'
import * as S from './styles'
import {shouldOpenFromTitleClick, shouldCloseDisabledProperty } from "./helpers";

const PropertyDropdown = ({ title, isDisabled, children, focusRipple, tooltips }) => {
    console.log( title === 'New Property' && 'tooltips', tooltips);
    const [isOpen, setIsOpen] = useState(false)

    const handleTitleClick = () => {
        if (shouldOpenFromTitleClick(isOpen, focusRipple)) setIsOpen(true)
    }
    const handleRippleClick = () => {
        if (shouldCloseDisabledProperty(isDisabled, focusRipple)) setIsOpen(false)
    }

    const renderTitleSection = () => {
        return(
            <S.TitleContainer onClick={() => handleTitleClick()}>
                <Heading text={title} isDisabled={isDisabled} />
                <S.IconContainer>
                    <InteractiveIcon
                        enabledIcon={VisibilityVisibleIcon}
                        disabledIcon={VisibilityHiddenIcon}
                        isDisabled={isDisabled}
                        tooltipDescription={tooltips.visibility}
                    />
                    { isOpen && <InteractiveIcon enabledIcon={TrashIcon} isDisabled={isDisabled} tooltipDescription={tooltips.delete} /> }
                </S.IconContainer>
                <S.CloseIcon isOpen={isOpen}>
                    <InteractiveIcon enabledIcon={PlusIcon} disabledIcon={CloseIcon} isDisabled={isOpen} onClick={() => setIsOpen(!isOpen)}/>
                </S.CloseIcon>
            </S.TitleContainer>
        )
    }
    const renderInputSection = () => {
        return (
            <S.InputContainer isOpen={isOpen} onClick={() => handleRippleClick()}>
                {children}
            </S.InputContainer>
        )
    }
    return(
        <S.Container isDisabled={isDisabled}>
            { renderTitleSection() }
            { renderInputSection() }
        </S.Container>
    )
}

export default PropertyDropdown

PropertyDropdown.defaultProps = {
    isDisabled: false,
    focusRipple: true,
    tooltips: {
        visibility: '',
        delete: ''
    }
}

PropertyDropdown.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any,
    isDisabled: PropTypes.bool,
    focusRipple: PropTypes.bool,
    tooltips: PropTypes.object
}