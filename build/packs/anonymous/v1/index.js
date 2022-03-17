'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function Anonymus() {
  // const { isOwner, dispatch } = usePack()
  // const color = useSelector(state => state.color)
  // useEffect(() => {
  //   if (!isOwner()) return
  //   let timer
  //   function toggle() {
  //     dispatch('toggleColor')
  //     timer = setTimeout(toggle, 5000)
  //   }
  //   toggle()
  //   return () => clearTimeout(timer)
  // }, [])
  return /*#__PURE__*/React__default["default"].createElement("avatar", {
    src: "anonymous.glb"
  });
} // export const store = {
//   state: {
//     // color: 'white',
//   },
//   actions: {
//     toggleColor(state) {
//       // state.color = state.color === 'white' ? 'black' : 'white'
//     },
//   },
// }

exports["default"] = Anonymus;
