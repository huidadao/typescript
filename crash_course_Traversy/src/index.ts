// Basic Types
let id: number = 5
let company: string = 'Hui Media'
let isPublished: boolean = true
let x: any = 'Hello'


let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Alex', true]
// Tuple Array
let employee: [number, string][]

employee = [
  [1, 'Alex'],
  [2, 'John'],
  [3, 'Brad'],
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John'
}

// Type Assertion
let cid: any = 1
// let customerId = <number>cid
let customerId = cid as number

// Functions
function addNum(x:number, y:number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John'
}

interface MathFunc {
  (x: number, y: number): number
}
const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
class Person {
  id: number
  name: string

  constructor() {
    console.log(123)
  }
}

const brad = new Person()

