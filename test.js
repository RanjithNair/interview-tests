describe('Coding Tests', () => {
  it('Increase the age attribute by 2', () => {
    let obj = [
      {
        name: 'Roger Federer',
        age: 37
      },
      {
        name: 'Rafael Nadal',
        age: 32
      },
      {
        name: 'Novak Djokovic',
        age: 30
      }
    ]
    const modifiedObj = []
    expect(obj).toMatchSnapshot()
  })

  it('Print all the keys of the objects in an array', () => {
    const obj = {
      age: '22',
      name: 'ABC',
      place: 'Milwaukee',
      designation: 'Software Developer'
    }
    const objKeys = []
    expect(objKeys).toMatchSnapshot()
  })

  it('Print all the values of the objects in an array', () => {
    const obj = {
      age: '22',
      name: 'ABC',
      place: 'Milwaukee',
      designation: 'Software Developer'
    }
    const objValues = []
    expect(objValues).toMatchSnapshot()
  })

  it('Find all the entries whose age is more than 20', () => {
    let obj = [
      {
        name: 'Mark James',
        age: 18
      },
      {
        name: 'AB Daniels',
        age: 22
      },
      {
        name: 'Thomas Jeffrey',
        age: 25
      }
    ]
    const result = []
    expect(result).toMatchSnapshot()
  })

  it('Find average of the numbers in an array', () => {
    const data = [29.76, 41.85, 46.5]
    const result = 0
    expect(result).toMatchSnapshot()
  })

  it('Sort array of objects', () => {
    const data = [
      {
        ranking: 3,
        name: 'Roger Federer'
      },
      {
        ranking: 1,
        name: 'Rafael Nadal'
      },
      {
        ranking: 2,
        name: 'Novak Djokovic'
      }
    ]
    const result = []
    expect(result).toMatchSnapshot()
  })

  it('Create a object of class Shape with 2 attributes (height, width) and a method getArea which returns area = height * width', () => {
    class Shape {
      constructor(height, width) {
        this.height = height
        this.width = width
      }
      getArea() {
        return this.height * this.width
      }
    }
    const result = null
    expect(result).toEqual(expect.objectContaining({
      height: expect.any(Number),
      width: expect.any(Number)
    }))
    expect(result.getArea()).toBeDefined()
  })
})
