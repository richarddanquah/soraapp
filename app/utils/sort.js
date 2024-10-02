
// Sort data by Created Asc
export const sortByDate = (items)=> {
    return items.sort((a,b)=> new Date(a.createdAt) - new Date(b.createdAt));
};

// Sort filename with numbers treated numerically
const naturalSort = (a,b)=> {
    return a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: 'base'
    });
};

// Sort filename by Asc
export const sortByFilenameAsc = (items)=> {
   return items.sort((a,b)=> naturalSort(a.filename,b.filename));

}

// Sort filename by Desc
export const sortByFilenameDesc = (items)=> {
    return items.sort((a,b)=> naturalSort(b.filename,a.filename));
}