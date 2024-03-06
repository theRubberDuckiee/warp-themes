import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
    try {
        const accessToken = "AAAAAAAAAAAAAAAAAAAAALf2oQEAAAAAclZ%2BYcPV88cdTa6gIe7HisdcVGQ%3Df4mJwfzq3uvG80z7nj6HmIenAsmsqFy7CFExANmmn1YdndvIET"

        if (!accessToken) {
            throw new Error('Access token not provided');
        }

        const apiUrl = `https://api.twitter.com/2/users/by/username/${request.body.username}?user.fields=description`;
        const fetchResponse = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        
        const userData = await fetchResponse.json();
        response.status(fetchResponse.status).json(userData);
    } catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });
    }
}
