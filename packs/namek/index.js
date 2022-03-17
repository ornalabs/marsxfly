import React from 'react'
import { seed } from 'hyperfy'

const rand = seed(1337)

const trees = []
const numTrees = 200
const dist = 100
for (let i = 0; i < numTrees; i++) {
  trees.push({
    id: i,
    pos: [rand(-dist, dist), rand(-200, 0) / 200, rand(-dist, dist)],
    sca: rand(200, 1000) / 1000,
  })
}

export default function Namek() {
  return (
    <space hdr="sky.hdr">
      <skysphere src="sky.jpg" />
      <rigidbody>
        <model src="grass.glb" />
      </rigidbody>
      {trees.map(tree => (
        <rigidbody key={tree.id} position={tree.pos}>
          <model src="tree.glb" scale={tree.sca} />
        </rigidbody>
      ))}
      <spawn />
    </space>
  )
}
