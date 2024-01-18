export type Pokemon = {
    id: string,
    name: string,
    base_experience: string,
    sprites: {
        front_default: string
    }
}

export interface Users {
    id: string,
    email: string | null,
    isAdmin: boolean,
    image: string | null,
    name:string | null,
  }

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Stats = {
    id: string;
    credits: number;
    experience: number;
    level: number;
    userId: string;
}