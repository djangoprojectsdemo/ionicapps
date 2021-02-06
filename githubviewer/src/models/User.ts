//user model

export interface User{
    name:string;
    email:string;
    login:string;
    avatar_url:string;
    public_repos:number;
    public_gists:number;
    followers:number;
    following:number;
    bio:string;
}