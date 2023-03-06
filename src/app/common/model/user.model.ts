export interface User {
    id: number,
    firstName: string,
    lastName: string
}

export enum Menu {
    BOOKS = 'Books',
    USERS = 'Users',
    BORROWINGS = 'Borrowings'
}