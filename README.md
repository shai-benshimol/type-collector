# type-collector

type-collector is a typescript package that management **LocalStorage**, **Session Storage** and **Cookies** for **Typescript**, Objects, Array and Primitives types.

##### using npm
``` npm i type-collector --save```

##### using yarn
``` yarn add type-collector```

## Usage
* [Local Storage](#Local-Storage)
* [Session Storage](#Session-Storage)
* [Cookies](#cookies)

```typescript
import {TypeCollector} from 'type-collector';
```

### Local Storage
```typescript
let storage = TypeCollector.Factory.Storage;
```
##### Add Primitive Types
```typescript
storage.add("token","ooo.ooo.ooo")
       .add("IDE",12)
       .add("is-auth",true);                    
```
##### Add Object / Array Type
```typescript
interface User{
  id: string,
  name: string;
  age: number;
  isActive: boolean;
}

let users: Array<User> = new Array<User>();

users.push(
    {
      id: TypeCollector.uuid(),
      name: "Michael M. Delagarza",
      age: 34,
      isActive: true
    },
    {
      id: TypeCollector.uuid(),
      name: "Anita Alvarenga",
      age: 23,
      isActive: false
    });

storage.add("users",users);
```

##### Get Primitives Values

```typescript
let token: string = storage.get("token");
console.log(token); //ooo.ooo.ooo

let isAuth: boolean = storage.get("is-auth");
console.log(isAuth); //true
```
##### Get Objescts Values

```typescript
let users: Array<User> = storage.get<Array<User>>("users");

users.forEach(user => {
      console.log(user)
})
/*
{id: "2795f29d-c3b6-404e-baba-6e5a50fab87f", name: "Michael M. Delagarza", age: 34, isActive: true}
{id: "559d98de-a217-4125-9659-09851c419e53", name: "Anita Alvarenga", age: 23, isActive: false}
*/
```

##### Remove Values from Storage

```typescript
storage.remove("token")
       .remove("users")
```
##### Remove All Values from Storage
 ```
 storage.removeAll();
 ```
## Session Storage
>Session Storage similar to Local Storage but expires when the browser closed

```typescript
let session = TypeCollector.Factory.Session;
```
##### Add Sessions
```typescript
session.add("id", TypeCollector.uuid())
       .add("secure", false)
       .add("post",{
              message: "some post goes here",
              date: new Date()
           })
```
##### Get Session
```typescript
let post = session.get<Object>("post")
console.log(post)

//{message: "some post goes here", date: "2019-06-11T13:28:11.892Z"}
```
##### Remove Sessions
```typescript
session.remove("id")
       .remove("posts") 
```
##### Remove All Sessions
```typescript
session.removeAll();
```
### Cookies
>Cookies similar to Local Storage besides expiration date parameter

```typescript
let cookie = TypeCollector.Factory.Cookie;
```
##### Add Cookies
```typescript
//add expired date
let expired = new Date("2020-01-01")

cookie.add("uuid",TypeCollector.uuid(), expired)
      .add("users",users) //users array
```
##### Get Cookies
```typescript
console.log(cookie.get("uuid"));
//cb3b619e-0d13-4d5c-a77a-5e5104a0cbc7

let users: Array<User> = cookie.get<Array<User>>("users");

users.forEach(user => {
      console.log("id",user.id)
})
//b4a1d009-d86d-447e-976d-e2727ade9c9f
//b4a1d009-d86d-447e-976d-e2727ade9c9f
```
##### Remove Cookie
```typescript
session.remove("uuid")
       .remove("users") 
```
##### Remove All Cookies
```typescript
session.removeAll();
```
