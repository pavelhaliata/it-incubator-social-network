export function pagesCreator(pages: Array<number>, totalPage: number, currentPage: number) {
    if (totalPage > 10) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pages.push(i)
                if (i == totalPage) break
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i)
                if (i == totalPage) break
            }
        }
    } else {
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i)
        }
    }
}
