import PropTypes from 'prop-types'
import * as S from './styles'

const Button = ({ fullWidth, children, variant, size, color, onClick }) => {
    if(variant === 'contained') return (
        <S.ContainedButton fullWidth={fullWidth} size={size} color={color} onClick={onClick}>{children}</S.ContainedButton>
    )
    if(variant === 'text') return (
        <S.TextButton fullWidth={fullWidth} size={size} color={color} onClick={onClick}>{children}</S.TextButton>
    )
 return(
     <S.Button fullWidth={fullWidth} size={size} color={color} onClick={onClick}>{ children }</S.Button>
 )
}

export default Button

Button.defaultProps = {
    fullWidth: false,
    color: 'primary'
}

Button.propTypes = {
    fullWidth: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'tertiary']),
    variant: PropTypes.oneOf(['default', 'text', 'outlained', 'contained']),
    onClick: PropTypes.func
}