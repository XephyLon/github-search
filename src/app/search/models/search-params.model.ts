export type SortOption = 'followers' | 'repositories' | 'joined' | '';

export interface SearchParams {
    query?: string;
    perPage?: number;
    sort?: SortOption;
    order?: 'asc' | 'desc';
    page?: number;
}