import { User } from '../../../User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED ='createdAt',
    CREAT ='creat',
}

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
type: ArticleBlockType.CODE;
code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src:string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs:string[];
    title?:string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
    ALL = 'all',
    IT = 'IT',
    SCIENCE = 'SCINCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
BIG ='BIG',
SMALL= 'SMALL',
}

export interface Article {
      id: string;
      title: string;
      user:User;
      subtitle: string;
      img: string;
      views: number;
      createdAt: string;
      type: ArticleType[];
      blocks:ArticleBlock[];
}
