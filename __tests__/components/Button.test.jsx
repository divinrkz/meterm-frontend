import React from 'react'
import renderer from 'react-test-renderer'
import { expect } from 'vitest'
import {Button} from '../../src/components'

function toJson(component) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result
}

test('Button Testing', () => {
  const component = renderer.create(
    <Button  />,
  )
  let tree = toJson(component)
  expect(tree.type).toStrictEqual('button')
  expect(tree.children).toStrictEqual(null)

})