import mock from './mock'

const database = [
  {
    id: 1,
    fullName: 'John Doe',
    username: 'johndoe',
    password: 'admin',
    email: 'admin@demo.com',
    role: 'admin',
    abilities: [
      {
        action: 'manage',
        subject: 'all',
      },
    ],
  },
  {
    id: 2,
    fullName: 'Jane Doe',
    username: 'janedoe',
    password: 'client',
    email: 'client@demo.com',
    role: 'client',
    abilities: [
      {
        action: 'read',
        subject: 'Auth',
      },
      {
        action: 'read',
        subject: 'AclDemo',
      },
    ],
  },
]
mock.onGet('/login').reply((request) => {
  const params =  request.params
  
 const user = database.find(user => {
     return user.username === params.username && user.password === params.password
 })
  
  if (user) {
    return [ 200, user]
  }
  
  return [400, { email: ['Email or Password is Invalid']}]
})

mock.onPost('/register').reply(request => {
  const { username, email, password } = JSON.parse(request.data)
  console.log(username);
  console.log(email);
  console.log(password);
  
  
    
  return [200]
})