import React from 'react'
import renderer from 'react-test-renderer'
import { expect } from 'vitest'
import {Alert} from '../../src/components'

function toJson(component) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result
}

test('Alert Box Testing', () => {
  const component = renderer.create(
    <Alert success={false} message={"Message"} />,
  )
  let tree = toJson(component)
  expect(tree.type).toStrictEqual('div')

  const children = ['p', 'span'];
  for (let i=0; i < tree.children.length; i++) {
    expect(tree.children[i].type).toStrictEqual(children[i])
  }
})