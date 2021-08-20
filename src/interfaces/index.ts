// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

// export type Profile = {
//   id: string
//   avatar_url: string
//   username: string
//   frist_name: string
//   last_name: string
//   student_id: string
//   university: string
// }

export const DEFAULT_AVATARS_BUCKET = 'avatars'

export type Profile = {
  id: string
  avatar_url: string
  username: string
  website: string
  updated_at: string
}
