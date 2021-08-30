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

console.log(Direction1.Left)