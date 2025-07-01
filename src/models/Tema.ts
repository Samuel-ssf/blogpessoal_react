import type Postagem from "./Postagem";

export default interface Tema{
    id?:undefined | number;
    descricao: string;
    postagem?: Postagem[] | null;
}