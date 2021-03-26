export interface SearchParamsModel {
    perPage?: number
    sort?: 'followers' | 'repositories' | 'joined' | '';
    order?: 'asc' | 'desc';
    page?: number;
}