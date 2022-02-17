import React from 'react'
import renderer from 'react-test-renderer'
import { expect } from 'vitest'
import {Navbar} from '../../src/components'

function toJson(component) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).toBeInstanceOf(Array)
  return result
}

test('Navbar Testing', () => {
  const component = renderer.create(
    <Navbar />,
  )
  let tree = toJson(component)

  expect(tree[0].type).toStrictEqual('nav')

  
})