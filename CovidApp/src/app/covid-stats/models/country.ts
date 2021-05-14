import {Cases} from './cases'
import {Deaths} from './deaths'
import {Tests} from './tests'


export interface Country {
  name: string,
  continent: string,
  population: number,
  day: string,
  cases: Cases,
  deaths: Deaths,
  tests: Tests,
  time: string
}