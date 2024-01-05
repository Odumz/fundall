export const useFormatDate:any = (date:any) => {
    const day:any = date?.getDate();
    const month:any = date?.getMonth() + 1;
    const year:any = date?.getFullYear();

    return `${day}/${month}/${year}`;
}