import {Role} from './role';

export interface User {

  id?: number;
  nom: string;
  prenom: string;
  username: string;
  password: string;
  email: string;
  actived: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  photo: string;
  photoName: string;
  roles: Role[];

}
