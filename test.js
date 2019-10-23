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
    expect(result).toEqual(
      expect.objectContaining({
        height: expect.any(Number),
        width: expect.any(Number)
      })
    )
    expect(result.getArea()).toBeDefined()
  })

  it('Create a function which returns a promise by resolving the value specified in the parameter', async () => {
    // Create a resolve promise which resolves the parameter being sent
    const resolvePromise = null
    /* const resolvePromise = data =>
      new Promise((resolve, reject) => {
        resolve(data)
      }) */
    expect(resolvePromise('Success')).resolves.toEqual('Success')
    // Create a reject promise which rejects with an object of key error and value as the parameter being sent
    const rejectPromise = null
    /* const rejectPromise = data =>
      new Promise((resolve, reject) => {
        reject({
          error: data
        })
      }) */
    expect(rejectPromise('Failure Reject')).rejects.toEqual({
      error: 'Failure Reject'
    })
  })

  it('Add/Delete attributes to object', () => {
    const obj1 = {
      name: 'Roger Federer',
      profession: 'tennnis'
    }
    // Create a new object in obj2 from obj1 and add a new attribute named "ranking" with a value of 3
    const obj2 = null
    expect(obj2).toMatchSnapshot()
    // Create a new object in obj3 from obj1 by deleting the attribute "profession"
    const obj3 = null
    expect(obj3).toEqual({ name: 'Roger Federer' })
  })

  it('Group by on array of objects', () => {
    const obj = [
      {
        name: 'James',
        score: 90,
        division: 1
      },
      {
        name: 'Mark',
        score: 100,
        division: 1
      },
      {
        name: 'Thomas',
        score: 70,
        division: 2
      },
      {
        name: 'Jack',
        score: 60,
        division: 3
      }
    ]
    // Write code to group by on the array of object using division
    const groupedByObj = {}
    expect(groupedByObj).toMatchSnapshot()
  })
})
