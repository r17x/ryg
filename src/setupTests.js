import React from 'react'
import {
  rerender,
  render,
  cleanup,
  fireEvent,
  waitForElement,
  Simulate,
} from 'react-testing-library'

Object.assign(global, {
  React,
  Simulate,
  rerender,
  render,
  cleanup,
  fireEvent,
  waitForElement,
})
