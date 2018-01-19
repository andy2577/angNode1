export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';

export class LoadUserAction  {
    readonly type = LOAD_USERS;
    constructor() {}
}

export class LoadUserActionSuccess  {
    readonly type = LOAD_USERS_SUCCESS;
    constructor(public payload: any[]) {}
}

export type Action = LoadUserAction | LoadUserActionSuccess; // only for code completion
