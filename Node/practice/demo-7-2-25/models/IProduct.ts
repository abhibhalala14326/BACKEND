
export interface IProduct {
    _id: number
    title: string
    content: string
    author: string
    comments: Comment
    metadata: Metadata
}

export interface Comment {
    user: string
    text?: string
}

export interface Metadata {
    views: number
    likes: number
}
