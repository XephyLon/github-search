export type SortOption = 'followers' | 'repositories' | 'joined' | '';

export interface SearchParams {
    perPage?: number
    sort?: SortOption;
    order?: 'asc' | 'desc';
    page?: number;
}