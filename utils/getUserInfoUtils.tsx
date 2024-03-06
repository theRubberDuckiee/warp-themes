export const fetchTwitterUserDescription = async (username) => {
    const response = await fetch('/api/twitter', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
        }),
    });

    if (!response.ok) {
        throw new Error(`Failed to create theme. Status: ${response.status}`);
    }

    const json = await response.json();
    return json.data.description
}