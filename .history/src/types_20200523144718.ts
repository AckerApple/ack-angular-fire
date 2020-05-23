export interface user {
  uid        : string
  email      : string
  name       : string
  lastLogin? : number
  photoUrl?  : string
  trusted?   : boolean
  roles?     : string[]
  //security? : userSecurity
  displayName? : string
}