import React from 'react'
import {
  rerender,
  render,
  cleanup,
  fireEvent,
  waitForElement,
  Simulate,
} from 'react-testing-library'
import 'jest-dom/extend-expect'

Object.assign(global, {
  React,
  Simulate,
  rerender,
  render,
  cleanup,
  fireEvent,
  waitForElement,
})
