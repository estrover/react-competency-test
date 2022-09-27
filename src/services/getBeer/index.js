export const getBeer = async () => {
    const url = `${process.env.REACT_APP_BASE_API}beer/random_beer`
    const res = await fetch(url)
    return res;
}