import PropTypes from 'prop-types'
import * as S from './styles'

const Subheading = ({ text, isDisabled }) => {
    return(
        <S.Subheading isDisabled={isDisabled}>{text}</S.Subheading>
    )
}

export default Subheading

Subheading.propTypes = {
    text: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool
}
