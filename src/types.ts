export interface user {
  uid        : string
  email      : string
  name?      : string // should deprecate (duplicate displayName)
  displayName : string;
  lastLogin? : number
  photoUrl?  : string
  trusted?   : boolean
  roles?     : string[]
  //security? : userSecurity
  
}