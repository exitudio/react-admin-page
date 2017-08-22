export const CHANGE_PAGE = 'change_page'

export const HOME_PAGE = 'home_page'
export const PAGE_1 = 'page1'
export const PAGE_2 = 'page2'
export const PAGE_3 = 'page3'
export const PAGE_4 = 'page4'

export function changePage(pageName){
    return {
        type: CHANGE_PAGE,
        payload:pageName
    }
}