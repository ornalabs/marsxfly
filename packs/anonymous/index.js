import React from 'react'

export default function Anonymus() {
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

  return <avatar src="anonymous.glb" />
}

// export const store = {
//   state: {
//     // color: 'white',
//   },
//   actions: {
//     toggleColor(state) {
//       // state.color = state.color === 'white' ? 'black' : 'white'
//     },
//   },
// }
