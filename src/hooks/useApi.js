export const POPULATE_ALL = 'populate=*'
export const SORT_DESC = 'sort=createdAt%3Adesc'

export async function useApi(url) {
    try {
        const response = await fetch(`https://${process.env.NEXT_PUBLIC_API_DOMAIN}/api${url}`, {
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
            }
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`An error occurred: ${error.message}`);
    }
}