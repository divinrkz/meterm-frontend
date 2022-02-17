import React from 'react'
import renderer from 'react-test-renderer'
import { expect } from 'vitest'
import {Form} from '../../src/components'

function toJson(component) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result
}

test('Form Testing', () => {
  const component = renderer.create(
    <Form formState={{meterNumber: '', amount: ''}} />,
  );
  
  let tree = toJson(component)
  expect(tree.type).toStrictEqual('form')
  expect(tree.children[tree.children.length - 1].type).toStrictEqual('button')

})