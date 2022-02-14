import PropTypes from 'prop-types'
import * as S from './styles'

const Heading = ({ text, isDisabled }) => {
    return(
        <S.Heading isDisabled={isDisabled}>{text}</S.Heading>
    )
}

export default Heading

Heading.defaultProps = {
    isDisabled: false
}
Heading.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool
}
