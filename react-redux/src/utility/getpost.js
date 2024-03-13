export const getpost = async () => {
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/1`
    );

    return result.json();
};