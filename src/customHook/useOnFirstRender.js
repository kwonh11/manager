import PropTypes from 'prop-types';

// contstructor 훅
export default function useOnFirstRender (func) {
    const isFirstRef = React.useRef(true);
    if (isFirstRef.current) {
        isFirstRef.current = false;
        func();
    }
}
useOnFirstRender.propTypes = {
    func : PropTypes.func
}