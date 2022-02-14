import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { shouldRenderEnabledIcon } from "./helpers";
import * as S from './styles'
import Tooltip from "../tooltip";

const InteractiveIcon = ({ enabledIcon, disabledIcon, onClick, isDisabled, tooltipDescription }) => {
    const [ isEnabled, setIsEnabled ] = useState(true)

    const handleOnClick = () => {
        setIsEnabled(!isEnabled)
        onClick && onClick()
    }
    const renderIcon = () => {
        if (shouldRenderEnabledIcon(isDisabled, isEnabled)) return <S.Icon src={enabledIcon} alt='enabled interactive icon'/>
        return disabledIcon
            ? <S.Icon src={disabledIcon} alt='disabled interactive icon'/>
            : <S.Icon src={enabledIcon} alt='enabled interactive icon'/>
    }

    const renderTooltip = () => {
        return(
            <S.TooltipContainer>
                <Tooltip description={tooltipDescription} />
            </S.TooltipContainer>
        )
    }

    return(
        <S.Container onClick={handleOnClick}>
            { renderIcon() }
            { renderTooltip() }
        </S.Container>
    )
}

export default InteractiveIcon

InteractiveIcon.defaultProps = {
    disabled: false
}

InteractiveIcon.propTypes = {
    enabledIcon: PropTypes.string.isRequired,
    disabledIcon: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}
