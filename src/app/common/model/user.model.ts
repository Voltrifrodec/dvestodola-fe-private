export interface User {
    id: number,
    name: string,
    surname: string
}

export enum Menu {
    BOOKS = 'Books',
    USERS = 'Users',
    BORROWINGS = 'Borrowings'
}